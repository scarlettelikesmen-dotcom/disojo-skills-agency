import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import spec from "./spec-trade.json";

// "Trading-lite": raw selfie, full frame, ONE static hook line on top, plain word captions, disclaimer. No panels, no zooms.
const BS = '"Big Shoulders Display", Impact, sans-serif', MN = '"JetBrains Mono", monospace';
const RED = "#E8321C";
// alternate framing at each jump cut (1.0 / 1.07) so the head-position jump reads as a deliberate cut
const stabAt = (fr: number) => ((spec as any).stab[Math.min(fr, (spec as any).stab.length - 1)] || [0, 0]);
const _unusedSeg = (t: number) => { const c = (spec as any).cuts as number[]; let i = 0; for (let k = 0; k < c.length; k++) if (t >= c[k] - 0.001) i = k; return i % 2 ? 1.07 : 1; };
export const TradeLite: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  const cap = (spec.caps as any[]).find((c) => t >= c.t0 && t < c.t1);
  const sh = "0 3px 14px rgba(0,0,0,.65), 0 1px 3px rgba(0,0,0,.8)";
  return (
    <AbsoluteFill style={{ background: "#000" }}>
      <div style={{ position: "absolute", inset: 0, transform: `translate(${stabAt(frame)[0]}px, ${stabAt(frame)[1]}px) scale(${(spec as any).stabScale})`, transformOrigin: "50% 35%" }}><OffthreadVideo src={staticFile(spec.base)} style={{ width: 1080, height: 1920, filter: "contrast(1.08) saturate(1.1) brightness(1.03)" }} /></div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.18) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 78%, rgba(0,0,0,.4) 100%)" }} />
      <div style={{ position: "absolute", left: 56, right: 56, top: 120, textAlign: "center", fontFamily: BS, fontWeight: 900, fontSize: 112, lineHeight: 1.0, color: "#fff", textShadow: sh, letterSpacing: "0.005em" }}>
        TRADING IS JUST<br />YOUR <span style={{ color: RED }}>SELF-BELIEFS.</span>
      </div>
      {cap && (
        <div style={{ position: "absolute", left: 40, right: 40, top: 1480, display: "flex", justifyContent: "center", whiteSpace: "nowrap", gap: "0 .22em", fontFamily: BS, fontWeight: 900, fontSize: Math.max(66, Math.min(92, 840 / (cap.words.reduce((a: number, w: any) => a + w.w.length + 1, 0) * 0.46))), color: "#fff", textShadow: sh }}>
          {cap.words.map((w: any, i: number) => t >= w.s - 0.02 && <span key={i} style={{ color: w.emph ? RED : "#fff" }}>{w.w}</span>)}
        </div>
      )}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 34, textAlign: "center", fontFamily: MN, fontSize: 19, letterSpacing: "0.14em", color: "#fff", opacity: 0.8, textShadow: sh }}>EDUCATION ONLY. NOT INVESTMENT ADVICE.</div>
    </AbsoluteFill>
  );
};
