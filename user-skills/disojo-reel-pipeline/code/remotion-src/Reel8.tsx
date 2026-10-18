import React from "react";
import { AbsoluteFill, Audio, Img, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { specProxy as spec, jobFile } from "./specStore";
import { CREAM, INK, PAPER, SANS, SP, clamp, sp, parseEm } from "./theme";

// v8: hard-cut punch zooms, full-bleed footage, word-by-word captions, real work as cutaways. No 3D, no panels.
const FX = 0.5, FY = 0.3; // zoom focal point (face)

const Captions: React.FC<{ t: number; dark: boolean; cy: number }> = ({ t, dark, cy }) => {
  const g = (spec.captions as any[]).find((c) => t >= c.t0 && t < c.t1 + 0.04);
  if (!g) return null;
  const fg = dark ? INK : CREAM, box = dark ? INK : CREAM, boxText = dark ? CREAM : INK;
  return (
    <div style={{ position: "absolute", left: 40, right: 40, top: cy - 150, height: 300, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "0 22px", fontFamily: SANS, fontWeight: 800, fontSize: 104, letterSpacing: "-0.045em", lineHeight: 1.12, textAlign: "center" }}>
      {g.words.map((w: any, i: number) => {
        const active = t >= w.s - 0.02 && (i === g.words.length - 1 || t < g.words[i + 1].s - 0.02);
        const spoken = t >= w.s - 0.02;
        return (
          <span key={i} style={{ position: "relative", display: "inline-block", isolation: "isolate", padding: "0 .12em", transform: w.emph ? `scale(${1.1 + 0.1 * Math.exp(-Math.max(0, t - w.s) / 0.12)})` : undefined, color: active ? boxText : fg, opacity: spoken ? 1 : 0.0, textShadow: dark ? "none" : "0 3px 18px rgba(0,0,0,.55)" }}>
            {active && <i style={{ position: "absolute", inset: ".06em 0 0 0", background: box, borderRadius: ".16em", zIndex: -1 }} />}
            {w.w}
          </span>
        );
      })}
    </div>
  );
};


const Diagram: React.FC<{ p: any; t: number; frame: number; fps: number }> = ({ p, t, frame, fps }) => {
  const fg = p.dark ? CREAM : INK, bg = p.dark ? INK : PAPER, hi = p.dark ? CREAM : INK, hiT = p.dark ? INK : CREAM;
  const e = (d: number) => clamp(sp(frame, fps, p.t0 + d, SP.heavy), 0, 1.04);
  if (p.type === "loop") {
    const cx = 540, cy = 650, rx = 330, ry = 125, a = (t - p.t0) * 2.4 + Math.PI;
    const pts = [0, 1].map((k) => ({ x: cx + rx * Math.cos(a + k * Math.PI), y: cy + ry * Math.sin(a + k * Math.PI) }));
    const draw = e(0.25);
    return (
      <svg width={1080} height={880} style={{ position: "absolute", left: 0, top: 0 }}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={fg} strokeOpacity={0.35} strokeWidth={3} strokeDasharray="14 12" strokeDashoffset={-(t - p.t0) * 60} style={{ opacity: draw }} />
        {[{ x: cx - rx, l: "You" }, { x: cx + rx, l: "Us" }].map((n, i) => (
          <g key={i} transform={`translate(${n.x} ${cy}) scale(${e(0.15 + i * 0.1)})`}>
            <circle r={78} fill={i ? hi : bg} stroke={fg} strokeWidth={3} />
            <text textAnchor="middle" dy="0.34em" fontFamily={SANS} fontWeight={800} fontSize={54} letterSpacing="-0.04em" fill={i ? hiT : fg}>{n.l}</text>
          </g>
        ))}
        {pts.map((q, i) => (<circle key={i} cx={q.x} cy={q.y} r={13} fill={hi} style={{ opacity: draw }} />))}
      </svg>
    );
  }
  // rise: a staircase building up, last step filled
  const hs = [90, 170, 260, 360];
  return (
    <svg width={1080} height={880} style={{ position: "absolute", left: 0, top: 0 }}>
      {hs.map((h, i) => {
        const g = e(0.2 + i * 0.12); const x = 150 + i * 200, hh = h * g;
        return <rect key={i} x={x} y={840 - hh} width={160} height={hh} rx={18} fill={i === 3 ? hi : "none"} stroke={fg} strokeWidth={3} strokeOpacity={i === 3 ? 1 : 0.45} />;
      })}
    </svg>
  );
};

const PANEL_H = 880;
const Panel8: React.FC<{ p: any; t: number; frame: number; fps: number }> = ({ p, t, frame, fps }) => {
  const bg = p.dark ? INK : PAPER, fg = p.dark ? CREAM : INK;
  const ink = (k: number) => clamp(sp(frame, fps, p.t0 + 0.12 + k * 0.1, SP.soft), 0, 1.02);
  const size = p.type === "hook" ? 150 : p.lines.length > 1 ? 112 : 128;
  return (
    <div style={{ position: "absolute", inset: 0, background: bg, color: fg, fontFamily: SANS, overflow: "hidden" }}>
      <Img src={staticFile("wordmark.png")} style={{ position: "absolute", left: 64, top: 64, height: 34, filter: p.dark ? "none" : "invert(1)", opacity: 0.9 }} />
      <div style={{ position: "absolute", left: 64, right: 64, top: 128, height: 1, background: fg, opacity: 0.18 }} />
      <div style={{ position: "absolute", left: 64, right: 64, top: p.img ? 170 : 300 }}>
        {p.lines.map((ln: string, k: number) => (
          <div key={k} style={{ overflow: "hidden", height: size * 1.06 }}>
            <div style={{ transform: `translateY(${(1 - clamp(sp(frame, fps, p.t0 + 0.06 + k * 0.09, SP.pop))) * 110}%)`, fontSize: size, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.04, whiteSpace: "nowrap" }}>
              {parseEm(ln).map((c, i) => c.em ? (
                <span key={i} style={{ position: "relative", display: "inline-block", isolation: "isolate", padding: "0 .08em", color: p.dark ? INK : CREAM }}>
                  <i style={{ position: "absolute", inset: ".04em 0 .02em 0", background: p.dark ? CREAM : INK, zIndex: -1, transformOrigin: "left", transform: `scaleX(${ink(k + 2)})`, borderRadius: ".14em" }} />{c.t}
                </span>) : <span key={i}>{c.t}</span>)}
            </div>
          </div>
        ))}
      </div>
      {(p.type === "loop" || p.type === "rise") && <Diagram p={p} t={t} frame={frame} fps={fps} />}
      {p.img && (
        <div style={{ position: "absolute", left: (1080 - p.iw) / 2, top: 440, width: p.iw, height: p.ih, borderRadius: 24, overflow: "hidden", transform: `translateY(${(1 - clamp(sp(frame, fps, p.t0 + 0.2, SP.heavy))) * 80}px)`, boxShadow: p.dark ? "0 24px 60px -20px rgba(0,0,0,.7)" : "0 24px 60px -24px rgba(19,19,17,.4)" }}>
          <Img src={staticFile(p.img)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      )}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: fg, opacity: 0.16 }} />
    </div>
  );
};

