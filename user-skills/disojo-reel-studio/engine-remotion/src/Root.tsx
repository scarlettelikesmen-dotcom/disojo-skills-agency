import React, { useEffect, useState } from "react";
import { Composition, continueRender, delayRender, staticFile } from "remotion";
import { Reel } from "./Reel";
import spec from "./spec.json";

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

export const Root: React.FC = () => (
  <Composition id="Reel" component={Wrapped} width={1080} height={1920} fps={30} durationInFrames={Math.round(spec.duration * 30)} />
);
