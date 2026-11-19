// Postcards Perfumes case study reel (about 29 s, 1080x1920, 30 fps). Only real assets: the mark, the bottle
// cutouts with the real labels, the store's place pictures, the flat label, the live store recorded frame by frame.
// Edit grammar (brands/disojo/research/editing-playbook-2026-11-18.md): macro tease, scale ladder, match cuts,
// a new picture every ~1 s, holds for the payoff, one colour world, impacts on sound hits, a clean loop.
import React, { useEffect, useState } from "react";
import { AbsoluteFill, Audio, Img, Sequence, continueRender, delayRender, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import BEATS from "./pcBeats.json";
const C: any = (BEATS as any).c;
const MUSIC_FROM = Math.round((BEATS as any).off * 30);

export const PC_FRAMES = C.total;
const INK = "#2B2118", CREAM = "#EFE4D4", BROWN = "#5D2C16", KRAFT = "#C9A579", AMBER = "#F5B549";
const pc = (f: string) => staticFile("pc/" + f);
const OUT = Easing.bezier(0.16, 1, 0.35, 1);
const GLIDE = Easing.bezier(0.33, 0, 0.12, 1);
const cl = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

const useBonny = () => {
  const [h] = useState(() => delayRender("bonny"));
  useEffect(() => {
    const f = new FontFace("PC Bonny", `url(${pc("bonny-700.woff2")})`, { weight: "700" });
    f.load().then((l) => { (document as any).fonts.add(l); continueRender(h); });
  }, [h]);
};

// window light: a soft warm band that drifts across, so flat paper reads as lit paper
const Light: React.FC<{ from?: number }> = ({ from = 0 }) => {
  const f = useCurrentFrame();
  const x = interpolate(f - from, [0, 90], [-30, 30]);
  return <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "soft-light",
    background: `radial-gradient(120% 70% at ${20 + x}% 18%, rgba(255,240,215,.55), rgba(255,240,215,0) 60%), linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(60,35,15,.25))` }} />;
};

const Kraft: React.FC<{ scale?: number; x?: number; y?: number; rot?: number }> = ({ scale = 1, x = 0, y = 0, rot = 0 }) => (
  <AbsoluteFill style={{ overflow: "hidden", background: KRAFT }}>
    <Img src={pc("kraft.jpg")} style={{ position: "absolute", left: "50%", top: "50%", width: 1600, height: 2800,
      transform: `translate(-50%,-50%) translate(${x}px,${y}px) rotate(${rot}deg) scale(${scale})` }} />
  </AbsoluteFill>
);

const Mark: React.FC<{ size: number; color?: string; style?: React.CSSProperties; blend?: boolean }> = ({ size, color = BROWN, style, blend = true }) => (
  <div style={{ width: size, height: size, background: color, mixBlendMode: blend ? "multiply" : "normal",
    WebkitMaskImage: `url(${pc("mark-print.png")})`, WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center", ...style }} />
);

const shakeAt = (f: number, at: number, amp = 10) => (f >= at ? Math.exp(-(f - at) / 2.2) * Math.sin((f - at) * 2.6) * amp : 0);

// words masked up one by one, optional highlight box on one word
const Words: React.FC<{ words: string[]; hi?: string; size: number; color: string; from?: number; align?: "center" | "flex-start" }> = ({ words, hi, size, color, from = 0, align = "center" }) => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: align, gap: `0 ${size * 0.22}px`, fontFamily: "PC Bonny", fontWeight: 700, fontSize: size, lineHeight: 0.98, color, letterSpacing: "-0.01em", textAlign: "center" }}>
      {words.map((w, i) => {
        const p = spring({ frame: f - from - i * 2, fps, config: { damping: 20, stiffness: 190 } });
        const isHi = !!hi && w.startsWith(hi);
        const box = isHi ? interpolate(f - from, [12, 19], [0, 1], { ...cl, easing: OUT }) : 0;
        return (
          <span key={i} style={{ overflow: "hidden", display: "inline-block", padding: `0 4px ${size * 0.1}px`, position: "relative" }}>
            {isHi && <span style={{ position: "absolute", left: -8, right: -8, top: size * 0.06, bottom: size * 0.04, background: BROWN, transformOrigin: "left", transform: `scaleX(${box})` }} />}
            <span style={{ display: "inline-block", position: "relative", transform: `translateY(${(1 - p) * 115}%)`, color: isHi && box > 0.5 ? CREAM : color }}>{w}</span>
          </span>
        );
      })}
    </div>
  );
};

