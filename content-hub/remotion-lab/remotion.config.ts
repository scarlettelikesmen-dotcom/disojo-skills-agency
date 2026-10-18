import { Config } from "@remotion/cli/config";
Config.setBrowserExecutable("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
Config.setVideoImageFormat("jpeg");
Config.setCodec("h264");
Config.setCrf(17);
Config.setPixelFormat("yuv420p");
Config.setColorSpace("bt709");
Config.setChromiumOpenGlRenderer("angle");
Config.setConcurrency(2);
