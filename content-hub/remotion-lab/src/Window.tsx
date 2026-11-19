// Postcards case study reel, idea 1 "Through the window" (Tejjo picked 2026-11-19).
// The mark is an arch window. The film is seen through it: each place opens inside the last, then the live store,
// then the camera pulls back to the mark and the number. Clean edits only: no shake, no flashes, long calm holds.
import React, { useEffect, useState } from "react";
import { AbsoluteFill, Img, Sequence, continueRender, delayRender, interpolate, staticFile, useCurrentFrame, useVideoConfig, spring, Easing } from "remotion";

export const W_FRAMES = 798;
const INK = "#2B2118", CREAM = "#EFE4D4";
const pc = (f: string) => staticFile("pc/" + f);
const cl = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };
const INOUT = Easing.bezier(0.65, 0, 0.25, 1);
const OUT = Easing.bezier(0.16, 1, 0.35, 1);

// the arch, traced from the mark as a vector (units: 554 x 470), body centre at (277, 362)
const ARCH = "M277,12 C290,40 315,62 350,80 C410,110 445,140 450,200 C480,205 525,220 538,265 L545,460 L9,460 L16,265 C29,220 74,205 104,200 C109,140 144,110 204,80 C239,62 264,40 277,12 Z";
const ARCH_URI = `url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 554 470'><path d='${ARCH}' fill='black'/></svg>`)}")`;
const AW = 554, AH = 470, AX = 277, AY = 362;
const FULL = 11; // arch scale at which its body covers the whole 1080x1920 frame

const useBonny = () => {
  const [h] = useState(() => delayRender("bonny"));
  useEffect(() => {
    const f = new FontFace("PC Bonny", `url(${pc("bonny-700.woff2")})`, { weight: "700" });
    f.load().then((l) => { (document as any).fonts.add(l); continueRender(h); });
  }, [h]);
};

// geometric interpolation of scale, so growth feels like moving forward at a steady pace
const logLerp = (a: number, b: number, t: number) => Math.exp(Math.log(a) + (Math.log(b) - Math.log(a)) * t);

// a full-frame layer seen through the arch at scale k, the arch's body centre at (cx, cy)
const Through: React.FC<{ k: number; cx?: number; cy?: number; children: React.ReactNode }> = ({ k, cx = 540, cy = 960, children }) => (
  <AbsoluteFill style={{ WebkitMaskImage: ARCH_URI, WebkitMaskRepeat: "no-repeat",
    WebkitMaskSize: `${AW * k}px ${AH * k}px`, WebkitMaskPosition: `${cx - AX * k}px ${cy - AY * k}px` }}>{children}</AbsoluteFill>
);

// a photo filling the frame with a slow push
const Place: React.FC<{ src: string; from?: number; s0?: number; s1?: number; len?: number }> = ({ src, from = 0, s0 = 1.14, s1 = 1.0, len = 120 }) => {
  const f = useCurrentFrame();
  const s = interpolate(f - from, [0, len], [s0, s1], { ...cl, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
  return <AbsoluteFill style={{ overflow: "hidden" }}><Img src={pc(src)} style={{ width: "100%", height: "100%", objectFit: "cover", transform: `scale(${s})` }} /></AbsoluteFill>;
};

// one line of Bonny, words rising out of a mask, then fading out cleanly
const Line: React.FC<{ text: string; at: number; out?: number; size?: number; y?: number; color?: string }> = ({ text, at, out = 9999, size = 88, y = 1380, color = CREAM }) => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const fade = interpolate(f, [out, out + 8], [1, 0], cl);
  return (
    <div style={{ position: "absolute", left: 90, right: 90, top: y, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: `0 ${size * 0.24}px`,
      fontFamily: "PC Bonny", fontWeight: 700, fontSize: size, lineHeight: 1.04, color, opacity: fade, textShadow: color === CREAM ? "0 2px 30px rgba(20,12,6,.55)" : "none" }}>
      {text.split(" ").map((w, i) => {
        const p = spring({ frame: f - at - i * 2, fps, config: { damping: 26, stiffness: 140 } });
        return <span key={i} style={{ overflow: "hidden", display: "inline-block", paddingBottom: size * 0.12 }}>
          <span style={{ display: "inline-block", transform: `translateY(${(1 - p) * 110}%)` }}>{w}</span></span>;
      })}
    </div>
  );
};

// the next scene opening as a window in the middle of this one
const Open: React.FC<{ under: React.ReactNode; over: React.ReactNode; len?: number }> = ({ under, over, len = 34 }) => {
  const f = useCurrentFrame();
  const t = interpolate(f, [0, len], [0, 1], { ...cl, easing: INOUT });
  const k = logLerp(0.06, FULL, t);
  const push = interpolate(t, [0, 1], [1, 1.12]); // the outer scene moves towards us as the window grows
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transform: `scale(${push})` }}>{under}</AbsoluteFill>
      <Through k={k}>{over}</Through>
    </AbsoluteFill>
  );
};

