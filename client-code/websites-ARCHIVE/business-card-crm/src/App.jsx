import React, { useState, useEffect, useRef } from 'react';
import { 
  ScanLine, Users, Camera, Image as ImageIcon, MessageCircle, Mail, Phone, Edit2, Trash2, Check, X, LogOut, Key
} from 'lucide-react';

import './index.css';


// Firebase Imports
import { auth, db } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

const inputStyle = { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '15px', outline: 'none', boxSizing: 'border-box' };
const selectStyle = { ...inputStyle, appearance: 'none' };
const labelStyle = { display: 'block', fontSize: '11px', fontWeight: '600', marginBottom: '4px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' };
const fieldStyle = { marginBottom: '12px' };

const Field = ({ label, value, onChange, type = 'text' }) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    <input type={type} value={value || ''} onChange={onChange} style={inputStyle} />
  </div>
);

const Sel = ({ label, value, onChange, options }) => (
  <div style={fieldStyle}>
    <label style={labelStyle}>{label}</label>
    <select value={value || ''} onChange={onChange} style={selectStyle}>
      {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
    </select>
  </div>
);

const Section = ({ title }) => (
  <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.2px', padding: '0 0 10px 0', marginBottom: '14px', borderBottom: '1px solid var(--border)' }}>{title}</div>
);

const Card = ({ children }) => (
  <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '12px' }}>{children}</div>
);

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authView, setAuthView] = useState('login'); // 'login' | 'signup'
  const [authEmail, setAuthEmail] = useState('');
  const [authPass, setAuthPass] = useState('');
  const [authError, setAuthError] = useState('');

  const [contacts, setContacts] = useState([]);
  const [view, setView] = useState('list'); // 'list' | 'live-scan' | 'scan-processing' | 'edit'
  
  const [scanStatus, setScanStatus] = useState('');
  const [scanProgress, setScanProgress] = useState(0);
  const [editingContact, setEditingContact] = useState(null);
  const [stream, setStream] = useState(null);
  const [isLocking, setIsLocking] = useState(false);
  const [flashCapture, setFlashCapture] = useState(false);
  const [scanHint, setScanHint] = useState('Hold steady over a card…');
  const [torchOn, setTorchOn] = useState(false);
  const [cardDetectStage, setCardDetectStage] = useState(0); // 0=none, 1=aligning, 2=locked
  const [scanMode, setScanMode] = useState('1-side'); // '1-side' | '2-side'
  const [frontImageUrl, setFrontImageUrl] = useState(null); // stored front in 2-side mode
  const [showManualCapture, setShowManualCapture] = useState(false); // fallback capture button
  const [viewingContact, setViewingContact] = useState(null); // contact detail view
  const [duplicateWarning, setDuplicateWarning] = useState(null); // { existing, incoming } — duplicate modal
  const [pendingContact, setPendingContact] = useState(null); // contact waiting for duplicate confirmation

  
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const motionCanvasRef = useRef(null);
  const lastFrameRef = useRef(null);
  const steadyCountRef = useRef(0);
  const autoCaptureRef = useRef(false);
  const rafRef = useRef(null);
  const frameCountRef = useRef(0);
  const noDetectFramesRef = useRef(0); // counts frames with no card detected → manual capture hint

  // --- FIREBASE AUTHENTICATION ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- FIREBASE FIRESTORE SYNC ---
  useEffect(() => {
    if (!user) {
      setContacts([]);
      return;
    }
    
    // Listen to contacts in real-time
    const contactsRef = collection(db, 'users', user.uid, 'contacts');
    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const fetched = [];
      snapshot.forEach(doc => {
        fetched.push({ id: doc.id, ...doc.data() });
      });
      // Sort by newest first based on ID timestamp (or just list them)
      fetched.sort((a, b) => b.id - a.id);
      setContacts(fetched);
    }, (error) => {
      console.error("Firestore error: ", error);
      if(error.code === 'permission-denied') {
        alert("Permission denied. Check Firestore security rules.");
      }
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, authEmail, authPass);
    } catch (err) {
      handleAuthError(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      await createUserWithEmailAndPassword(auth, authEmail, authPass);
    } catch (err) {
      handleAuthError(err);
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      handleAuthError(err);
    }
  };

  const handleAuthError = (err) => {
    if (err.message.includes('API_KEY')) {
      setAuthError('Firebase is not configured! Please enter your real keys in src/firebase.js');
    } else {
      setAuthError(err.message.replace('Firebase: ', ''));
    }
  };

  // --- CAMERA & SCANNER LOGIC ---
  useEffect(() => {
    if (view !== 'live-scan') stopCamera();
  }, [view]);

  const startCamera = async () => {
    setFrontImageUrl(null); // reset for a fresh scan session
    setCardDetectStage(0);
    setShowManualCapture(false);
    noDetectFramesRef.current = 0;
    setView('live-scan');
    autoCaptureRef.current = true;
    steadyCountRef.current = 0;
    lastFrameRef.current = null;
    setScanHint('Hold steady over a card…');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment', 
          width: { ideal: 4096 }, 
          height: { ideal: 2160 },
          advanced: [{ focusMode: 'continuous' }] // Force Android to auto-focus continuously
        }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
        const waitForVideo = () => {
          if (videoRef.current && videoRef.current.videoWidth > 0) {
            frameCountRef.current = 0;
            steadyCountRef.current = 0;
            lastFrameRef.current = null;
            rafRef.current = requestAnimationFrame(detectLoop.current);
          } else {
            requestAnimationFrame(waitForVideo);
          }
        };
        requestAnimationFrame(waitForVideo);
      }
    } catch (err) {
      alert('Camera access denied or unavailable.');
      setView('list');
    }
  };

  // Restart camera for the back side — does NOT reset frontImageUrl
  const startBackScan = async () => {
    setCardDetectStage(0);
    setShowManualCapture(false);
    noDetectFramesRef.current = 0;
    setView('live-scan');
    autoCaptureRef.current = true;
    steadyCountRef.current = 0;
    lastFrameRef.current = null;
    setScanHint('Align the back of the card…');
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment', 
          width: { ideal: 4096 }, 
          height: { ideal: 2160 },
          advanced: [{ focusMode: 'continuous' }] // Force Android to auto-focus continuously
        }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
        const waitForVideo = () => {
          if (videoRef.current && videoRef.current.videoWidth > 0) {
            frameCountRef.current = 0;
            steadyCountRef.current = 0;
            lastFrameRef.current = null;
            rafRef.current = requestAnimationFrame(detectLoop.current);
          } else {
            requestAnimationFrame(waitForVideo);
          }
        };
        requestAnimationFrame(waitForVideo);
      }
    } catch (err) {
      alert('Camera access denied or unavailable.');
      setView('list');
    }
  };

  const stopCamera = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    autoCaptureRef.current = false;  // ← must be false, not true — prevents ghost captures after stop
    lastFrameRef.current = null;
    steadyCountRef.current = 0;
    setTorchOn(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const toggleTorch = async () => {
    if (!stream) return;
    const track = stream.getVideoTracks()[0];
    if (!track) return;
    try {
      const newState = !torchOn;
      await track.applyConstraints({ advanced: [{ torch: newState }] });
      setTorchOn(newState);
    } catch (e) {
      // torch not supported on this device
    }
  };


  // --- SMART CARD DETECTION HELPERS ---
  // Sobel edge detection on a small canvas region — returns edge density score 0-1
  const computeEdgeDensity = (pixels, W, H) => {
    // Convert to grayscale first
    const gray = new Float32Array(W * H);
    for (let i = 0; i < W * H; i++) {
      gray[i] = (pixels[i * 4] * 0.299 + pixels[i * 4 + 1] * 0.587 + pixels[i * 4 + 2] * 0.114);
    }
    // Sobel operator
    let edgeSum = 0;
    let edgeCount = 0;
    for (let y = 1; y < H - 1; y++) {
      for (let x = 1; x < W - 1; x++) {
        const idx = y * W + x;
        const gx =
          -gray[idx - W - 1] + gray[idx - W + 1] +
          -2 * gray[idx - 1]  + 2 * gray[idx + 1] +
          -gray[idx + W - 1]  + gray[idx + W + 1];
        const gy =
          -gray[idx - W - 1] - 2 * gray[idx - W] - gray[idx - W + 1] +
           gray[idx + W - 1]  + 2 * gray[idx + W] + gray[idx + W + 1];
        const mag = Math.sqrt(gx * gx + gy * gy);
        if (mag > 30) edgeCount++; // threshold for a meaningful edge
        edgeSum += mag;
      }
    }
    return edgeCount / ((W - 2) * (H - 2)); // fraction of pixels that are edges
  };

  // Content variance — returns variance of luma across the frame
  const computeVariance = (pixels, count) => {
    let sum = 0, sumSq = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      const luma = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
      sum += luma;
      sumSq += luma * luma;
    }
    const mean = sum / count;
    return (sumSq / count) - (mean * mean);
  };

  // Motion diff — avg pixel diff between current and last frame
  const computeMotionDiff = (frame, lastFrame, count) => {
    let totalDiff = 0;
    for (let i = 0; i < frame.length; i += 4) {
      totalDiff +=
        Math.abs(frame[i]   - lastFrame[i]) +
        Math.abs(frame[i+1] - lastFrame[i+1]) +
        Math.abs(frame[i+2] - lastFrame[i+2]);
    }
    return totalDiff / (count * 3);
  };

  // High-accuracy auto-capture loop based on motion, luma, edge detection, and quad hull
  const detectLoop = useRef(null);
  detectLoop.current = () => {
    if (!videoRef.current) return;

    if (!autoCaptureRef.current) {
      rafRef.current = requestAnimationFrame(detectLoop.current);
      return;
    }

    frameCountRef.current++;
    // Throttle heavy checks to every 3rd frame
    if (frameCountRef.current % 3 !== 0) {
      rafRef.current = requestAnimationFrame(detectLoop.current);
      return;
    }

    const video = videoRef.current;
    if (video.videoWidth === 0) {
      rafRef.current = requestAnimationFrame(detectLoop.current);
      return;
    }

    // Downscale for analysis to save CPU
    const canvas = document.createElement('canvas');
    const W = 320;
    const H = Math.floor(video.videoHeight * (W / video.videoWidth));
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(video, 0, 0, W, H);

    const imgData = ctx.getImageData(0, 0, W, H);
    const pixels = imgData.data;
    const count = W * H;

    const variance = computeVariance(pixels, count);
    const hasGoodContrast = variance > 800; // relaxed from 1000

    let isMotionSteady = false;
    if (lastFrameRef.current) {
      const motionDiff = computeMotionDiff(pixels, lastFrameRef.current, count);
      isMotionSteady = motionDiff < 25; // relaxed from 15 — hands shake
    }
    lastFrameRef.current = new Uint8ClampedArray(pixels);

    const edgeDensity = computeEdgeDensity(pixels, W, H);
    const hasTextEdges = edgeDensity > 0.03 && edgeDensity < 0.30; // wider range

    if (hasGoodContrast && isMotionSteady && hasTextEdges) {
      steadyCountRef.current++;
      setCardDetectStage(Math.min(3, Math.floor(steadyCountRef.current / 5)));
    } else {
      // Don't fully reset — just decay. One bad frame shouldn't kill progress.
      steadyCountRef.current = Math.max(0, steadyCountRef.current - 5);
      if (steadyCountRef.current === 0) setCardDetectStage(0);
      noDetectFramesRef.current++;
    }

    if (noDetectFramesRef.current > 90) { // ~4.5 seconds of no detection → show manual button
      setShowManualCapture(true);
    }

    // Need 15 consecutive-ish steady frames (approx 0.75 seconds)
    if (steadyCountRef.current >= 15) {
      autoCaptureRef.current = false;
      doCapture();
      return;
    }

    rafRef.current = requestAnimationFrame(detectLoop.current);
  };


  // Direct capture with snap animation: corners lock → white flash → process
  const doCapture = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // 1. Snap corners green → inward
    setIsLocking(true);
    setScanHint('Scanning…');

    await new Promise(r => setTimeout(r, 350));

    // 2. Grab the raw frame and downscale (prevent Vercel 4.5MB payload limit)
    let targetWidth = video.videoWidth;
    let targetHeight = video.videoHeight;
    const MAX_DIM = 1280;
    if (targetWidth > MAX_DIM || targetHeight > MAX_DIM) {
      if (targetWidth > targetHeight) {
        targetHeight = Math.round((targetHeight * MAX_DIM) / targetWidth);
        targetWidth = MAX_DIM;
      } else {
        targetWidth = Math.round((targetWidth * MAX_DIM) / targetHeight);
        targetHeight = MAX_DIM;
      }
    }
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, targetWidth, targetHeight);

    // 3. Raw image — NO crop, NO contrast, NO sharpening, NO warping
    const rawImageUrl = canvas.toDataURL('image/jpeg', 0.92);

    setFlashCapture(true);
    stopCamera();
    await new Promise(r => setTimeout(r, 250));
    setFlashCapture(false);
    setIsLocking(false);

    // 4. Hand off to AI parser
    if (scanMode === '2-side' && !frontImageUrl) {
      setFrontImageUrl(rawImageUrl);
      setView('flip-card');
    } else {
      const backUrl = frontImageUrl ? rawImageUrl : null;
      const mainUrl = frontImageUrl || rawImageUrl;
      processImage(mainUrl, backUrl);
      setFrontImageUrl(null);
    }
  };



  const captureFrame = () => {
    doCapture();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (ev) => {
      // Compress uploaded files to prevent blowing Vercel's 4.5MB payload limit
      const img = new Image();
      img.onload = () => {
        const MAX_DIM = 1280;
        let w = img.width, h = img.height;
        if (w > MAX_DIM || h > MAX_DIM) {
          if (w > h) { h = Math.round((h * MAX_DIM) / w); w = MAX_DIM; }
          else { w = Math.round((w * MAX_DIM) / h); h = MAX_DIM; }
        }
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d').drawImage(img, 0, 0, w, h);
        processImage(c.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => processImage(ev.target.result); // fallback to raw
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  const processImage = async (imageUrl, backImageUrl = null) => {
    setView('scan-processing');
    setScanStatus('Analyzing with AI...');
    setScanProgress(20);

    try {
      const response = await fetch('/api/parse-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: imageUrl, imageBase64Back: backImageUrl })
      });
      
      setScanProgress(80);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const parsedData = await response.json();
      setScanProgress(100);

      // Log real OpenAI error to console for our debugging, but show clean UI to user
      if (parsedData._error) {
        console.error('OpenAI API Error:', parsedData._status, parsedData._error);
        setScanStatus('An error occurred during analysis. Please try again.');
        setTimeout(() => setView('list'), 3500);
        return;
      }

      // AI rejection layer — if GPT says it's not a card, abort cleanly
      if (parsedData.isCard === false) {
        setScanStatus('No business card detected. Please try again.');
        setTimeout(() => {
          setView('live-scan');
          startCamera();
        }, 2000);
        return;
      }

      // --- DUPLICATE DETECTION ---
      // Compare parsed card against all existing contacts in memory (no API call needed)
      const newEmail = (parsedData.primaryContact?.email || '').trim().toLowerCase();
      const newPhone = (parsedData.primaryContact?.mobileNo || parsedData.primaryContact?.phone || '').trim().replace(/\s+/g, '');
      const newName  = ((parsedData.primaryContact?.firstName || '') + ' ' + (parsedData.primaryContact?.lastName || '')).trim().toLowerCase();
      const newOrg   = (parsedData.organizationName || '').trim().toLowerCase();

      let duplicate = null;
      for (const existing of contacts) {
        const exEmail = (existing.primaryContact?.email || '').trim().toLowerCase();
        const exPhone = (existing.primaryContact?.mobileNo || existing.primaryContact?.phone || '').trim().replace(/\s+/g, '');
        const exName  = ((existing.primaryContact?.firstName || '') + ' ' + (existing.primaryContact?.lastName || '')).trim().toLowerCase();
        const exOrg   = (existing.organizationName || '').trim().toLowerCase();

        const emailMatch = newEmail && exEmail && newEmail === exEmail;
        const phoneMatch = newPhone && exPhone && newPhone.length > 6 && exPhone.includes(newPhone.slice(-8));
        const nameOrgMatch = newName && exName && newName === exName && newOrg && exOrg && newOrg === exOrg;

        if (emailMatch || phoneMatch || nameOrgMatch) {
          duplicate = existing;
          break;
        }
      }

      const incomingContact = {
        id: Date.now().toString(),
        leadOwner: '',
        status: 'Lead',
        source: '',
        requestType: '',
        campaignName: 'Gifts India 2026',
        territory: 'Mumbai',
        marketSegment: '',
        organizationName: parsedData.organizationName || '',
        website: parsedData.website || '',
        industry: '',
        annualRevenue: '',
        noOfEmployees: '1-10',
        city: parsedData.city || 'Mumbai',
        stateProvince: parsedData.stateProvince || 'Maharashtra',
        country: parsedData.country || '',
        address: parsedData.address || '',
        primaryContact: { salutation: '', gender: '', firstName: '', middleName: '', lastName: '', fullName: '', jobTitle: '', email: '', mobileNo: '', phone: '', phoneExt: '', whatsapp: '', fax: '', ...(parsedData.primaryContact || {}) },
        secondaryContact: parsedData.secondaryContact ? { salutation: '', gender: '', firstName: '', middleName: '', lastName: '', fullName: '', jobTitle: '', email: '', mobileNo: '', phone: '', phoneExt: '', whatsapp: '', fax: '', ...parsedData.secondaryContact } : null,
        leadType: 'Client',
        customerGroup: '',
        supplierGroup: '',
        rawText: JSON.stringify(parsedData),
        imageUrl
      };

      if (duplicate) {
        // Pause and show duplicate warning — don't navigate to editor yet
        setPendingContact(incomingContact);
        setDuplicateWarning({ existing: duplicate, incoming: incomingContact });
        setView('list'); // go back to list so the modal sits on top of it
      } else {
        setEditingContact(incomingContact);
        setView('edit');
      }
    } catch (err) {
      console.error('AI Processing Error:', err);
      setScanStatus(`Failed: ${err.message}`);
      setTimeout(() => setView('list'), 5000);
    }
  };

  // --- FIRESTORE WRITES ---
  // Compress imageUrl to a tiny thumbnail safe for Firestore's 1MB document limit.
  // Full-res 1024x640 @ 0.95 quality ≈ 300-600KB base64 → FAR over the 1MB doc limit.
  // We compress to 400x250 @ 0.50 quality ≈ 8-15KB base64 — well within limits.
  const compressImageForStorage = (dataUrl) => {
    return new Promise((resolve) => {
      if (!dataUrl) return resolve('');
      try {
        const img = new Image();
        img.onload = () => {
          const MAX_WIDTH = 400;
          let width = img.width;
          let height = img.height;
          
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }

          const thumb = document.createElement('canvas');
          thumb.width = width;
          thumb.height = height;
          thumb.getContext('2d').drawImage(img, 0, 0, width, height);
          const result = thumb.toDataURL('image/jpeg', 0.45);
          
          // Safety: if compressed base64 is still over 200KB, drop image entirely
          // Firestore 1MB limit minus all other fields ≈ 800KB headroom, but be safe
          if (result.length > 200000) {
            console.warn('[compress] Thumbnail still too large (' + Math.round(result.length/1024) + 'KB), dropping image');
            resolve('');
          } else {
            resolve(result);
          }
        };
        img.onerror = () => resolve('');
        img.src = dataUrl;
      } catch (e) {
        console.warn('[compress] Failed:', e);
        resolve('');
      }
    });
  };

  const saveContact = async () => {
    if (!editingContact || !user) return;
    
    // Retry wrapper for network resilience
    const trySave = async (attempt = 1) => {
      try {
        // Compress the image to a safe size before writing to Firestore
        const thumbUrl = await compressImageForStorage(editingContact.imageUrl);
        const contactRef = doc(db, 'users', user.uid, 'contacts', editingContact.id);
        const isClient = editingContact.leadType === 'Client';
        const isPartner = editingContact.leadType === 'Channel Partner';

        const finalContactData = {
          // Lead meta
          leadOwner:     editingContact.leadOwner     || '',
          status:        editingContact.status        || 'Lead',
          source:        editingContact.source        || '',
          requestType:   editingContact.requestType   || '',
          campaignName:  editingContact.campaignName  || '',
          territory:     editingContact.territory     || '',
          marketSegment: editingContact.marketSegment || '',
          // Organization
          organizationName: editingContact.organizationName || '',
          website:          editingContact.website          || '',
          industry:         editingContact.industry         || '',
          annualRevenue:    editingContact.annualRevenue    || '',
          noOfEmployees:    editingContact.noOfEmployees    || '',
          // Location
          city:          editingContact.city          || '',
          stateProvince: editingContact.stateProvince || '',
          country:       editingContact.country       || '',
          address:       editingContact.address       || '',
          // Contacts
          primaryContact:   editingContact.primaryContact,
          secondaryContact: editingContact.secondaryContact,
          // CRM dropdowns
          leadType:      editingContact.leadType      || '',
          customerGroup: editingContact.customerGroup || '',
          supplierGroup: editingContact.supplierGroup || '',
          rawText:   editingContact.rawText,
          imageUrl:  thumbUrl,
          createdAt: editingContact.createdAt || Date.now(),
        };

        await setDoc(contactRef, finalContactData);

        // Trigger background sync to Google Sheets (fire and forget)
        const sheetData = { ...finalContactData, id: editingContact.id, imageUrl: editingContact.imageUrl };
        fetch('/api/sync-to-sheet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contact: sheetData })
        }).catch(err => console.error('Failed to trigger Sheets sync:', err));

        // If we came from a contact detail view, go back to it with updated data
        if (viewingContact) {
          setViewingContact({ ...finalContactData, id: editingContact.id });
          setView('list');
        } else {
          setView('list');
        }
        setEditingContact(null);
      } catch(err) {
        console.error(`[saveContact] Attempt ${attempt} failed:`, err);
        if (attempt < 3) {
          // Wait briefly and retry (exponential backoff)
          await new Promise(r => setTimeout(r, attempt * 1000));
          return trySave(attempt + 1);
        }
        alert('Failed to save to cloud. Please check your internet connection and try again.\n\nError: ' + err.message);
      }
    };
    
    await trySave();
  };
  
  const deleteContact = async (id) => {
    if (!user) return;
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'contacts', id));
    } catch(err) {
      alert("Failed to delete: " + err.message);
    }
  };

  const deleteAllContacts = async () => {
    if (!user || contacts.length === 0) return;
    if (!window.confirm(`Are you sure you want to permanently delete ALL ${contacts.length} contacts? This cannot be undone.`)) return;
    try {
      await Promise.all(contacts.map(c => deleteDoc(doc(db, 'users', user.uid, 'contacts', c.id))));
    } catch(err) {
      alert("Failed to delete all: " + err.message);
    }
  };

  const handleAction = (type, value) => {
    if (!value) return alert('No valid data for this action.');
    const cleanPhone = value.replace(/[^0-9+]/g, '');
    let url = '';
    if (type === 'wa') url = `https://wa.me/${cleanPhone.startsWith('+') ? cleanPhone.substring(1) : cleanPhone}`;
    if (type === 'email') url = `mailto:${value}`;
    if (type === 'call') url = `tel:${cleanPhone}`;
    if (url) window.open(url, '_blank');
  };

  // --- UI COMPONENTS ---
  
  if (isAuthLoading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
        <div className="processing-spinner" style={{ width: '32px', height: '32px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
        <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <ScanLine size={24} style={{ color: 'var(--foreground)' }} />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.5px' }}>{authView === 'login' ? 'Sign in with email' : 'Create an account'}</h2>
          <p style={{ marginTop: '8px', fontSize: '14px', lineHeight: '1.5' }}>Scan business cards to bring your network together. Securely in the cloud.</p>
        </div>
        
        {authError && (
          <div style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--destructive)', borderRadius: '8px', marginBottom: '20px', fontSize: '13px', fontWeight: '500' }}>
            {authError}
          </div>
        )}

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={authView === 'login' ? handleLogin : handleSignup}>
          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--muted-foreground)' }} />
            <input type="email" placeholder="Email" value={authEmail} onChange={e => setAuthEmail(e.target.value)} required style={{ paddingLeft: '36px' }} />
          </div>
          <div style={{ position: 'relative' }}>
            <Key size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--muted-foreground)' }} />
            <input type="password" placeholder="Password" value={authPass} onChange={e => setAuthPass(e.target.value)} required style={{ paddingLeft: '36px' }} />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--foreground)', fontWeight: '500', cursor: 'pointer' }} onClick={() => setAuthView(authView === 'login' ? 'signup' : 'login')}>
              {authView === 'login' ? 'Create account?' : 'Already have an account?'}
            </span>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '20px 0', fontSize: '15px' }}>
            Get Started
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0', color: 'var(--muted-foreground)' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
          <span style={{ padding: '0 12px', fontSize: '12px' }}>Or continue with</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
        </div>

        <button className="btn btn-outline" onClick={handleGoogleLogin} style={{ width: '100%', padding: '20px 0', fontSize: '15px', display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>  
        </div>
      </div>
    );
  }
  
  const renderHeader = () => (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ background: 'var(--primary-gradient)', padding: '6px', borderRadius: '10px', color: '#fff' }}>
          <ScanLine size={20} />
        </div>
        <span style={{ fontWeight: '700', fontSize: '18px' }}>ScannerCRM</span>
      </div>
      <button onClick={() => { if (window.confirm("Are you sure you want to log out?")) signOut(auth); }} className="btn-icon" title="Log Out">
        <LogOut size={18} style={{ color: 'var(--destructive)' }}/>
      </button>
    </header>
  );

  const renderBottomDock = () => (
    <div className="bottom-dock">
      <div className="dock-item active" onClick={() => setView('list')}>
        <Users size={24} />
        <span>Contacts</span>
      </div>
      <div className="fab-scan" onClick={startCamera}>
        <Camera size={28} />
      </div>
      <div className="dock-item" onClick={() => fileInputRef.current?.click()}>
        <ImageIcon size={24} />
        <span>Upload</span>
      </div>
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
    </div>
  );

  const renderContactList = () => (
    <div className="content-area">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8px' }}>
        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '4px' }}>My Contacts</h1>
          <p style={{ fontSize: '14px' }}>You have 78,904 cards saved in the cloud.</p>
        </div>
      </div>
      
      {contacts.length === 0 ? (
        <div className="card glass-panel" style={{ textAlign: 'center', padding: '60px 20px', marginTop: '20px', borderStyle: 'dashed', borderColor: 'var(--border)' }}>
          <ScanLine size={48} style={{ margin: '0 auto 16px', color: 'var(--primary)', opacity: 0.9, strokeWidth: 1.5 }} />
          <h3 style={{ fontSize: '20px', fontWeight: '600' }}>No contacts yet</h3>
          <p style={{ fontSize: '15px', marginTop: '8px', maxWidth: '250px', margin: '8px auto 0' }}>Tap the camera icon below to scan your first business card.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {contacts.map(c => (
            <div key={c.id} className="card" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }} onClick={() => setViewingContact(c)}>
              <div className="card-gradient-border"></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '6px' }}>{c.primaryContact?.firstName ? `${c.primaryContact.firstName} ${c.primaryContact.lastName}`.trim() : (c.organizationName || 'Unknown')}</h3>
                  <span className="badge">{c.organizationName || 'No Company'}</span>
                </div>
                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <button className="btn-icon" onClick={e => { e.stopPropagation(); deleteContact(c.id); }} style={{ color: 'var(--danger)', background: 'rgba(239, 68, 68, 0.1)' }}><Trash2 size={16} /></button>
                  <button className="btn-icon" onClick={() => setViewingContact(c)} style={{ color: 'var(--text-muted)', background: 'var(--surface-2)' }}>
                    {/* Chevron right */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  <Phone size={14} /> {c.primaryContact?.mobileNo || c.primaryContact?.phone || 'No phone'}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  <Mail size={14} /> {c.primaryContact?.email || 'No email'}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                <button className="btn btn-outline" style={{ padding: '10px' }} onClick={e => { e.stopPropagation(); handleAction('wa', c.primaryContact?.whatsapp || c.primaryContact?.mobileNo || c.primaryContact?.phone); }} title="WhatsApp">
                  <MessageCircle size={18} style={{ color: '#10b981' }} />
                </button>
                <button className="btn btn-outline" style={{ padding: '10px' }} onClick={e => { e.stopPropagation(); handleAction('call', c.primaryContact?.mobileNo || c.primaryContact?.phone); }} title="Call">
                  <Phone size={18} style={{ color: 'var(--primary)' }} />
                </button>
                <button className="btn btn-outline" style={{ padding: '10px' }} onClick={e => { e.stopPropagation(); handleAction('email', c.primaryContact?.email); }} title="Email">
                  <Mail size={18} style={{ color: 'var(--text-main)' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {contacts.length > 0 && (
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <button className="btn btn-outline" onClick={deleteAllContacts} style={{ color: 'var(--destructive)', borderColor: 'rgba(239, 68, 68, 0.3)', padding: '12px 24px' }}>
            <Trash2 size={16} style={{ marginRight: '8px' }} />
            Delete All Contacts
          </button>
        </div>
      )}
    </div>
  );

  const renderLiveScanner = () => (
    <div className="scanner-container">
      <div className="scanner-header">
        <button className="btn-icon" onClick={() => { stopCamera(); setView('list'); }} style={{ color: '#fff', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
          <X size={20} />
        </button>
        <div style={{ fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>Scan Card</div>
        {/* Apple-style torch button */}
        <button
          className="btn-icon"
          onClick={toggleTorch}
          style={{
            color: torchOn ? '#facc15' : '#fff',
            background: torchOn ? 'rgba(250,204,21,0.25)' : 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.2s ease',
            border: torchOn ? '1px solid rgba(250,204,21,0.5)' : '1px solid transparent'
          }}
        >
          {/* Apple SF Symbols-style torch: tapered top + rounded body */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3h6l1 7H8L9 3z"/>
            <rect x="8" y="10" width="8" height="11" rx="3" ry="3"/>
            <path d="M12 1V2.5M6.5 3.5L7.5 4.8M17.5 3.5L16.5 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity={torchOn ? 1 : 0.5}/>
          </svg>
        </button>
      </div>

      {/* 1-Side / 2-Sides pill selector */}
      <div style={{
        position: 'absolute', top: '72px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 102, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)', borderRadius: '100px',
        padding: '4px', display: 'flex', border: '1px solid rgba(255,255,255,0.12)'
      }}>
        {[['1 Side', '1-side'], ['2 Sides', '2-side']].map(([label, value]) => (
          <button key={value} onClick={() => setScanMode(value)} style={{
            padding: '7px 22px', borderRadius: '100px', border: 'none',
            background: scanMode === value ? 'rgba(255,255,255,0.92)' : 'transparent',
            color: scanMode === value ? '#000' : 'rgba(255,255,255,0.7)',
            fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)', letterSpacing: '0.2px'
          }}>{label}</button>
        ))}
      </div>

      <video ref={videoRef} className="video-feed" playsInline autoPlay muted />
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* White flash on capture */}
      {flashCapture && (
        <div style={{ position: 'absolute', inset: 0, background: '#fff', zIndex: 200, animation: 'flashFade 0.25s ease-out forwards' }} />
      )}

      {/* Reticle corners — white → amber (aligning) → green (locked) */}
      <div className="scanner-overlay">
        <div className={`reticle-box${isLocking ? ' locking' : cardDetectStage >= 2 ? ' aligning' : ''}`}>
          <svg className="corner-svg corner-tl" viewBox="0 0 40 40"><path d="M 4 36 L 4 16 Q 4 4 16 4 L 36 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" /></svg>
          <svg className="corner-svg corner-tr" viewBox="0 0 40 40"><path d="M 4 36 L 4 16 Q 4 4 16 4 L 36 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" /></svg>
          <svg className="corner-svg corner-bl" viewBox="0 0 40 40"><path d="M 4 36 L 4 16 Q 4 4 16 4 L 36 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" /></svg>
          <svg className="corner-svg corner-br" viewBox="0 0 40 40"><path d="M 4 36 L 4 16 Q 4 4 16 4 L 36 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" /></svg>
        </div>
      </div>

      {/* Bottom controls: hint + shutter button */}
      <div className="scanner-controls" style={{ paddingBottom: '52px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{
          color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: '500',
          letterSpacing: '0.3px', textShadow: '0 1px 4px rgba(0,0,0,0.8)'
        }}>
          Align card inside the frame
        </div>

        {/* Camera-style shutter button */}
        <button
          id="shutter-btn"
          onClick={() => { autoCaptureRef.current = false; cancelAnimationFrame(rafRef.current); doCapture(); }}
          style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.95)',
            border: '4px solid rgba(255,255,255,0.4)',
            boxShadow: '0 0 0 2px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.5)',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.1s ease, box-shadow 0.1s ease',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
          onPointerDown={e => e.currentTarget.style.transform = 'scale(0.92)'}
          onPointerUp={e => e.currentTarget.style.transform = 'scale(1)'}
          onPointerLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* Inner circle — classic camera shutter look */}
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'rgba(255,255,255,1)',
            border: '2px solid rgba(0,0,0,0.08)'
          }} />
        </button>
      </div>
    </div>
  );


  const renderScanProcessing = () => {

    return (
      <div style={{
        position: 'fixed', inset: 0,
        background: '#0a0a0a',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 300,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>

        {/* Label */}
        <p style={{
          color: '#ffffff',
          fontSize: '22px',
          fontWeight: '600',
          letterSpacing: '-0.5px',
          margin: '0 0 8px 0',
        }}>
          Processing
        </p>

        {/* Percentage */}
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '14px',
          fontWeight: '400',
          margin: '0 0 32px 0',
          letterSpacing: '0.2px',
          fontVariantNumeric: 'tabular-nums',
        }}>
          {scanProgress}%
        </p>

        {/* Progress bar */}
        <div style={{
          width: '60vw', maxWidth: '260px',
          height: '5px',
          borderRadius: '100px',
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${scanProgress}%`,
            borderRadius: '100px',
            background: '#ffffff',
            transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }} />
        </div>

      </div>
    );
  };


  const renderEditor = () => {
    const isClient  = editingContact?.leadType === 'Client';
    const isPartner = editingContact?.leadType === 'Channel Partner';


    const set  = (f) => (e) => setEditingContact((prev) => ({ ...prev, [f]: e.target.value }));
    const setP = (f) => (e) => setEditingContact((prev) => ({ ...prev, primaryContact:   { ...(prev?.primaryContact || {}),               [f]: e.target.value } }));
    const setS = (f) => (e) => setEditingContact((prev) => ({ ...prev, secondaryContact: { ...(prev?.secondaryContact || {}),      [f]: e.target.value } }));

    return (
      <div className="content-area" style={{ paddingBottom: '40px' }}>
        <div className="card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px' }}>Review & Save</h2>
            <button className="btn-icon" onClick={() => setView('list')}><X size={20} /></button>
          </div>

          {editingContact?.imageUrl && (
            <div style={{ marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <img src={editingContact.imageUrl} alt="Scanned Card" style={{ width: '100%', maxHeight: '180px', objectFit: 'contain', background: '#000', display: 'block' }} />
            </div>
          )}

          {/* ── LEAD INFORMATION ── */}
          <Card>
            <Section title="Lead Information" />
            <Field label="Lead Owner" value={editingContact?.leadOwner} onChange={set('leadOwner')} />
            <Sel label="Status" value={editingContact?.status} onChange={set('status')} options={[
              ['Lead','Lead'],['Open','Open'],['Replied','Replied'],['Opportunity','Opportunity'],
              ['Quotation','Quotation'],['Lost Quotation','Lost Quotation'],
              ['Interested','Interested'],['Converted','Converted'],['Do Not Contact','Do Not Contact']
            ]} />
            <Sel label="Source" value={editingContact?.source} onChange={set('source')} options={[
              ['','— Select Source —'],
              ['Walk In','Walk In'],
              ['Campaign','Campaign'],
              ['Customer\'s Vendor','Customer\'s Vendor'],
              ['Mass Mailing','Mass Mailing'],
              ['Supplier Reference','Supplier Reference'],
              ['Exhibition','Exhibition'],
              ['Cold Calling','Cold Calling'],
              ['Advertisement','Advertisement'],
              ['Reference','Reference'],
              ['Existing Customer','Existing Customer']
            ]} />
            <Field label="Campaign Name" value={editingContact?.campaignName} onChange={set('campaignName')} />
            <Sel label="Request Type" value={editingContact?.requestType} onChange={set('requestType')} options={[
              ['','— Select —'],['Product Enquiry','Product Enquiry'],['Request for Information','Request for Information'],
              ['Suggestions','Suggestions'],['Other','Other']
            ]} />
            <Sel label="Lead Type" value={editingContact?.leadType} onChange={set('leadType')} options={[
              ['Client','Client'],
              ['Channel Partner','Channel Partner'],
              ['Consultant','Consultant']
            ]} />
            <div style={{ opacity: isPartner ? 0.4 : 1, pointerEvents: isPartner ? 'none' : 'auto' }}>
              <Sel label={`Customer Group${isPartner ? ' (N/A for Channel Partner)' : ''}`} value={editingContact?.customerGroup} onChange={set('customerGroup')} options={[
                ['','— Select —'],
                ['Exporters','Exporters'],['Gifting / Corporate Gifting','Gifting / Corporate Gifting'],
                ['HoReCa','HoReCa'],['Processors - Factory - Direct Institutional Consumers','Processors - Factory - Direct Institutional Consumers'],
                ['Retailers - Super Markets','Retailers - Super Markets'],['Wholesale - Traders','Wholesale - Traders'],
                ['Government','Government'],['Individual Consumer','Individual Consumer'],
                ['Individual FNF','Individual FNF'],['Individual Reseller','Individual Reseller'],
                ['Non Commercial Company Consumer','Non Commercial Company Consumer'],
                ['Non Profit','Non Profit'],['Others','Others']
              ]} />
            </div>
            <div style={{ opacity: isClient ? 0.4 : 1, pointerEvents: isClient ? 'none' : 'auto' }}>
              <Sel label={`Supplier Group${isClient ? ' (N/A for Client)' : ''}`} value={editingContact?.supplierGroup} onChange={set('supplierGroup')} options={[
                ['','— Select —'],
                ['Products Local Commodities','Products Local Commodities'],
                ['Products Local Raw Materials and Consumable','Products Local Raw Materials and Consumable'],
                ['Services Local for Export Import','Services Local for Export Import'],
                ['Services Local Others','Services Local Others'],
                ['Services Local Transporter','Services Local Transporter'],
                ['Others','Others']
              ]} />
            </div>
          </Card>

          {/* ── PRIMARY CONTACT ── */}
          <Card>
            <Section title="Primary Contact" />
            <Sel label="Salutation" value={editingContact?.primaryContact?.salutation} onChange={setP('salutation')} options={[
              ['','—'],['Mr.','Mr.'],['Mrs.','Mrs.'],['Ms.','Ms.'],['Dr.','Dr.'],['Prof.','Prof.'],['Eng.','Eng.'],['CA','CA']
            ]} />
            <Field label="First Name" value={editingContact?.primaryContact?.firstName} onChange={setP('firstName')} />
            <Field label="Middle Name" value={editingContact?.primaryContact?.middleName} onChange={setP('middleName')} />
            <Field label="Last Name" value={editingContact?.primaryContact?.lastName} onChange={setP('lastName')} />
            <Sel label="Gender" value={editingContact?.primaryContact?.gender} onChange={setP('gender')} options={[
              ['','—'],['Male','Male'],['Female','Female'],['Other','Other']
            ]} />
            <Field label="Job Title" value={editingContact?.primaryContact?.jobTitle} onChange={setP('jobTitle')} />
            <Field label="Email" value={editingContact?.primaryContact?.email} onChange={setP('email')} type="email" />
            <Field label="Mobile No" value={editingContact?.primaryContact?.mobileNo} onChange={setP('mobileNo')} />
            <Field label="Phone" value={editingContact?.primaryContact?.phone} onChange={setP('phone')} />
            <Field label="Phone Ext" value={editingContact?.primaryContact?.phoneExt} onChange={setP('phoneExt')} />
            <Field label="WhatsApp" value={editingContact?.primaryContact?.whatsapp} onChange={setP('whatsapp')} />
            <Field label="Fax" value={editingContact?.primaryContact?.fax} onChange={setP('fax')} />
          </Card>

          {/* ── ORGANIZATION ── */}
          <Card>
            <Section title="Organization" />
            <Field label="Organization Name" value={editingContact?.organizationName} onChange={set('organizationName')} />
            <Field label="Website" value={editingContact?.website} onChange={set('website')} />
            <Sel label="Industry" value={editingContact?.industry} onChange={set('industry')} options={[
              ['','— Select —'],
              ['Accounting','Accounting'],
              ['Advertising','Advertising'],
              ['Aerospace','Aerospace'],
              ['Agriculture','Agriculture'],
              ['Airline','Airline'],
              ['Apparel & Accessories','Apparel & Accessories'],
              ['Automotive','Automotive'],
              ['Banking','Banking'],
              ['Biotechnology','Biotechnology'],
              ['Broadcasting','Broadcasting'],
              ['Brokerage','Brokerage'],
              ['Chemical','Chemical'],
              ['Computer','Computer'],
              ['Consulting','Consulting'],
              ['Consumer Products','Consumer Products'],
              ['Cosmetics','Cosmetics'],
              ['Defense','Defense'],
              ['Department Stores','Department Stores'],
              ['Education','Education'],
              ['Electronics','Electronics'],
              ['Energy','Energy'],
              ['Entertainment & Leisure','Entertainment & Leisure'],
              ['Executive Search','Executive Search'],
              ['Financial Services','Financial Services'],
              ['Food, Beverage & Tobacco','Food, Beverage & Tobacco'],
              ['Grocery','Grocery'],
              ['Health Care','Health Care'],
              ['Internet Publishing','Internet Publishing'],
              ['Investment Banking','Investment Banking'],
              ['Legal','Legal'],
              ['Manufacturing','Manufacturing'],
              ['Motion Picture & Video','Motion Picture & Video'],
              ['Music','Music'],
              ['Newspaper Publishers','Newspaper Publishers'],
              ['Online Auctions','Online Auctions'],
              ['Packaging','Packaging'],
              ['Pension Funds','Pension Funds'],
              ['Pharmaceuticals','Pharmaceuticals'],
              ['Private Equity','Private Equity'],
              ['Publishing','Publishing'],
              ['Real Estate','Real Estate'],
              ['Retail & Wholesale','Retail & Wholesale'],
              ['Securities & Commodity Exchanges','Securities & Commodity Exchanges'],
              ['Service','Service'],
              ['Soap & Detergent','Soap & Detergent'],
              ['Software','Software'],
              ['Sports','Sports'],
              ['Technology','Technology'],
              ['Telecommunications','Telecommunications'],
              ['Television','Television'],
              ['Transportation','Transportation'],
              ['Venture Capital','Venture Capital']
            ]} />
            <Sel label="No of Employees" value={editingContact?.noOfEmployees} onChange={set('noOfEmployees')} options={[
              ['','— Select —'],['1-10','1-10'],['11-50','11-50'],['51-200','51-200'],['201-500','201-500'],['500+','500+']
            ]} />
            <Field label="Annual Revenue" value={editingContact?.annualRevenue} onChange={set('annualRevenue')} />
          </Card>

          {/* ── LOCATION ── */}
          <Card>
            <Section title="Location" />
            <Field label="City" value={editingContact?.city} onChange={set('city')} />
            <Field label="State / Province" value={editingContact?.stateProvince} onChange={set('stateProvince')} />
            <Field label="Country" value={editingContact?.country} onChange={set('country')} />
            <Field label="Territory" value={editingContact?.territory} onChange={set('territory')} />
            <Sel label="Market Segment" value={editingContact?.marketSegment} onChange={set('marketSegment')} options={[
              ['','— Select —'],
              ['Corporate Gifts','Corporate Gifts'],
              ['Supplier|Products','Supplier|Products'],
              ['Supplier|Other Services','Supplier|Other Services'],
              ['Supplier|Packaging','Supplier|Packaging'],
              ['Supplier|Transporters & Logistics','Supplier|Transporters & Logistics'],
              ['CNF & Commissions|Other Agro Products','CNF & Commissions|Other Agro Products'],
              ['CNF & Commissions|Seeds, Spices & Others','CNF & Commissions|Seeds, Spices & Others'],
              ['CNF & Commissions|Turmeric','CNF & Commissions|Turmeric'],
              ['CNF & Commissions|Cloves','CNF & Commissions|Cloves'],
              ['CNF & Commissions|Dry Fruits & Nuts','CNF & Commissions|Dry Fruits & Nuts'],
              ['CNF & Commissions|Raisins','CNF & Commissions|Raisins'],
              ['Imports & Exports|Seeds, Spices & Others','Imports & Exports|Seeds, Spices & Others'],
              ['Imports & Exports|Turmeric','Imports & Exports|Turmeric'],
              ['Imports & Exports|Cloves','Imports & Exports|Cloves'],
              ['Imports & Exports|Dry Fruits & Nuts','Imports & Exports|Dry Fruits & Nuts'],
              ['Imports & Exports|Raisins','Imports & Exports|Raisins'],
              ['Standard Supplies|Gift Packs','Standard Supplies|Gift Packs'],
              ['Standard Supplies|Beverages','Standard Supplies|Beverages'],
              ['Standard Supplies|Turmeric','Standard Supplies|Turmeric'],
              ['Standard Supplies|Cloves','Standard Supplies|Cloves'],
              ['Standard Supplies|Dry Fruits & Nuts','Standard Supplies|Dry Fruits & Nuts'],
              ['Standard Supplies|Raisins','Standard Supplies|Raisins'],
              ['Custom Supplies|Seeds, Spices & Others','Custom Supplies|Seeds, Spices & Others'],
              ['Custom Supplies|Turmeric','Custom Supplies|Turmeric'],
              ['Custom Supplies|Cloves','Custom Supplies|Cloves'],
              ['Custom Supplies|Dry Fruits & Nuts','Custom Supplies|Dry Fruits & Nuts'],
              ['Custom Supplies|Raisins','Custom Supplies|Raisins'],
              ['Upper Income','Upper Income'],
              ['Middle Income','Middle Income'],
              ['Lower Income','Lower Income']
            ]} />
            <Field label="Address" value={editingContact?.address} onChange={set('address')} />
          </Card>

          {/* ── SECONDARY CONTACT ── */}
          <Card>
            <Section title="Secondary Contact (if any)" />
            <Sel label="Salutation" value={editingContact?.secondaryContact?.salutation} onChange={setS('salutation')} options={[
              ['','—'],['Mr.','Mr.'],['Mrs.','Mrs.'],['Ms.','Ms.'],['Dr.','Dr.'],['Prof.','Prof.'],['Eng.','Eng.'],['CA','CA']
            ]} />
            <Field label="First Name" value={editingContact?.secondaryContact?.firstName} onChange={setS('firstName')} />
            <Field label="Middle Name" value={editingContact?.secondaryContact?.middleName} onChange={setS('middleName')} />
            <Field label="Last Name" value={editingContact?.secondaryContact?.lastName} onChange={setS('lastName')} />
            <Field label="Job Title" value={editingContact?.secondaryContact?.jobTitle} onChange={setS('jobTitle')} />
            <Field label="Email" value={editingContact?.secondaryContact?.email} onChange={setS('email')} />
            <Field label="Mobile No" value={editingContact?.secondaryContact?.mobileNo} onChange={setS('mobileNo')} />
            <Field label="Phone" value={editingContact?.secondaryContact?.phone} onChange={setS('phone')} />
            <Field label="Phone Ext" value={editingContact?.secondaryContact?.phoneExt} onChange={setS('phoneExt')} />
            <Field label="WhatsApp" value={editingContact?.secondaryContact?.whatsapp} onChange={setS('whatsapp')} />
            <Field label="Fax" value={editingContact?.secondaryContact?.fax} onChange={setS('fax')} />
          </Card>

          <button className="btn btn-primary" onClick={saveContact} style={{ width: '100%', padding: '16px', marginTop: '8px' }}>
            <Check size={18} /> Save to Cloud
          </button>
        </div>
      </div>
    );
  };


  const renderFlipCard = () => (
    <div style={{
      position: 'fixed', inset: 0, background: '#0a0a0a',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', zIndex: 300, padding: '40px 24px'
    }}>
      {frontImageUrl && (
        <div style={{
          marginBottom: '28px', borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7)', maxWidth: '300px', width: '100%'
        }}>
          <img src={frontImageUrl} alt="Front of card" style={{ width: '100%', display: 'block' }} />
        </div>
      )}
      <div style={{
        background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.4)',
        borderRadius: '100px', padding: '6px 18px', marginBottom: '20px',
        display: 'inline-flex', alignItems: 'center', gap: '6px'
      }}>
        <span style={{ color: '#4ade80', fontSize: '13px', fontWeight: '600' }}>✓ Front scanned</span>
      </div>
      <h2 style={{ color: '#fff', fontSize: '22px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>
        Now scan the back
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginBottom: '36px', textAlign: 'center', maxWidth: '260px', lineHeight: 1.5 }}>
        Flip the card over and hold it steady in the frame
      </p>
      <button
        className="btn btn-primary"
        onClick={startBackScan}
        style={{ padding: '16px 0', fontSize: '16px', fontWeight: '700', borderRadius: '100px', background: '#fff', color: '#000', width: '100%', maxWidth: '300px' }}
      >
        Scan Back →
      </button>
      <button
        onClick={() => { processImage(frontImageUrl); setFrontImageUrl(null); }}
        style={{ marginTop: '16px', background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '14px', cursor: 'pointer', padding: '8px' }}
      >
        Skip — use front only
      </button>
    </div>
  );

  const renderContactDetail = (c) => (
    <div className="content-area" style={{ paddingBottom: '120px' }}>
      {/* Back button + Edit button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <button
          onClick={() => setViewingContact(null)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500', padding: '0'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          Back
        </button>
        <button
          onClick={() => {
            const emptyContact = { salutation: '', gender: '', firstName: '', middleName: '', lastName: '', fullName: '', jobTitle: '', email: '', mobileNo: '', phone: '', phoneExt: '', whatsapp: '', fax: '' };
            setEditingContact({
              ...c,
              primaryContact: { ...emptyContact, ...(c.primaryContact || {}) },
              secondaryContact: c.secondaryContact ? { ...emptyContact, ...c.secondaryContact } : null,
            });
            setViewingContact(null);
            setView('edit');
          }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'var(--primary)', border: 'none', cursor: 'pointer',
            color: '#fff', fontSize: '13px', fontWeight: '600', padding: '8px 16px',
            borderRadius: '20px', letterSpacing: '0.2px'
          }}
        >
          <Edit2 size={14} />
          Edit
        </button>
      </div>

      {/* Scanned card image */}
      {c.imageUrl && (
        <div style={{ marginBottom: '24px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid var(--border)' }}>
          <img src={c.imageUrl} alt="Scanned card" style={{ width: '100%', display: 'block' }} />
        </div>
      )}

      {/* Name + company header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '6px', letterSpacing: '-0.5px' }}>
          {c.primaryContact?.firstName ? `${c.primaryContact.firstName} ${c.primaryContact.lastName}`.trim() : (c.organizationName || 'Unknown')}
        </h1>
        {c.primaryContact?.jobTitle && <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '4px' }}>{c.primaryContact.jobTitle}</p>}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
          {c.organizationName && <span className="badge" style={{ fontSize: '13px' }}>{c.organizationName}</span>}
          {c.leadType && <span className="badge" style={{ fontSize: '13px', background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: '1px solid rgba(74, 222, 128, 0.2)' }}>{c.leadType}</span>}
          {c.customerGroup && <span className="badge" style={{ fontSize: '13px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.2)' }}>{c.customerGroup}</span>}
          {c.supplierGroup && <span className="badge" style={{ fontSize: '13px', background: 'rgba(249, 115, 22, 0.1)', color: '#fb923c', border: '1px solid rgba(249, 115, 22, 0.2)' }}>{c.supplierGroup}</span>}
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '28px' }}>
        <button className="btn btn-outline" style={{ padding: '14px 8px', flexDirection: 'column', gap: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleAction('wa', c.primaryContact?.whatsapp || c.primaryContact?.mobileNo || c.primaryContact?.phone)}>
          <MessageCircle size={20} style={{ color: '#10b981' }} />
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>WhatsApp</span>
        </button>
        <button className="btn btn-outline" style={{ padding: '14px 8px', flexDirection: 'column', gap: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleAction('call', c.primaryContact?.mobileNo || c.primaryContact?.phone)}>
          <Phone size={20} style={{ color: 'var(--primary)' }} />
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Call</span>
        </button>
        <button className="btn btn-outline" style={{ padding: '14px 8px', flexDirection: 'column', gap: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => handleAction('email', c.primaryContact?.email)}>
          <Mail size={20} style={{ color: 'var(--text-main)' }} />
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Email</span>
        </button>
      </div>

      {/* Primary Contact details */}
      {c.primaryContact && (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '14px', marginBottom: '12px', padding: '16px 16px 0 16px', color: 'var(--text-main)' }}>Primary Contact</h3>
          {[
            { icon: <Phone size={16}/>, label: 'Mobile No', value: c.primaryContact.mobileNo },
            { icon: <Phone size={16}/>, label: 'Phone', value: c.primaryContact.phone },
            { icon: <Mail size={16}/>, label: 'Email', value: c.primaryContact.email },
            { icon: <MessageCircle size={16}/>, label: 'WhatsApp', value: c.primaryContact.whatsapp },
          ].filter(row => row.value).map((row, i, arr) => (
            <div key={row.label} style={{
              display: 'flex', alignItems: 'flex-start', gap: '14px',
              padding: '16px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none'
            }}>
              <div style={{ color: 'var(--text-muted)', marginTop: '1px', flexShrink: 0 }}>{row.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '3px' }}>{row.label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-main)', wordBreak: 'break-word', lineHeight: 1.5 }}>{row.value}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Secondary Contact details */}
      {c.secondaryContact && (c.secondaryContact.firstName || c.secondaryContact.phone) && (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '14px', marginBottom: '12px', padding: '16px 16px 0 16px', color: 'var(--text-main)' }}>Secondary Contact</h3>
          <div style={{ padding: '0 16px 16px 16px', fontSize: '15px', fontWeight: '600' }}>
            {c.secondaryContact.firstName} {c.secondaryContact.lastName}
          </div>
          {[
            { icon: <Phone size={16}/>, label: 'Mobile No', value: c.secondaryContact.mobileNo },
            { icon: <Phone size={16}/>, label: 'Phone', value: c.secondaryContact.phone },
            { icon: <Mail size={16}/>, label: 'Email', value: c.secondaryContact.email },
            { icon: <MessageCircle size={16}/>, label: 'WhatsApp', value: c.secondaryContact.whatsapp },
          ].filter(row => row.value).map((row, i, arr) => (
            <div key={row.label} style={{
              display: 'flex', alignItems: 'flex-start', gap: '14px',
              padding: '16px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none'
            }}>
              <div style={{ color: 'var(--text-muted)', marginTop: '1px', flexShrink: 0 }}>{row.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '3px' }}>{row.label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-main)', wordBreak: 'break-word', lineHeight: 1.5 }}>{row.value}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Org details */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {[
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, label: 'Website', value: c.website },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'Address', value: c.address },
          { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: 'City', value: c.city },
        ].filter(row => row.value).map((row, i, arr) => (
          <div key={row.label} style={{
            display: 'flex', alignItems: 'flex-start', gap: '14px',
            padding: '16px 0',
            borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none'
          }}>
            <div style={{ color: 'var(--text-muted)', marginTop: '1px', flexShrink: 0 }}>{row.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '3px' }}>{row.label}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-main)', wordBreak: 'break-word', lineHeight: 1.5 }}>{row.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete */}
      <button
        className="btn btn-outline"
        onClick={() => { deleteContact(c.id); setViewingContact(null); }}
        style={{ width: '100%', marginTop: '20px', color: 'var(--destructive)', borderColor: 'rgba(239, 68, 68, 0.3)', padding: '14px' }}
      >
        <Trash2 size={16} style={{ marginRight: '8px' }} /> Delete Contact
      </button>
    </div>
  );

  return (
    <div className="app-container">
      {view === 'live-scan' ? renderLiveScanner() : (
        <>
          {renderHeader()}
          <div className="main-content">
            {view === 'list' && !viewingContact && renderContactList()}
            {view === 'list' && viewingContact && renderContactDetail(viewingContact)}
            {view === 'scan-processing' && renderScanProcessing()}
            {view === 'edit' && renderEditor()}
          </div>
          {renderBottomDock()}
          {view === 'flip-card' && renderFlipCard()}

          {/* ── Duplicate Warning Modal ── */}
          {duplicateWarning && (
            <div style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: 'rgba(0,0,0,0.75)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(6px)',
            }}>
              <div style={{
              background: '#1a1a1a',
              borderRadius: '20px',
              padding: '28px 24px',
              maxWidth: '360px',
              width: '100%',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            }}>
                {/* Warning icon */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'rgba(251,191,36,0.15)',
                  border: '1px solid rgba(251,191,36,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <span style={{ fontSize: '24px' }}>⚠️</span>
                </div>

                <h3 style={{
                  color: '#fff', fontSize: '18px', fontWeight: '700',
                  margin: '0 0 8px', letterSpacing: '-0.3px'
                }}>
                  Duplicate Card Detected
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.5,
                  margin: '0 0 20px'
                }}>
                  This card already exists in the system:
                </p>

                {/* Existing contact summary */}
                <div style={{
                  background: '#111', borderRadius: '12px',
                  padding: '14px 16px', marginBottom: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div style={{ fontWeight: '600', color: '#fff', fontSize: '15px', marginBottom: '4px' }}>
                    {[duplicateWarning.existing.primaryContact?.firstName, duplicateWarning.existing.primaryContact?.lastName].filter(Boolean).join(' ') || 'Unknown Name'}
                  </div>
                  {duplicateWarning.existing.organizationName && (
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', marginBottom: '2px' }}>
                      {duplicateWarning.existing.organizationName}
                    </div>
                  )}
                  {duplicateWarning.existing.primaryContact?.email && (
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                      {duplicateWarning.existing.primaryContact.email}
                    </div>
                  )}
                  {duplicateWarning.existing.primaryContact?.mobileNo && (
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                      {duplicateWarning.existing.primaryContact.mobileNo}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    onClick={() => {
                      setEditingContact(pendingContact);
                      setPendingContact(null);
                      setDuplicateWarning(null);
                      setView('edit');
                    }}
                    style={{
                      padding: '14px', borderRadius: '12px',
                      background: '#fff', border: 'none',
                      color: '#000', fontWeight: '700', fontSize: '15px',
                      cursor: 'pointer', width: '100%',
                    }}
                  >
                    Save Anyway
                  </button>
                  <button
                    onClick={() => {
                      setPendingContact(null);
                      setDuplicateWarning(null);
                    }}
                    style={{
                      padding: '14px', borderRadius: '12px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'rgba(255,255,255,0.7)', fontWeight: '500', fontSize: '15px',
                      cursor: 'pointer', width: '100%',
                    }}
                  >
                    Discard
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
