import React from "react";
import { OffthreadVideo, Sequence, staticFile } from "remotion";
import { clamp, sp, SP } from "./theme";

// Chart recording + annotation overlays (levels, gaps, wall, road, trigger) drawn in sync with speech.
// Overlay coordinates are NORMALISED (0-1) on the ORIGINAL recording frame; `crop` zooms into a region of it.
// Times are absolute seconds on the reel's timeline (so overlays can be pinned to spoken words).
//   overlay: {k:"box",x0,y0,x1,y1,label?,hot?,at,until?} | {k:"line",y,x0?,x1?,label?,hot?,dash?,at,until?} | {k:"arrow",x0,y0,x1,y1,at,until?}
//            {k:"tag",x,y,label,hot?,at,until?} | {k:"tick",x,y,label?,at,until?}
const INK = "#0D0D0D", RED = "#E8321C", PAPER = "#F1EEE6";
const BS = '"Big Shoulders Display", Impact, sans-serif', MN = '"JetBrains Mono", monospace';

export const ChartLayer: React.FC<{ video: string; srcStart: number; t0: number; fps: number; frame: number; W: number; H: number; crop?: number[]; overlays: any[]; label?: string; aspect?: number }> = ({ video, srcStart, t0, fps, frame, W, H, crop = [0, 0, 1, 1], overlays, label, aspect = 16 / 9 }) => {
  const [cx0, cy0, cx1, cy1] = crop; const cw = cx1 - cx0, ch = cy1 - cy0;
  // video box so that the crop rectangle covers the W x H window (cover)
  const vidAspect = aspect;
  const scale = Math.max(W / (cw * 1000 * vidAspect), H / (ch * 1000)) * 1000;      // px per normalised-height unit
  const vw = scale * vidAspect, vh = scale;                                          // full-frame video size in px
  const ox = -cx0 * vw - (cw * vw - W) / 2, oy = -cy0 * vh - (ch * vh - H) / 2;
  const X = (x: number) => ox + x * vw, Y = (y: number) => oy + y * vh;
  const t = frame / fps;
  const vis = (o: any) => t >= o.at - 0.01 && (o.until == null || t < o.until);
  const col = (o: any) => (o.hot ? RED : INK);
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: PAPER }}>
      <Sequence from={Math.round(t0 * fps)}>
        <div style={{ position: "absolute", left: ox, top: oy, width: vw, height: vh }}>
          <OffthreadVideo src={staticFile(video)} startFrom={Math.round(srcStart * fps)} muted style={{ width: vw, height: vh }} />
        </div>
      </Sequence>
      <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
        {overlays.filter(vis).map((o, i) => {
          const k = clamp(sp(frame, fps, o.at, SP.heavy), 0, 1.02);
          if (o.k === "box") {
            const x0 = X(o.x0), y0 = Y(o.y0), w = (o.x1 - o.x0) * vw, h = (o.y1 - o.y0) * vh;
            return (<g key={i}><rect x={x0} y={y0} width={w * k} height={h} fill={col(o)} fillOpacity={o.hot ? 0.2 : 0.14} stroke={col(o)} strokeWidth={3} />{o.label && <foreignObject x={x0 + 8} y={y0 + 6} width={Math.max(120, w - 16)} height={60}><div style={{ display: "inline-block", background: col(o), color: o.hot ? "#fff" : PAPER, font: `900 38px/1 ${BS}`, padding: "3px 12px", textTransform: "uppercase", opacity: k }}>{o.label}</div></foreignObject>}</g>);
          }
          if (o.k === "line") {
            const x0 = X(o.x0 ?? 0), x1 = X(o.x1 ?? 1), y = Y(o.y);
            return (<g key={i}><line x1={x0} y1={y} x2={x0 + (x1 - x0) * k} y2={y} stroke={col(o)} strokeWidth={4} strokeDasharray={o.dash === false ? undefined : "16 10"} />{o.label && <foreignObject x={x0 + 10} y={y - 52} width={460} height={50}><div style={{ display: "inline-block", background: col(o), color: o.hot ? "#fff" : PAPER, font: `900 36px/1 ${BS}`, padding: "3px 12px", textTransform: "uppercase", opacity: k }}>{o.label}</div></foreignObject>}</g>);
          }
          if (o.k === "arrow") {
            const x0 = X(o.x0), y0 = Y(o.y0), x1 = X(o.x0 + (o.x1 - o.x0) * k), y1 = Y(o.y0 + (o.y1 - o.y0) * k);
            const a = Math.atan2(y1 - y0, x1 - x0);
            return (<g key={i}><line x1={x0} y1={y0} x2={x1} y2={y1} stroke={col(o)} strokeWidth={6} strokeLinecap="round" /><path d={`M ${x1} ${y1} l ${-26 * Math.cos(a - 0.45)} ${-26 * Math.sin(a - 0.45)} M ${x1} ${y1} l ${-26 * Math.cos(a + 0.45)} ${-26 * Math.sin(a + 0.45)}`} stroke={col(o)} strokeWidth={6} strokeLinecap="round" fill="none" /></g>);
          }
          if (o.k === "tick") {
            const x = X(o.x), y = Y(o.y);
            return (<g key={i} transform={`translate(${x} ${y}) scale(${k})`}><circle r={34} fill={PAPER} stroke={col(o)} strokeWidth={5} /><path d="M-15 2 L-4 14 L17 -12" fill="none" stroke={col(o)} strokeWidth={7} strokeLinecap="square" />{o.label && <foreignObject x={46} y={-26} width={420} height={52}><div style={{ display: "inline-block", background: col(o), color: o.hot ? "#fff" : PAPER, font: `900 38px/1 ${BS}`, padding: "3px 12px", textTransform: "uppercase" }}>{o.label}</div></foreignObject>}</g>);
          }
          const x = X(o.x), y = Y(o.y);   // tag
          return (<g key={i} transform={`translate(${x} ${y}) scale(${k})`}><foreignObject x={0} y={-30} width={520} height={60}><div style={{ display: "inline-block", background: col(o), color: o.hot ? "#fff" : PAPER, font: `900 46px/1 ${BS}`, padding: "4px 16px", textTransform: "uppercase", transform: `rotate(${o.hot ? -2 : 1}deg)` }}>{o.label}</div></foreignObject></g>);
        })}
      </svg>
      {label && <div style={{ position: "absolute", left: 14, bottom: 12, font: `600 18px ${MN}`, letterSpacing: "0.1em", background: INK, color: PAPER, padding: "5px 10px" }}>{label}</div>}
    </div>
  );
};