export const Reel8: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  let pp = 0;
  for (const pn of spec.panels as any[]) { const en = pn.t0 === 0 ? 1 : sp(frame, fps, pn.t0, SP.heavy); const ex = sp(frame, fps, pn.t1, SP.heavy); pp += en - ex; }
  pp = clamp(pp, 0, 1);
  // hard cut punch-in on the word, hold, hard cut back (no easing)
  let zoom = 1;
  for (const [s, peak, hold] of spec.punches as number[][]) if (t >= s - 0.03 && t < s - 0.03 + hold) zoom = Math.max(zoom, peak);
  // the only smooth move: a slow push on thesis lines
  for (const [a, b, peak] of spec.pushes as number[][]) if (t >= a && t < b) zoom = Math.max(zoom, 1 + (peak - 1) * clamp((t - a) / (b - a)));
  const ca = (spec.cutaways as any[]).find((c) => t >= c.t0 && t < c.t1);
  const lt = spec.lowerThird; const ltOn = !ca && t >= lt.t0 && t < lt.t1;
  return (
    <AbsoluteFill style={{ background: INK }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: PANEL_H * pp, height: 1920 - PANEL_H * pp, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: -140 * pp, width: 1080, height: 1920, transform: `scale(${zoom})`, transformOrigin: `${FX * 100}% ${FY * 100}%` }}>
          <OffthreadVideo src={staticFile(jobFile("base.mp4"))} style={{ width: 1080, height: 1920 }} />
        </div>
      </div>
      {(spec.panels as any[]).map((pn, i) => {
        if (t < pn.t0 - 0.02 || t > pn.t1 + 1.0) return null;
        const en = pn.t0 === 0 ? 1 : sp(frame, fps, pn.t0, SP.heavy), ex = sp(frame, fps, pn.t1, SP.heavy);
        return <div key={i} style={{ position: "absolute", left: 0, top: 0, width: 1080, height: PANEL_H, transform: `translateY(${-PANEL_H * (1 - clamp(en - ex))}px)` }}><Panel8 p={pn} t={t} frame={frame} fps={fps} /></div>;
      })}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,.45) 100%)" }} />
      {ltOn && (
        <div style={{ position: "absolute", left: 64, top: 1620, fontFamily: SANS, color: CREAM, textShadow: "0 2px 14px rgba(0,0,0,.6)" }}>
          <div style={{ width: 64, height: 3, background: CREAM, marginBottom: 14 }} />
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}>{lt.name}</div>
          <div style={{ fontSize: 32, fontWeight: 500, opacity: 0.85 }}>{lt.role}</div>
        </div>
      )}
      {ca && (() => {
        const u = clamp((t - ca.t0) / (ca.t1 - ca.t0)); const s2 = 1 + 0.05 * u;
        const inn = clamp(sp(frame, fps, ca.t0, { damping: 30, stiffness: 320, mass: 1 }));
        const out = clamp((t - (ca.t1 - 0.14)) / 0.14);
        const ty = (1 - inn) * 1920 + out * 1920;
        return (
          <AbsoluteFill style={{ background: CREAM, transform: `translateY(${ty}px)` }}>
            <div style={{ position: "absolute", left: (1080 - ca.w) / 2, top: ca.y, width: ca.w, height: ca.h, transform: `scale(${s2})`, borderRadius: 26, overflow: "hidden", boxShadow: "0 30px 70px -20px rgba(19,19,17,.35)" }}>
              <Img src={staticFile(ca.img)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </AbsoluteFill>
        );
      })()}
      <Captions t={t} dark={!!ca && t >= ca.t0 + 0.12 && t < ca.t1 - 0.12} cy={ca ? ca.cy : 1380 + 330 * pp} />
      <Img src={staticFile("grain.png")} style={{ position: "absolute", inset: 0, width: 1080, height: 1920, objectFit: "cover", opacity: 0.04, mixBlendMode: "overlay" }} />
      <Audio src={staticFile(jobFile("sfx.wav"))} />
    </AbsoluteFill>
  );
};
