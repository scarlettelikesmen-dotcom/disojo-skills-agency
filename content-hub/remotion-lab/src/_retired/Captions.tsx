import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { CREAM, INK, MONO, SANS, SP, clamp, sp } from "./theme";

export const Captions: React.FC<{ chunks: any[]; p: number }> = ({ chunks, p }) => {
  const frame = useCurrentFrame(); const { fps } = useVideoConfig(); const t = frame / fps;
  const cy = 1340 - 376 * clamp(p);
  return (
    <>
      {chunks.map((c, i) => {
        if (t < c.t0 - 0.02 || t > c.t1 + 0.05) return null;
        const dur = c.t1 - c.t0;
        const inn = sp(frame, fps, c.t0, SP.pop);
        const op = clamp((t - c.t0) / 0.18) * clamp((c.t1 - t) / 0.13);
        return (
          <div key={i} style={{ position: "absolute", left: 60, right: 60, top: cy - 130, height: 260, display: "flex", justifyContent: "center", alignItems: "center", opacity: op }}>
            <div style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", maxWidth: "100%", width: "fit-content",
              transform: `translateY(${(1 - inn) * 14}px) scale(${0.92 + 0.08 * inn})`,
              background: "rgba(19,19,17,.78)", border: "1px solid rgba(230,221,214,.24)", borderRadius: 38, padding: "8px 30px 12px",
              boxShadow: "0 10px 36px rgba(0,0,0,.35)", fontFamily: SANS, fontWeight: 800, fontSize: 96, lineHeight: 1.22, letterSpacing: "-0.04em", color: CREAM,
            }}>
              {c.words.map((w: any, k: number) => {
                const m = w.emph ? clamp(sp(frame, fps, w.s - 0.1, SP.soft), 0, 1.02) : 0;
                return (
                  <span key={k} style={{ position: "relative", display: "inline-block", padding: "0 .15em", whiteSpace: "nowrap", color: CREAM, isolation: "isolate" }}>
                    {w.emph && <i style={{ position: "absolute", inset: ".1em -.04em 0 -.04em", background: CREAM, zIndex: -1, transformOrigin: "left center", transform: `scaleX(${m}) rotate(-1.4deg)`, borderRadius: ".1em .3em .12em .26em / .22em .12em .26em .1em" }} />}
                    {w.w}
                    {w.emph && <span style={{ position: "absolute", left: 0, top: 0, padding: "0 .15em", color: INK, clipPath: `inset(0 ${Math.max(0, (1 - m)) * 100}% 0 0)` }}>{w.w}</span>}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