const STORE_N = 160;
// t = frames since the store window started opening. Hero (rec frames 0-19) holds, then a hard cut at t=56
// straight into the scent reel (rec frame 54 on), skipping the scroll through half-loaded sections.
const storeIndex = (t: number) => (t < 56 ? Math.min(t, 19) : Math.min(STORE_N - 1, 54 + (t - 56)));
const Store: React.FC<{ t0?: number }> = ({ t0 = 0 }) => {
  const f = useCurrentFrame();
  const n = storeIndex(Math.max(0, f + t0));
  return <AbsoluteFill style={{ background: CREAM }}><Img src={pc(`storefull/s_${String(n).padStart(3, "0")}.jpg`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></AbsoluteFill>;
};

const Mark: React.FC<{ size: number; color: string; style?: React.CSSProperties }> = ({ size, color, style }) => (
  <div style={{ width: size, height: size, background: color, WebkitMaskImage: `url(${pc("mark-print.png")})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", ...style }} />
);

// timeline (30 fps)
const T = { intro: 0, open1: 90, hold1: 124, open2: 204, hold2: 238, open3: 298, hold3: 332, open4: 392, hold4: 426, openS: 486, holdS: 520, back: 658, end: W_FRAMES };

// 1. ink, a small window onto the Himalayan morning, the line beneath; then the window becomes the world
const Intro: React.FC = () => {
  const f = useCurrentFrame();
  const breathe = interpolate(f, [0, 90], [1.08, 1.16]);
  const grow = interpolate(f, [90, 124], [0, 1], { ...cl, easing: INOUT });
  const k = grow > 0 ? logLerp(1.16, FULL, grow) : breathe;
  const cy = interpolate(grow, [0, 1], [760, 960]);
  return (
    <AbsoluteFill style={{ background: INK }}>
      {/* the promise first: the product and the result, then a hard cut inside the window to the first place */}
      <Through k={k} cy={cy}>{f < 46
          ? <AbsoluteFill style={{ background: "#EDE3D3" }}><Img src={pc("w-bottle.jpg")} style={{ position: "absolute", left: 540 - 200, top: 352, height: 500, width: 400, objectFit: "cover",
              transform: `scale(${interpolate(f, [0, 46], [1.06, 1.0])})` }} /></AbsoluteFill>
          : <Place src="w-himalayas.jpg" s0={1.3} s1={1.06} len={150} from={46} />}</Through>
      <Line text="Their Meta ads went from 0.6x to 3.7x." at={4} out={40} size={92} y={1210} />
      <Line text="The idea: people can't smell a website." at={50} out={86} size={92} y={1210} />
    </AbsoluteFill>
  );
};

const NAMES: [string, string][] = [["w-himalayas.jpg", "Himalayan Morning"], ["w-palace.jpg", "Rani Mahal"], ["w-coast.jpg", "Malabar Coast"], ["w-haveli.jpg", "Old Haveli"]];

// a place held full frame, its scent's name set low
const Hold: React.FC<{ i: number; len: number; line?: string }> = ({ i, len, line }) => (
  <AbsoluteFill>
    <Place src={NAMES[i][0]} s0={1.06} s1={1.0} len={len} />
    <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(20,12,6,0) 50%, rgba(20,12,6,.55) 82%, rgba(20,12,6,.6))" }} />
    {line && <Line text={line} at={4} out={len - 34} size={98} y={1380} />}
    <Line text={`Scent 0${i + 1}`} at={line ? len - 30 : 2} out={len - 8} size={46} y={1320} color="rgba(239,228,212,.78)" />
    <Line text={NAMES[i][1]} at={line ? len - 26 : 6} out={len - 8} size={108} y={1380} />
  </AbsoluteFill>
);

// the end: the store pulls back into the arch, the arch becomes the mark, the number sets beneath
const Back: React.FC = () => {
  const f = useCurrentFrame();
  const t = interpolate(f, [0, 36], [0, 1], { ...cl, easing: INOUT });
  const k = logLerp(FULL, 0.62, t);
  const cy = interpolate(t, [0, 1], [960, 640]);
  const toMark = interpolate(f, [36, 50], [0, 1], cl);
  const num = interpolate(f, [52, 90], [0, 1], { ...cl, easing: Easing.bezier(0.5, 0, 0.1, 1) });
  const show = interpolate(f, [48, 58], [0, 1], { ...cl, easing: OUT });
  return (
    <AbsoluteFill style={{ background: INK }}>
      <AbsoluteFill style={{ opacity: 1 - toMark }}><Through k={k} cy={cy}><Store t0={(T.holdS - T.openS) + (T.back - T.holdS)} /></Through></AbsoluteFill>
      <AbsoluteFill style={{ alignItems: "center", opacity: toMark }}>
        <Mark size={AW * 0.62 * 1.05} color={CREAM} style={{ position: "absolute", top: 640 - AY * 0.62 - 12, transform: "scale(1)" }} />
      </AbsoluteFill>
      <div style={{ position: "absolute", left: 0, right: 0, top: 1000, textAlign: "center", fontFamily: "PC Bonny", fontWeight: 700, color: CREAM, opacity: show, transform: `translateY(${(1 - show) * 24}px)` }}>
        <div style={{ fontSize: 54, color: "rgba(239,228,212,.6)" }}>Meta ad return</div>
        <div style={{ fontSize: 200, lineHeight: 1.05 }}>{(0.6 + 3.1 * num).toFixed(1)}x</div>
        <div style={{ fontSize: 48, color: "rgba(239,228,212,.6)", marginTop: 26, opacity: interpolate(f, [92, 102], [0, 1], cl) }}>from 0.6x</div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 1440, textAlign: "center", fontFamily: "PC Bonny", fontWeight: 700, fontSize: 40, color: "rgba(239,228,212,.55)",
        opacity: interpolate(f, [104, 116], [0, 1], cl) }}>Postcards Perfumes · identity and store by Disojo Studio</div>
    </AbsoluteFill>
  );
};

export const Window: React.FC = () => {
  useBonny();
  const holds: [number, number, number][] = [[T.hold1, T.open2, 0], [T.hold2, T.open3, 1], [T.hold3, T.open4, 2], [T.hold4, T.openS, 3]];
  return (
    <AbsoluteFill style={{ background: INK }}>
      <Sequence from={0} durationInFrames={T.hold1}><Intro /></Sequence>
      {holds.map(([a, b, i]) => (
        <Sequence key={i} from={a} durationInFrames={b - a}><Hold i={i} len={b - a} line={i === 0 ? "So we sold the place." : undefined} /></Sequence>
      ))}
      <Sequence from={T.open2} durationInFrames={T.hold2 - T.open2}><Open under={<Place src="w-himalayas.jpg" s0={1.0} s1={1.0} />} over={<Place src="w-palace.jpg" s0={1.25} s1={1.06} len={34} />} /></Sequence>
      <Sequence from={T.open3} durationInFrames={T.hold3 - T.open3}><Open under={<Place src="w-palace.jpg" s0={1.0} s1={1.0} />} over={<Place src="w-coast.jpg" s0={1.25} s1={1.06} len={34} />} /></Sequence>
      <Sequence from={T.open4} durationInFrames={T.hold4 - T.open4}><Open under={<Place src="w-coast.jpg" s0={1.0} s1={1.0} />} over={<Place src="w-haveli.jpg" s0={1.25} s1={1.06} len={34} />} /></Sequence>
      <Sequence from={T.openS} durationInFrames={T.holdS - T.openS}><Open under={<Place src="w-haveli.jpg" s0={1.0} s1={1.0} />} over={<Store t0={0} />} /></Sequence>
      <Sequence from={T.holdS} durationInFrames={T.back - T.holdS}><Store t0={T.holdS - T.openS} /></Sequence>
      <Sequence from={T.back} durationInFrames={T.end - T.back}><Back /></Sequence>
    </AbsoluteFill>
  );
};
