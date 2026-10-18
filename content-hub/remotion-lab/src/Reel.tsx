import React from "react";
import { AbsoluteFill, Audio, Img, OffthreadVideo, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import spec from "./spec.json";
import { Captions } from "./Captions";
import { LowerThird, Panel } from "./Panels";
import { clamp, sp, SP } from "./theme";

export const Reel: React.FC = () => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  let p = 0;
  for (const pn of spec.panels as any[]) {
    const enter = pn.type === "hook" ? 1 : sp(frame, fps, pn.t0, SP.heavy);
    const exit = sp(frame, fps, pn.t1, SP.heavy);
    p += enter - exit;
  }
  p = clamp(p, 0, 1);
  const segs = spec.segments as number[][];
  const si = Math.max(0, segs.findIndex(([a, b]) => t >= a && t < b));
  const [a0, b0] = segs[si] || [0, 1]; const u = clamp((t - a0) / (b0 - a0));
  const [z0, z1] = si % 2 === 1 ? [1.06, 1.09] : [1.0, 1.03];
  let zoom = z0 + (z1 - z0) * u;
  const emph: number[] = []; (spec.captions as any[]).forEach((c) => c.words.forEach((w: any) => w.emph && emph.push(w.s)));
  // gentle, smooth emphasis swell (soft attack, slow release): no instant jumps, no blur, nothing stacked on the jump cuts
  const swell = (e: number, amp: number) => (t < e ? 0 : amp * 1.9 * (1 - Math.exp(-(t - e) / 0.07)) * Math.exp(-(t - e) / 0.35));
  for (const e of emph) zoom += swell(e, 0.012);
  const blur = 0;
  const top = 880 * p, height = 1920 - 880 * p;
  return (
    <AbsoluteFill style={{ background: "#000" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top, height, overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: -140 * p, width: 1080, height: 1920, transform: `scale(${zoom})`, transformOrigin: "50% 50%", filter: blur > 0.2 ? `blur(${blur}px)` : undefined }}>
          <OffthreadVideo src={staticFile("base.mp4")} style={{ width: 1080, height: 1920 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 46%, transparent 58%, rgba(0,0,0,.38) 100%)" }} />
        </div>
      </div>
      {(spec.panels as any[]).map((pn, i) => {
        const enter = pn.type === "hook" ? 1 : sp(frame, fps, pn.t0, SP.heavy);
        const exit = sp(frame, fps, pn.t1, SP.heavy);
        if (t < pn.t0 - 0.02 || t > pn.t1 + 0.9) return null;
        const y = -880 * (1 - clamp(enter - exit));
        return (
          <div key={i} style={{ position: "absolute", left: 0, top: 0, width: 1080, height: 880, transform: `translateY(${y}px)` }}>
            <Panel p={pn} />
          </div>
        );
      })}
      <Captions chunks={spec.captions as any[]} p={p} />
      <LowerThird s={spec.lowerThird} />
      <Img src={staticFile("grain.png")} style={{ position: "absolute", inset: 0, width: 1080, height: 1920, objectFit: "cover", opacity: 0.05, mixBlendMode: "overlay" }} />
      <Audio src={staticFile("sfx.wav")} />
    </AbsoluteFill>
  );
};