// 1. macro tease: kraft fibres and the edge of brown ink, light moving across (0-24)
const Open: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Kraft scale={interpolate(f, [0, 24], [3.6, 3.2])} x={interpolate(f, [0, 24], [160, 90])} y={-40} rot={interpolate(f, [0, 24], [4, 2])} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <Mark size={3000} style={{ transform: `translate(${interpolate(f, [0, 24], [820, 760])}px, 1060px) rotate(${interpolate(f, [0, 24], [4, 2])}deg)`, opacity: 0.94 }} />
      </AbsoluteFill>
      <Light />
    </AbsoluteFill>
  );
};

// 2+3. the stamp lands, then the line sets under it on the same kraft (24-90)
const Stamp: React.FC = () => {
  const f = useCurrentFrame();
  const land = interpolate(f, [0, 4], [1.3, 1], { ...cl, easing: Easing.in(Easing.quad) });
  const op = interpolate(f, [2, 4], [0, 0.94], cl);
  const blur = interpolate(f, [3, 6], [3, 0], cl);
  const sh = shakeAt(f, 4, 11);
  const up = interpolate(f, [16, 30], [0, -300], { ...cl, easing: OUT });
  const shrink = interpolate(f, [16, 30], [1, 0.62], { ...cl, easing: OUT });
  return (
    <AbsoluteFill style={{ transform: `translate(${sh}px, ${sh * 0.6}px)` }}>
      <Kraft scale={1.06} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <Mark size={600} style={{ transform: `translateY(${up}px) scale(${land * shrink})`, opacity: op, filter: `blur(${blur}px)` }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: "center", padding: "0 80px", transform: "translateY(230px)" }}>
        <Words words={["People", "can't", "smell", "a", "website."]} size={142} color={BROWN} from={20} />
      </AbsoluteFill>
      <Light from={24} />
    </AbsoluteFill>
  );
};

