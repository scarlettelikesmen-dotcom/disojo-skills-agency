import React from "react";
import { AbsoluteFill, Audio, Img, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { clamp, parseEm, sp, SP } from "./theme";
import { ChartLayer } from "./ChartLayer";
import { specProxy as spec, jobFile } from "./specStore";

// "The Rulebook" for @abelkapoor. Restrained: paper panels, black type, ONE red mark per beat, B&W speaker, disclaimer on every frame.
const PAPER = "#F1EEE6", BLACK = "#0D0D0D", RED = "#E8321C";
const BS = '"Big Shoulders Display", Impact, sans-serif', NR = '"Newsreader", serif', MN = '"JetBrains Mono", monospace';
const PANEL_H = 880;
const P = (): any[] => spec.panels;

const Frame: React.FC<{ n: string; children: React.ReactNode }> = ({ n, children }) => (
  <div style={{ position: "absolute", inset: 0, background: PAPER, color: BLACK, overflow: "hidden" }}>
    <div style={{ position: "absolute", left: 56, top: 56, background: BLACK, color: PAPER, fontFamily: MN, fontSize: 21, letterSpacing: "0.12em", padding: "9px 16px" }}>THE RULEBOOK</div>
    <div style={{ position: "absolute", right: 56, top: 62, fontFamily: MN, fontSize: 21, letterSpacing: "0.12em" }}>NO. {n}</div>
    <div style={{ position: "absolute", left: 56, right: 56, top: 120, height: 2, background: BLACK }} />
    {children}
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: BLACK }} />
  </div>
);

const Em: React.FC<{ text: string; k: number }> = ({ text, k }) => (
  <>{parseEm(text).map((c, i) => c.em ? (
    <span key={i} style={{ position: "relative", display: "inline-block", color: RED }}>
      {c.t}
      <svg width="100%" height="22" viewBox="0 0 100 22" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -4 }}>
        <path d="M2 14 C 25 3, 55 20, 98 8" fill="none" stroke={RED} strokeWidth={8} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - k} />
      </svg>
    </span>) : <span key={i}>{c.t}</span>)}</>
);

