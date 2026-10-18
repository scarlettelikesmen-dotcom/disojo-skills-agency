import React, { useEffect, useState } from "react";
import { Composition, continueRender, delayRender, staticFile } from "remotion";
import { Reel } from "./Reel";
import spec from "./spec.json";
import { Reel8 } from "./Reel8";
import { TradeReel } from "./TradeReel";
import { TradeLite } from "./TradeLite";
import specT from "./spec-trade.json";
import spec8 from "./spec8.json";

const useFonts = () => {
  const [h] = useState(() => delayRender("fonts"));
  useEffect(() => {
    const faces = [
      new FontFace("Host Grotesk", `url(${staticFile("fonts/HostGrotesk.ttf")})`, { weight: "300 800" }),
      new FontFace("Host Grotesk", `url(${staticFile("fonts/HostGrotesk-Italic.ttf")})`, { weight: "300 800", style: "italic" }),
      new FontFace("JetBrains Mono", `url(${staticFile("fonts/JetBrainsMono.ttf")})`, { weight: "100 800" }),
    ];
    Promise.all(faces.map((f) => f.load())).then((l) => { l.forEach((f) => (document as any).fonts.add(f)); continueRender(h); });
  }, [h]);
};
const Wrapped: React.FC = () => { useFonts(); return <Reel />; };
const useTradeFonts = () => {
  const [h] = useState(() => delayRender("tfonts"));
  useEffect(() => {
    const f = [new FontFace("Big Shoulders Display", `url(${staticFile("fonts/BigShoulders.woff2")})`, { weight: "100 900" }), new FontFace("Newsreader", `url(${staticFile("fonts/Newsreader.woff2")})`, { weight: "200 800" }), new FontFace("Newsreader", `url(${staticFile("fonts/Newsreader-Italic.woff2")})`, { weight: "200 800", style: "italic" }), new FontFace("JetBrains Mono", `url(${staticFile("fonts/JBMono.woff2")})`, { weight: "100 800" })];
    Promise.all(f.map((x) => x.load())).then((l) => { l.forEach((x) => (document as any).fonts.add(x)); continueRender(h); });
  }, [h]);
};
const WrappedT: React.FC = () => { useTradeFonts(); return <TradeReel />; };
const WrappedL: React.FC = () => { useTradeFonts(); return <TradeLite />; };
const Wrapped8: React.FC = () => { useFonts(); return <Reel8 />; };

export const Root: React.FC = () => (
  <>
  <Composition id="TradeLite" component={WrappedL} width={1080} height={1920} fps={30} durationInFrames={Math.round(specT.duration * 30)} />
  <Composition id="Trade" component={WrappedT} width={1080} height={1920} fps={30} durationInFrames={Math.round(specT.duration * 30)} />
  <Composition id="Reel8" component={Wrapped8} width={1080} height={1920} fps={30} durationInFrames={Math.round(spec8.duration * 30)} />
  <Composition id="Reel" component={Wrapped} width={1080} height={1920} fps={30} durationInFrames={Math.round(spec.duration * 30)} />
  </>
);
