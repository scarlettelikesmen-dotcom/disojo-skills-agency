import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace this with your actual Firebase config object!
// You can get this by going to console.firebase.google.com, 
// creating a project, and registering a web app.
const firebaseConfig = {
  apiKey: "AIzaSyC8tLCi-eLb6w5bIdiavQCMC7Bvy6RVet0",
  authDomain: "business-card-crm-6469d.firebaseapp.com",
  projectId: "business-card-crm-6469d",
  storageBucket: "business-card-crm-6469d.firebasestorage.app",
  messagingSenderId: "491218053868",
  appId: "1:491218053868:web:b859b7815f7b0dba2553c9",
  measurementId: "G-G33XR97MLM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
