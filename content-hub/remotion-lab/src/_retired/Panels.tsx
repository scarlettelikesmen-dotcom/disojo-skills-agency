import React from "react";
import { staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { CREAM, INK, MONO, PAPER, SANS, SP, clamp, sp } from "./theme";
import { Stage } from "./Scene3D";
import spec from "./spec.json";

/* Disojo panel system v2: flat surfaces, one hairline, one wordmark, typography-led motion.
   No gradients, no dot grids, no icons, no eyebrow labels. The animation carries the idea. */

const Mask: React.FC<{ children: React.ReactNode; t0: number; delay?: number }> = ({ children, t0, delay = 0 }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const a = sp(frame, fps, t0 + delay, SP.soft);
  return (
    <div style={{ overflow: "hidden", padding: "0.02em 0 0.2em", marginBottom: "-0.14em" }}>
      <div style={{ transform: `translateY(${(1 - a) * 112}%)` }}>{children}</div>
    </div>
  );
};

// the one allowed highlighter: marker sweeps behind a word, dark copy is revealed by the same sweep
const Marked: React.FC<{ text: string; at: number; ink: string; bg: string }> = ({ text, at, ink, bg }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const m = clamp(sp(frame, fps, at, SP.soft), 0, 1.02);
  return (
    <span style={{ position: "relative", display: "inline-block", padding: "0 .14em", margin: "0 -.14em", isolation: "isolate", color: ink }}>
      <i style={{ position: "absolute", inset: ".06em 0 -.1em 0", background: ink, zIndex: -1, transformOrigin: "left", transform: `scaleX(${m})`, borderRadius: ".06em" }} />
      {text}
      <span style={{ position: "absolute", left: 0, top: 0, padding: "0 .14em", color: bg, clipPath: `inset(0 ${(1 - clamp(m)) * 100}% 0 0)` }}>{text}</span>
    </span>
  );
};

const base = (size: number, weight = 700): React.CSSProperties => ({ fontFamily: SANS, fontWeight: weight, fontSize: size, lineHeight: 0.94, letterSpacing: "-0.055em", whiteSpace: "nowrap" });

const Frame: React.FC<{ theme: "dark" | "light"; t0: number; children: React.ReactNode }> = ({ theme, t0, children }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const light = theme === "light"; const bg = light ? PAPER : INK; const ink = light ? INK : CREAM;
  const rule = clamp(sp(frame, fps, t0 + 0.15, SP.heavy));
  return (
    <div style={{ position: "absolute", inset: 0, background: bg, color: ink, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}><Stage panels={spec.panels as any[]} theme={theme} /></div>
      {/* the single brand mark + a hairline that draws itself */}
      <div style={{ position: "absolute", left: 76, top: 296, display: "flex", alignItems: "center", gap: 22, opacity: clamp(rule * 1.4) }}>
        <div style={{ height: 24, aspectRatio: "1211/153", background: ink, WebkitMaskImage: `url(${staticFile("wordmark.png")})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" } as any} />
        <div style={{ width: 150 * rule, height: 1, background: ink, opacity: 0.35 }} />
      </div>
      <div style={{ position: "absolute", left: 76, right: 76, top: 344, bottom: 120, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>{children}</div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 1, background: ink, opacity: 0.2 }} />
    </div>
  );
};

const Hook: React.FC<{ p: any }> = ({ p }) => {
  const lines = ["Agencies", "build ", "software."];
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  return (
    <Frame theme={p.theme} t0={0}>
      <div style={{ ...base(100) }}>
        <Mask t0={0.1}>Agencies build</Mask>
        <Mask t0={0.1} delay={0.09}><Marked text="bad" at={1.2} ink={CREAM} bg={INK} /> software.</Mask>
      </div>
    </Frame>
  );
};

const Clean: React.FC<{ p: any }> = ({ p }) => {
  const t0 = p.t0 + 0.22;
  return (
    <Frame theme={p.theme} t0={p.t0}>
      <div style={{ ...base(100) }}>
        <Mask t0={t0}>Clean</Mask>
        <Mask t0={t0} delay={0.1}>software.</Mask>
      </div>
    </Frame>
  );
};

const Balance: React.FC<{ p: any }> = ({ p }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const t0 = p.t0 + 0.22;
  const strike = clamp(sp(frame, fps, t0 + 0.65, SP.heavy));
  const ink = p.theme === "light" ? INK : CREAM;
  return (
    <Frame theme={p.theme} t0={p.t0}>
      <div style={{ ...base(96) }}>
        <Mask t0={t0}>Your business,</Mask>
        <Mask t0={t0} delay={0.1}>
          <span style={{ position: "relative", display: "inline-block", fontWeight: 300, opacity: 1 - 0.62 * strike }}>
            not the money.
            <i style={{ position: "absolute", left: 0, top: "52%", height: 7, width: `${strike * 100}%`, background: ink, borderRadius: 4 }} />
          </span>
        </Mask>
      </div>
    </Frame>
  );
};

const Loop: React.FC<{ p: any }> = ({ p }) => {
  const t0 = p.t0 + 0.22; const ink = p.theme === "light" ? INK : CREAM; const bg = p.theme === "light" ? PAPER : INK;
  return (
    <Frame theme={p.theme} t0={p.t0}>
      <div style={{ ...base(92) }}>
        <Mask t0={t0}>You get <Marked text="business." at={t0 + 0.55} ink={ink} bg={bg} /></Mask>
        <Mask t0={t0} delay={0.12}>We get <Marked text="business." at={t0 + 0.95} ink={ink} bg={bg} /></Mask>
      </div>
    </Frame>
  );
};

const Rise: React.FC<{ p: any }> = ({ p }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig();
  const t0 = p.t0 + 0.22;
  const a = clamp(sp(frame, fps, t0 + 0.1, SP.heavy), 0, 1.02);
  return (
    <Frame theme={p.theme} t0={p.t0}>
      <div style={{ ...base(100) }}>
        <div style={{ ...base(100, 200 + 600 * clamp(a)), letterSpacing: `${-0.07 + 0.015 * clamp(a)}em` }}>More</div>
        <Mask t0={t0} delay={0.2}>business for you.</Mask>
      </div>
    </Frame>
  );
};

export const Panel: React.FC<{ p: any }> = ({ p }) => {
  const C: any = ({ hook: Hook, clean: Clean, balance: Balance, loop: Loop, rise: Rise } as any)[p.type];
  return <C p={p} />;
};

export const LowerThird: React.FC<{ s: any }> = ({ s }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  if (t < s.t0 || t > s.t1 + 0.9) return null;
  const inn = clamp(sp(frame, fps, s.t0, SP.soft)), out = clamp(sp(frame, fps, s.t1, SP.soft));
  const sh = "0 0 3px rgba(0,0,0,.85), 0 2px 12px rgba(0,0,0,.6), 0 4px 30px rgba(0,0,0,.5)";
  return (
    <div style={{ position: "absolute", left: 60, top: 240, display: "flex", gap: 20, alignItems: "stretch", opacity: inn * (1 - out) }}>
      <div style={{ width: 3, background: CREAM, transformOrigin: "top", transform: `scaleY(${inn})`, boxShadow: "0 0 10px rgba(0,0,0,.5)" }} />
      <div style={{ overflow: "hidden" }}>
        <div style={{ transform: `translateY(${(1 - inn) * 100}%)` }}>
          <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 44, letterSpacing: "-.035em", color: CREAM, lineHeight: 1.05, textShadow: sh }}>{s.name}</div>
          <div style={{ fontFamily: SANS, fontWeight: 500, fontSize: 26, letterSpacing: "-.01em", color: CREAM, opacity: 0.82, marginTop: 4, textShadow: sh }}>{s.role}</div>
        </div>
      </div>
    </div>
  );
};
