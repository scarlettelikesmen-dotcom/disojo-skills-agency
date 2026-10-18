#!/usr/bin/env python3
"""HF camera-shake rms (px @1080) of a video's face region, per segment of base.json. usage: measure_shake.py a.mp4 [b.mp4 ...]"""
import subprocess,numpy as np,json,sys
offs=json.load(open('/Users/tejjo/Desktop/DISOJO SOLUTIONS/content-hub/edits/t2257/base.json'))['offsets']
W,H=216,384;r0,r1=105,275;h=r1-r0;win=np.outer(np.hanning(h),np.hanning(W))
def shift(a,b):
    A=np.fft.fft2((a-a.mean())*win);B=np.fft.fft2((b-b.mean())*win);R=A*np.conj(B);R/=np.abs(R)+1e-9;r=np.fft.ifft2(R).real
    y,x=np.unravel_index(np.argmax(r),r.shape);return (x-W if x>W//2 else x),(y-h if y>h//2 else y)
for p in sys.argv[1:]:
    raw=subprocess.run(['ffmpeg','-v','error','-i',p,'-vf',f'scale={W}:{H},format=gray','-f','rawvideo','-'],capture_output=True).stdout
    f=np.frombuffer(raw,np.uint8).reshape(-1,H,W).astype(float)[:,r0:r1];n=len(f)
    d=np.array([shift(f[i+1],f[i]) for i in range(n-1)],float);cuts=[int(round(o*30)) for o in offs]+[n];out=[]
    for c in range(2):
        hs=[]
        for a,b in zip(cuts[:-1],cuts[1:]):
            seg=np.zeros(b-a)
            for i in range(a+1,b): seg[i-a]=seg[i-a-1]+d[i-1,c]
            k=8;s=np.convolve(np.pad(seg,(k,k),mode='edge'),np.ones(2*k+1)/(2*k+1),mode='valid');hs.append(seg-s)
        out.append(round(float(np.sqrt(np.mean(np.concatenate(hs)**2)))*5,1))
    print(p.split('/')[-1],'shake rms (x,y):',out)