// 4. the bottle: macro on the label and oil, pulling back to the whole bottle (90-160)
const Bottle: React.FC = () => {
  const f = useCurrentFrame();
  const s = interpolate(f, [0, 66], [3.6, 1], { ...cl, easing: GLIDE });
  const y = interpolate(f, [0, 66], [620, 0], { ...cl, easing: GLIDE });
  const r = interpolate(f, [0, 70], [-7, 0]);
  return (
    <AbsoluteFill style={{ background: CREAM, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <Img src={pc("old-haveli.webp")} style={{ height: 1480, transform: `translateY(${y}px) scale(${s}) rotate(${r}deg)`,
        filter: "drop-shadow(34px 44px 44px rgba(43,33,24,.24))" }} />
      <Light />
    </AbsoluteFill>
  );
};

// 5. the turn (160-196)
const Turn: React.FC = () => (
  <AbsoluteFill style={{ background: CREAM, justifyContent: "center", padding: "0 80px" }}>
    <Words words={["So", "we", "sold", "the", "place."]} hi="place" size={168} color={INK} />
    <Light />
  </AbsoluteFill>
);

// 6. four match cuts: the bottle in the same place, the postcard behind changes (196-304)
const PLACES = ["himalayan-morning", "rani-mahal", "malabar-coast", "old-haveli"];
const Match: React.FC<{ slug: string; tilt: number; i: number }> = ({ slug, tilt, i }) => {
  const f = useCurrentFrame();
  const drop = interpolate(f, [0, 5], [-90, 0], { ...cl, easing: OUT });
  const push = interpolate(f, [0, 27], [1.0, 1.05]);
  return (
    <AbsoluteFill style={{ background: CREAM, overflow: "hidden" }}>
      <AbsoluteFill style={{ transform: `scale(${push})`, alignItems: "center" }}>
        <div style={{ position: "absolute", top: 250, width: 940, padding: 24, background: "#FBF7F0", transform: `rotate(${tilt}deg)`,
          boxShadow: "0 34px 70px rgba(43,33,24,.2)" }}>
          <Img src={pc(`place-${slug}.jpg`)} style={{ width: "100%", display: "block" }} />
        </div>
        <Img src={pc(`${slug}.webp`)} style={{ position: "absolute", top: 520, height: 1280, transform: `translateY(${drop}px) rotate(${i % 2 ? 7 : -7}deg)`,
          filter: "drop-shadow(26px 36px 30px rgba(43,33,24,.3))" }} />
      </AbsoluteFill>
      <Light />
    </AbsoluteFill>
  );
};

// 7. the identity: the stamp four times on the beat, smaller each time, building the system (304-364)
const StampRun: React.FC = () => {
  const f = useCurrentFrame();
  const hits: number[] = C.hits;
  const spots = [[-230, -420, 380, -6], [230, -120, 300, 5], [-200, 260, 260, -3], [210, 560, 220, 8]];
  const sh = hits.reduce((a, h) => a + shakeAt(f, h + 3, 7), 0);
  return (
    <AbsoluteFill style={{ transform: `translate(${sh}px, ${sh * 0.5}px)` }}>
      <Kraft scale={1.1} rot={-2} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        {spots.map(([x, y, s, r], k) => {
          const t = f - hits[k];
          if (t < 0) return null;
          const land = interpolate(t, [0, 3], [1.35, 1], { ...cl, easing: Easing.in(Easing.quad) });
          return <Mark key={k} size={s} style={{ position: "absolute", transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${land})`, opacity: interpolate(t, [1, 3], [0, 0.92], cl) }} />;
        })}
      </AbsoluteFill>
      <Light />
    </AbsoluteFill>
  );
};

// 8. the system, six frames at 0.3 s (364-418)
const SYS = [
  () => <AbsoluteFill style={{ background: INK, alignItems: "center", justifyContent: "center" }}><Mark size={520} color={CREAM} blend={false} /></AbsoluteFill>,
  () => <AbsoluteFill style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>{[KRAFT, BROWN, INK, AMBER].map((c) => <div key={c} style={{ background: c }} />)}</AbsoluteFill>,
  () => <AbsoluteFill style={{ background: "#E6D3B8", alignItems: "center", justifyContent: "center", fontFamily: "PC Bonny", fontWeight: 700, fontSize: 620, color: INK, lineHeight: 1 }}>Aa</AbsoluteFill>,
  () => <AbsoluteFill style={{ background: INK, alignItems: "center", justifyContent: "center" }}><Img src={pc("vlabel.png")} style={{ height: 1560, borderRadius: 6 }} /></AbsoluteFill>,
  () => <AbsoluteFill><Img src={pc("kraft-box.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "52% 50%" }} /></AbsoluteFill>,
  () => <AbsoluteFill style={{ background: "#2E241B", alignItems: "center", justifyContent: "center" }}><Img src={pc("footer-label.png")} style={{ width: 960 }} /></AbsoluteFill>,
];
const System: React.FC = () => {
  const f = useCurrentFrame();
  const k = Math.min(SYS.length - 1, Math.floor(f / C.sysStep));
  const Frame = SYS[k];
  const s = interpolate(f % C.sysStep, [0, C.sysStep], [1.06, 1.0]);
  return <AbsoluteFill style={{ transform: `scale(${s})` }}><Frame /></AbsoluteFill>;
};

// 9. the live store on a phone, recorded frame by frame (418-578)
const STORE_N = 160;
const Store: React.FC = () => {
  const f = useCurrentFrame();
  const n = Math.min(STORE_N - 1, f);
  const enter = interpolate(f, [0, 10], [260, 0], { ...cl, easing: OUT });
  const rot = interpolate(f, [0, 160], [-5, 3]);
  const s = interpolate(f, [0, 160], [0.97, 1.02]);
  return (
    <AbsoluteFill style={{ background: CREAM, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ width: 752, padding: 14, borderRadius: 86, background: "#0d0d0c", boxShadow: "0 50px 100px rgba(43,33,24,.32), inset 0 0 0 2px #2b2b27",
        transform: `translateY(${enter}px) rotate(${rot}deg) scale(${s})` }}>
        <div style={{ borderRadius: 72, overflow: "hidden" }}>
          <Img src={pc(`store/s_${String(n).padStart(3, "0")}.jpg`)} style={{ display: "block", width: "100%" }} />
        </div>
      </div>
      <Light />
    </AbsoluteFill>
  );
};

// 10. the box: three bottles drop into the open kraft tray, the stamped lid closes (578-650)
const Box: React.FC = () => {
  const f = useCurrentFrame();
  const drops = [8, 20, 32];
  const order = ["himalayan-morning", "rani-mahal", "old-haveli"];
  const lid = interpolate(f, [C.lidAt - 10, C.lidAt], [-1500, 0], { ...cl, easing: Easing.in(Easing.cubic) });
  const sh = shakeAt(f, C.lidAt, 9) + drops.reduce((a, d) => a + shakeAt(f, d + 4, 3), 0);
  return (
    <AbsoluteFill style={{ background: CREAM, alignItems: "center", justifyContent: "center", overflow: "hidden", transform: `translate(${sh}px, ${sh * 0.5}px)` }}>
      <div style={{ position: "relative", width: 860, height: 1060, borderRadius: 10, overflow: "hidden", boxShadow: "0 40px 90px rgba(43,33,24,.3)" }}>
        <Kraft scale={0.8} />
        <div style={{ position: "absolute", inset: 46, borderRadius: 6, background: "rgba(80,50,25,.22)", boxShadow: "inset 0 18px 40px rgba(60,35,15,.45)" }} />
        {order.map((slug, k) => {
          const t = f - drops[k];
          if (t < 0) return null;
          const s = interpolate(t, [0, 5], [1.5, 1], { ...cl, easing: Easing.in(Easing.quad) });
          const o = interpolate(t, [0, 2], [0, 1], cl);
          return (
            <div key={slug} style={{ position: "absolute", left: 150 + k * 230, top: 120, height: 820, display: "flex", justifyContent: "center", opacity: o,
              transform: `scale(${s})`, filter: `drop-shadow(${12 * s}px ${18 * s}px ${14 * s}px rgba(40,22,10,.4))` }}>
              <Img src={pc(`${slug}.webp`)} style={{ height: 820 }} />
            </div>
          );
        })}
        <div style={{ position: "absolute", inset: 0, transform: `translateY(${lid}px)` }}>
          <Kraft scale={0.82} rot={1} />
          <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}><Mark size={360} style={{ opacity: 0.92 }} /></AbsoluteFill>
          <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end", paddingBottom: 250, fontFamily: "PC Bonny", fontWeight: 700, fontSize: 96, color: BROWN, mixBlendMode: "multiply", opacity: 0.92 }}>Postcards</AbsoluteFill>
        </div>
      </div>
      <Light />
    </AbsoluteFill>
  );
};

// 11. the result (650-770)
const Result: React.FC = () => {
  const f = useCurrentFrame();
  const p = interpolate(f, [6, C.countEnd], [0, 1], { ...cl, easing: Easing.bezier(0.5, 0, 0.1, 1) });
  const val = (0.6 + (3.7 - 0.6) * p).toFixed(1);
  const lab = interpolate(f, [0, 8], [0, 1], { ...cl, easing: OUT });
  const two = interpolate(f, [C.countEnd + 8, C.countEnd + 18], [0, 1], { ...cl, easing: OUT });
  const pop = f >= C.countEnd ? 1 + 0.06 * Math.exp(-(f - C.countEnd) / 4) : 1;
  return (
    <AbsoluteFill style={{ background: INK, color: CREAM, justifyContent: "center", padding: "0 90px", fontFamily: "PC Bonny", fontWeight: 700 }}>
      <div style={{ fontSize: 64, opacity: lab, transform: `translateY(${(1 - lab) * 30}px)`, color: "rgba(239,228,212,.62)" }}>Meta ad return</div>
      <div style={{ fontSize: 330, lineHeight: 0.95, letterSpacing: "-0.02em", transform: `scale(${pop})`, transformOrigin: "left center", marginTop: 10 }}>
        <span style={{ color: "rgba(239,228,212,.38)", fontSize: 190 }}>0.6x </span>{val}x
      </div>
      <div style={{ height: 2, background: "rgba(239,228,212,.2)", margin: "70px 0 50px", transform: `scaleX(${two})`, transformOrigin: "left" }} />
      <div style={{ opacity: two, transform: `translateY(${(1 - two) * 30}px)` }}>
        <div style={{ fontSize: 64, color: "rgba(239,228,212,.62)" }}>Bundle sets</div>
        <div style={{ fontSize: 250, lineHeight: 0.95, color: AMBER }}>+42%</div>
      </div>
    </AbsoluteFill>
  );
};

// 12. the end: the lockup on kraft, credit, then the camera falls into the ink edge (loops to frame 1) (770-870)
const End: React.FC = () => {
  const f = useCurrentFrame();
  const land = interpolate(f, [0, 4], [1.3, 1], { ...cl, easing: Easing.in(Easing.quad) });
  const sh = shakeAt(f, 4, 10);
  const credit = interpolate(f, [14, 24], [0, 1], { ...cl, easing: OUT });
  const dive = interpolate(f, [40, 60], [1, 5.2], { ...cl, easing: Easing.in(Easing.cubic) });
  const dx = interpolate(f, [40, 60], [0, -170], { ...cl, easing: Easing.in(Easing.cubic) });
  const dy = interpolate(f, [40, 60], [0, -150], { ...cl, easing: Easing.in(Easing.cubic) });
  return (
    <AbsoluteFill style={{ transform: `translate(${sh}px, ${sh * 0.6}px)` }}>
      <AbsoluteFill style={{ transform: `scale(${dive}) translate(${dx}px, ${dy}px)`, transformOrigin: "62% 44%" }}>
        <Kraft scale={1.06} />
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 34, flexDirection: "column" }}>
          <Mark size={470} style={{ transform: `scale(${land})`, opacity: interpolate(f, [2, 4], [0, 0.94], cl) }} />
          <div style={{ fontFamily: "PC Bonny", fontWeight: 700, fontSize: 168, color: BROWN, mixBlendMode: "multiply", opacity: interpolate(f, [6, 12], [0, 0.94], cl) }}>Postcards</div>
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 470, opacity: credit * interpolate(f, [36, 44], [1, 0], cl) }}>
        <div style={{ fontFamily: "PC Bonny", fontWeight: 700, fontSize: 52, color: "rgba(58,38,23,.8)" }}>Identity and store by Disojo Studio</div>
      </AbsoluteFill>
      <Light />
    </AbsoluteFill>
  );
};

const Grain: React.FC = () => {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{ pointerEvents: "none", opacity: 0.07, mixBlendMode: "overlay", backgroundImage: `url(${pc("grain.png")})`,
    backgroundSize: "512px 512px", backgroundPosition: `${(f * 137) % 512}px ${(f * 71) % 512}px` }} />;
};

export const Postcards: React.FC = () => {
  useBonny();
  return (
    <AbsoluteFill style={{ background: CREAM }}>
      <Sequence from={0} durationInFrames={C.stamp}><Open /></Sequence>
      <Sequence from={C.stamp} durationInFrames={C.bottle - C.stamp}><Stamp /></Sequence>
      <Sequence from={C.bottle} durationInFrames={C.turn - C.bottle}><Bottle /></Sequence>
      <Sequence from={C.turn} durationInFrames={C.m[0] - C.turn}><Turn /></Sequence>
      {PLACES.map((p, i) => (
        <Sequence key={p} from={C.m[i]} durationInFrames={(i < 3 ? C.m[i + 1] : C.run) - C.m[i]}><Match slug={p} tilt={[-3, 2.5, -2, 3][i]} i={i} /></Sequence>
      ))}
      <Sequence from={C.run} durationInFrames={C.sys - C.run}><StampRun /></Sequence>
      <Sequence from={C.sys} durationInFrames={C.store - C.sys}><System /></Sequence>
      <Sequence from={C.store} durationInFrames={C.box - C.store}><Store /></Sequence>
      <Sequence from={C.box} durationInFrames={C.result - C.box}><Box /></Sequence>
      <Sequence from={C.result} durationInFrames={C.end - C.result}><Result /></Sequence>
      <Sequence from={C.end} durationInFrames={C.total - C.end}><End /></Sequence>
      <Audio src={pc("music.mp3")} startFrom={MUSIC_FROM} volume={(f) => interpolate(f, [0, 6, C.total - 12, C.total], [0, 0.62, 0.62, 0.35], cl)} />
      <Audio src={pc("sfx.wav")} volume={0.9} />
      <Grain />
    </AbsoluteFill>
  );
};
