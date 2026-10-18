import React, { useEffect, useState } from "react";
import { Composition, continueRender, delayRender, staticFile } from "remotion";
import { Reel8 } from "./Reel8";
import spec8 from "./spec8.json";

const useFonts = () => {
  const [h] = useState(() => delayRender("fonts"));
  useEffect(() => {
    const faces = [
      new FontFace("Host Grotesk", `url(${staticFile("fonts/HostGrotesk.ttf")})`, { weight: "300 800" }),
      new FontFace("Host Grotesk", `url(${staticFile("fonts/HostGrotesk-Italic.ttf")})`, { weight: "300 800", style: "italic" }),
    ];
    Promise.all(faces.map((f) => f.load())).then((l) => { l.forEach((f) => (document as any).fonts.add(f)); continueRender(h); });
  }, [h]);
};
const Wrapped: React.FC = () => { useFonts(); return <Reel8 />; };

export const Root: React.FC = () => (
  <Composition id="Reel8" component={Wrapped} width={1080} height={1920} fps={30} durationInFrames={Math.round(spec8.duration * 30)} />
);