const Panel: React.FC<{ p: any; frame: number; fps: number }> = ({ p, frame, fps }) => {
  const at = (t: number, c = SP.soft) => clamp(sp(frame, fps, t, c), 0, 1.02);
  if (p.type === "title") {
    const lh = p.size * 1.02;
    return (
      <Frame n={p.no}>
        <div style={{ position: "absolute", left: 56, right: 40, top: 190, fontFamily: BS, fontWeight: 900, fontSize: p.size, lineHeight: 1.02, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
          {p.lines.map((l: string, i: number) => (
            <div key={i} style={{ overflow: "hidden", height: lh }}>
              <div style={{ transform: `translateY(${(1 - at(p.t0 + 0.05 + i * 0.09, SP.pop)) * 108}%)` }}><Em text={l} k={at(p.t0 + 0.7 + i * 0.1)} /></div>
            </div>
          ))}
        </div>
      </Frame>
    );
  }
  if (p.type === "chart") {
    return (
      <Frame n={p.no}>
        <div style={{ position: "absolute", left: 56, top: 150, width: 968, height: 670, border: `3px solid ${BLACK}`, overflow: "hidden" }}>
          <ChartLayer video={jobFile(p.video)} srcStart={p.srcStart || 0} t0={p.t0} fps={fps} frame={frame} W={962} H={664} crop={p.crop} overlays={p.overlays || []} aspect={p.aspect} label={p.label} />
        </div>
      </Frame>
    );
  }
  if (p.type === "list") {
    const st = at(p.stamp[1], { damping: 16, stiffness: 320, mass: 1 });
    return (
      <Frame n={p.no}>
        <div style={{ position: "absolute", left: 56, right: 56, top: 150 }}>
          {p.items.map((it: any, i: number) => {
            const k = at(it[1] - 0.05, SP.pop), strike = at(p.stamp[1] + 0.1 + i * 0.06);
            return (
              <div key={i} style={{ position: "relative", display: "flex", alignItems: "center", height: 150, borderBottom: `2px solid ${BLACK}`, opacity: k, transform: `translateY(${(1 - k) * 22}px)` }}>
                <div style={{ fontFamily: MN, fontSize: 24, width: 64 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontFamily: BS, fontWeight: 900, fontSize: 92, letterSpacing: "-0.005em", whiteSpace: "nowrap" }}>{it[0]}</div>
                <div style={{ position: "absolute", left: 60, top: "50%", height: 8, background: RED, width: `${strike * 88}%`, transform: "translateY(-50%)" }} />
              </div>
            );
          })}
        </div>
        <div style={{ position: "absolute", right: 56, bottom: 36, border: `9px solid ${RED}`, color: RED, fontFamily: BS, fontWeight: 900, fontSize: 118, padding: "0 28px", lineHeight: 1.05, transform: `rotate(-5deg) scale(${1.5 - 0.5 * st})`, opacity: st }}>{p.stamp[0]}</div>
      </Frame>
    );
  }
  return (
    <Frame n={p.no}>
      <div style={{ position: "absolute", left: 56, right: 40, top: 200, fontFamily: BS, fontWeight: 900, fontSize: 124, lineHeight: 1.0, whiteSpace: "nowrap" }}>
        {p.lines.map((l: any, i: number) => {
          const k = at(l[1] - 0.03, SP.pop); const last = i === p.lines.length - 1;
          return <div key={i} style={{ overflow: "hidden", height: 128 }}><div style={{ transform: `translateY(${(1 - k) * 108}%)`, color: last ? RED : BLACK, position: "relative", display: "inline-block" }}>{l[0]}</div></div>;
        })}
      </div>
    </Frame>
  );
};

const stabAt = (fr: number) => { const st = (spec as any).stab; return st ? st[Math.min(fr, st.length - 1)] || [0, 0] : [0, 0]; };
const _unusedSeg = (t: number) => { const c = (spec as any).cuts as number[]; let i = 0; for (let k = 0; k < c.length; k++) if (t >= c[k] - 0.001) i = k; return i % 2 ? 1.07 : 1; };
export const TradeReel: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  let pp = 0;
  for (const pn of P()) { const en = pn.t0 === 0 ? 1 : sp(frame, fps, pn.t0, SP.heavy); const ex = sp(frame, fps, pn.t1, SP.heavy); pp += en - ex; }
  pp = clamp(pp, 0, 1);
  let zoom = 1;
  for (const [s, peak, hold] of spec.punches as number[][]) if (t >= s - 0.03 && t < s - 0.03 + hold) zoom = Math.max(zoom, peak);
  const cap = (spec.captions as any[]).find((c) => t >= c.t0 && t < c.t1);
  return (
    <AbsoluteFill style={{ background: BLACK }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: PANEL_H * pp, height: 1920 - PANEL_H * pp, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: -140 * pp, width: 1080, height: 1920, filter: "grayscale(1) contrast(1.12)", transform: `translate(${stabAt(frame)[0]}px, ${stabAt(frame)[1]}px) scale(${zoom * ((spec as any).stabScale || 1)})`, transformOrigin: "50% 30%" }}>
          <OffthreadVideo src={staticFile(jobFile("base.mp4"))} style={{ width: 1080, height: 1920 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,.5))" }} />
      </div>
      {P().map((pn, i) => {
        if (t < pn.t0 - 0.02 || t > pn.t1 + 1.0) return null;
        const en = pn.t0 === 0 ? 1 : sp(frame, fps, pn.t0, SP.heavy), ex = sp(frame, fps, pn.t1, SP.heavy);
        return <div key={i} style={{ position: "absolute", left: 0, top: 0, width: 1080, height: PANEL_H, transform: `translateY(${-PANEL_H * (1 - clamp(en - ex))}px)` }}><Panel p={pn} frame={frame} fps={fps} /></div>;
      })}
      {cap && (
        <div style={{ position: "absolute", left: 40, right: 40, top: 1560 + 120 * pp - 70, display: "flex", justifyContent: "center" }}>
          <div style={{ background: PAPER, border: `3px solid ${BLACK}`, boxShadow: `8px 8px 0 ${BLACK}`, padding: "6px 26px 2px", fontFamily: BS, fontWeight: 900, fontSize: Math.max(66, Math.min(96, 840 / (cap.words.reduce((a: number, w: any) => a + w.w.length + 1, 0) * 0.46))), lineHeight: 1.05, color: BLACK, whiteSpace: "nowrap", display: "flex", gap: "0 .22em" }}>
            {cap.words.map((w: any, i: number) => t >= w.s - 0.02 && (
              <span key={i} style={{ position: "relative", color: w.emph ? RED : BLACK }}>{String(w.w).toUpperCase()}{w.emph && <svg width="100%" height="14" viewBox="0 0 100 14" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -2 }}><path d="M2 9 C 30 2, 60 13, 98 5" stroke={RED} strokeWidth={6} fill="none" strokeLinecap="round" /></svg>}</span>
            ))}
          </div>
        </div>
      )}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 34, textAlign: "center", fontFamily: MN, fontSize: 19, letterSpacing: "0.14em", color: PAPER, opacity: 0.85 }}>EDUCATION ONLY. NOT INVESTMENT ADVICE.</div>
      <Audio src={staticFile(jobFile("sfx.wav"))} />
      <Img src={staticFile("grain.png")} style={{ position: "absolute", inset: 0, width: 1080, height: 1920, objectFit: "cover", opacity: 0.05, mixBlendMode: "overlay" }} />
    </AbsoluteFill>
  );
};
