import React, { useEffect, useState } from "react";
import { Composition, continueRender, delayRender, staticFile } from "remotion";
import { Reel8 } from "./Reel8";
import { TradeReel } from "./TradeReel";
import { TradeLite } from "./TradeLite";
import { S } from "./specStore";

// One engine, many jobs: public/jobs/<job>/{spec.json, base.mp4, sfx.wav}. Render with --props='{"job":"<name>"}'.
const F = (family: string, file: string, weight: string, style?: string) => new FontFace(family, `url(${staticFile("fonts/" + file)})`, { weight, ...(style ? { style } : {}) });
const useFonts = () => {
  const [h] = useState(() => delayRender("fonts"));
  useEffect(() => {
    Promise.all([
      F("Host Grotesk", "HostGrotesk.ttf", "300 800"), F("Host Grotesk", "HostGrotesk-Italic.ttf", "300 800", "italic"),
      F("JetBrains Mono", "JetBrainsMono.ttf", "100 800"),
      F("Big Shoulders Display", "BigShoulders.woff2", "100 900"), F("Newsreader", "Newsreader.woff2", "200 800"), F("Newsreader", "Newsreader-Italic.woff2", "200 800", "italic"),
    ].map((f) => f.load())).then((l) => { l.forEach((f) => (document as any).fonts.add(f)); continueRender(h); });
  }, [h]);
};
const wrap = (C: React.FC): React.FC<any> => (props) => { useFonts(); S.spec = props.spec; S.job = props.job; return <C />; };
const meta = async ({ props }: { props: any }) => {
  const spec = await (await fetch(staticFile(`jobs/${props.job}/spec.json`))).json();
  return { durationInFrames: Math.max(30, Math.round(spec.duration * 30)), props: { ...props, spec } };
};
const common = { width: 1080, height: 1920, fps: 30, durationInFrames: 900, calculateMetadata: meta as any };

export const Root: React.FC = () => (
  <>
    <Composition id="Reel8" component={wrap(Reel8)} defaultProps={{ job: "r2198", spec: null }} {...common} />
    <Composition id="Trade" component={wrap(TradeReel)} defaultProps={{ job: "t2257", spec: null }} {...common} />
    <Composition id="TradeLite" component={wrap(TradeLite)} defaultProps={{ job: "t2257", spec: null }} {...common} />
  </>
);
