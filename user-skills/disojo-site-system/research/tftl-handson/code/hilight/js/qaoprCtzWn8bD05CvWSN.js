/* https://storage.googleapis.com/unicornstudio-production/embeds/qaoprCtzWn8bD05CvWSN?v=1795410991470 */
{
  "layers": [{
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "gradient",
    "usesPingPong": false,
    "texture": false,
    "animating": false,
    "mouseMomentum": 0,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform vec2 uMousePos;const float PI = 3.14159265359;vec2 rotate(vec2 coord, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(\ncoord.x * c - coord.y * s,\ncoord.x * s + coord.y * c\n);\n}out vec4 fragColor;vec3 getBgColor(vec2 uv) {return vec3(0.06666666666666667, 0.058823529411764705, 0.06274509803921569);\n}void main() {vec2 uv = vTextureCoord;\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nuv -= pos;\nuv /= max(0.5000*2., 1e-5);\nuv = rotate(uv, (0.0000 - 0.5) * 2. * PI);\nvec4 color = vec4(getBgColor(uv), 1.0) * 1.0000;\nfragColor = color;\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = aTextureCoord;\n}"],
    "speed": 0.25,
    "trackMouse": 0,
    "trackAxes": "xy",
    "data": {
      "downSample": 0.5,
      "depth": false,
      "uniforms": {},
      "isBackground": true
    },
    "id": "f0e3e07a-b6b2-45e0-92f2-48d2d1a790d1",
    "publicId": "gradient"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "trackMouse": -0.03,
    "anchorPoint": 8,
    "mouseMomentum": 1,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 80,
    "widthMode": 1,
    "height": 79,
    "heightMode": 1,
    "left": 0.5,
    "top": 0.5003036516305409,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;\nuniform sampler2D uBgTexture;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.5, 0.5);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(1, 1, 1);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 80.0000;\nfloat absHeight = 79.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.5000, 0.5003) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 getCompositeOutput(vec2 uv) {\nvec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * -0.0300;uv -= pos;fragColor = getCompositeOutput(uv);\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "uniforms": {
        "artboardResolution": {
          "name": "uArtboardResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1440,
            "_y": 900
          }
        },
        "aspectRatio": {
          "name": "uAspectRatio",
          "type": "1f",
          "value": 1.6
        }
      },
      "elementOpacity": 1
    },
    "id": "4473dfb8-9468-45f7-9034-8418390d1a43",
    "publicId": "shape"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "trackMouse": -0.03,
    "anchorPoint": 0,
    "mouseMomentum": 1,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 80,
    "widthMode": 1,
    "height": 79,
    "heightMode": 1,
    "left": 0.7291666666666666,
    "top": 0.6641925405194298,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;\nuniform sampler2D uBgTexture;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.0, 0.0);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(1, 1, 1);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 80.0000;\nfloat absHeight = 79.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.7292, 0.6642) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 getCompositeOutput(vec2 uv) {\nvec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * -0.0300;uv -= pos;fragColor = getCompositeOutput(uv);\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "uniforms": {
        "artboardResolution": {
          "name": "uArtboardResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1440,
            "_y": 900
          }
        },
        "aspectRatio": {
          "name": "uAspectRatio",
          "type": "1f",
          "value": 1.6
        }
      },
      "elementOpacity": 1
    },
    "id": "70bb2108-852a-4fe7-99cd-4a173643d0cb",
    "publicId": "shape1"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "trackMouse": -0.03,
    "anchorPoint": 0,
    "mouseMomentum": 1,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 80,
    "widthMode": 1,
    "height": 79,
    "heightMode": 1,
    "left": 0.8548611111111111,
    "top": 0.35448154657293507,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;\nuniform sampler2D uBgTexture;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.0, 0.0);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(1, 1, 1);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 80.0000;\nfloat absHeight = 79.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.8549, 0.3545) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 getCompositeOutput(vec2 uv) {\nvec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * -0.0300;uv -= pos;fragColor = getCompositeOutput(uv);\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "uniforms": {
        "artboardResolution": {
          "name": "uArtboardResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1440,
            "_y": 900
          }
        },
        "aspectRatio": {
          "name": "uAspectRatio",
          "type": "1f",
          "value": 1.6
        }
      },
      "elementOpacity": 1
    },
    "id": "02d8b7c1-f71d-43e9-a42c-8286bc4a4843",
    "publicId": "shape2"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "trackMouse": -0.03,
    "anchorPoint": 0,
    "mouseMomentum": 1,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 80,
    "widthMode": 1,
    "height": 79,
    "heightMode": 1,
    "left": 0.7263888888888889,
    "top": 0.15483304042179263,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;\nuniform sampler2D uBgTexture;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.0, 0.0);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(1, 1, 1);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 80.0000;\nfloat absHeight = 79.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.7264, 0.1548) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 getCompositeOutput(vec2 uv) {\nvec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * -0.0300;uv -= pos;fragColor = getCompositeOutput(uv);\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "uniforms": {
        "artboardResolution": {
          "name": "uArtboardResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1440,
            "_y": 900
          }
        },
        "aspectRatio": {
          "name": "uAspectRatio",
          "type": "1f",
          "value": 1.6
        }
      },
      "elementOpacity": 1
    },
    "id": "18fbf7d4-3e15-44f6-992b-3a7ac76f8826",
    "publicId": "shape3"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "trackMouse": -0.03,
    "anchorPoint": 0,
    "mouseMomentum": 1,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 80,
    "widthMode": 1,
    "height": 79,
    "heightMode": 1,
    "left": 0.15486111111111106,
    "top": 0.15419254051942982,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;\nuniform sampler2D uBgTexture;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.0, 0.0);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(1, 1, 1);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 80.0000;\nfloat absHeight = 79.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.1549, 0.1542) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 getCompositeOutput(vec2 uv) {\nvec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * -0.0300;uv -= pos;fragColor = getCompositeOutput(uv);\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "uniforms": {
        "artboardResolution": {
          "name": "uArtboardResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1440,
            "_y": 900
          }
        },
        "aspectRatio": {
          "name": "uAspectRatio",
          "type": "1f",
          "value": 1.6
        }
      },
      "elementOpacity": 1
    },
    "id": "07adfdb5-6442-4b71-bd32-bf368b9c5184",
    "publicId": "shape4"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "trackMouse": -0.03,
    "anchorPoint": 0,
    "mouseMomentum": 1,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 80,
    "widthMode": 1,
    "height": 79,
    "heightMode": 1,
    "left": 0.21944444444444444,
    "top": 0.35419254051942983,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;\nuniform sampler2D uBgTexture;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.0, 0.0);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(1, 1, 1);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 80.0000;\nfloat absHeight = 79.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.2194, 0.3542) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 getCompositeOutput(vec2 uv) {\nvec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * -0.0300;uv -= pos;fragColor = getCompositeOutput(uv);\n}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "uniforms": {
        "artboardResolution": {
          "name": "uArtboardResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1440,
            "_y": 900
          }
        },
        "aspectRatio": {
          "name": "uAspectRatio",
          "type": "1f",
          "value": 1.6
        }
      },
      "elementOpacity": 1
    },
    "id": "186fb02b-7e17-4f6f-8044-5cad1a27c2b4",
    "publicId": "shape5"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "bloomFast",
    "usesPingPong": false,
    "texture": false,
    "animating": false,
    "mouseMomentum": 0,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;\nout vec4 fragColor;const float PI = 3.14159265359;\nconst float TAU = 6.28318530718;float luma(vec4 color) {\nreturn dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}float getGaussianWeight(int index) {\nswitch(index) {\ncase 0: return 1.000000;\ncase 1: return 0.687719;\ncase 2: return 0.497017;\ncase 3: return 0.369784;\ncase 4: return 0.279890;\ncase 5: return 0.213571;\ncase 6: return 0.163045;\ncase 7: return 0.123612;\ncase 8: return 0.092212;\ncase 9: return 0.066840;\ncase 10: return 0.046045;\ncase 11: return 0.000000;\ndefault: return 0.0;\n}\n}vec4 thresholdPass(vec4 color) {\ncolor.rgb = pow(color.rgb, vec3(1.0/2.2));\ncolor.rgb = 1.2 * (color.rgb - 0.5) + 0.5;\nvec4 bloom = color * smoothstep(1.0000 - 0.1, 1.0000, luma(color));\nreturn vec4(bloom.rgb, color.a);\n}vec4 blur(vec2 uv, bool vertical, float radius, bool diamond, bool threshold) {\nvec4 color = vec4(0.0);\nfloat total_weight = 0.0;\nfloat aspectRatio = uResolution.x/uResolution.y;vec2 dir;\nif (diamond) {\ndir = vertical ? vec2(1, 1) : vec2(1, -1);\n} else {\ndir = vertical ? vec2(0, 1) : vec2(1, 0);\n}\ndir.x /= aspectRatio;\nvec4 center = texture(uTexture, uv);\nif (threshold) center = thresholdPass(center);\nfloat center_weight = getGaussianWeight(0);\ncolor += center * center_weight;\ntotal_weight += center_weight;radius *= (0.2 + 0.0000) * 1.8;\nfor (int i = 1; i <= 12; i++) {\nfloat weight = getGaussianWeight(i);\nfloat step = float(i)/12.;\nfloat offset = mix(0.015, 0.025, radius) * step;\nvec4 sample1 = texture(uTexture, uv + offset * dir);\nvec4 sample2 = texture(uTexture, uv - offset * dir);\nif (threshold) {\nsample1 = thresholdPass(sample1);\nsample2 = thresholdPass(sample2);\n}\ncolor += (sample1 + sample2) * weight;\ntotal_weight += 2.0 * weight;\n}return color / total_weight;\n}vec4 blurPass(vec2 uv, bool vertical, float radius, bool diamond, bool threshold) {\nreturn blur(uv, vertical, radius, diamond, threshold);\n}vec4 getColor(vec4 color) {\nreturn blurPass(vTextureCoord, false, 7.5, false, true);\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 color = texture(uTexture, uv);color = getColor(color);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;\nout vec4 fragColor;const float PI = 3.14159265359;\nconst float TAU = 6.28318530718;float luma(vec4 color) {\nreturn dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}float getGaussianWeight(int index) {\nswitch(index) {\ncase 0: return 1.000000;\ncase 1: return 0.687719;\ncase 2: return 0.497017;\ncase 3: return 0.369784;\ncase 4: return 0.279890;\ncase 5: return 0.213571;\ncase 6: return 0.163045;\ncase 7: return 0.123612;\ncase 8: return 0.092212;\ncase 9: return 0.066840;\ncase 10: return 0.046045;\ncase 11: return 0.000000;\ndefault: return 0.0;\n}\n}vec4 thresholdPass(vec4 color) {\ncolor.rgb = pow(color.rgb, vec3(1.0/2.2));\ncolor.rgb = 1.2 * (color.rgb - 0.5) + 0.5;\nvec4 bloom = color * smoothstep(1.0000 - 0.1, 1.0000, luma(color));\nreturn vec4(bloom.rgb, color.a);\n}vec4 blur(vec2 uv, bool vertical, float radius, bool diamond, bool threshold) {\nvec4 color = vec4(0.0);\nfloat total_weight = 0.0;\nfloat aspectRatio = uResolution.x/uResolution.y;vec2 dir;\nif (diamond) {\ndir = vertical ? vec2(1, 1) : vec2(1, -1);\n} else {\ndir = vertical ? vec2(0, 1) : vec2(1, 0);\n}\ndir.x /= aspectRatio;\nvec4 center = texture(uTexture, uv);\nif (threshold) center = thresholdPass(center);\nfloat center_weight = getGaussianWeight(0);\ncolor += center * center_weight;\ntotal_weight += center_weight;radius *= (0.2 + 0.0000) * 1.8;\nfor (int i = 1; i <= 12; i++) {\nfloat weight = getGaussianWeight(i);\nfloat step = float(i)/12.;\nfloat offset = mix(0.015, 0.025, radius) * step;\nvec4 sample1 = texture(uTexture, uv + offset * dir);\nvec4 sample2 = texture(uTexture, uv - offset * dir);\nif (threshold) {\nsample1 = thresholdPass(sample1);\nsample2 = thresholdPass(sample2);\n}\ncolor += (sample1 + sample2) * weight;\ntotal_weight += 2.0 * weight;\n}return color / total_weight;\n}vec4 blurPass(vec2 uv, bool vertical, float radius, bool diamond, bool threshold) {\nreturn blur(uv, vertical, radius, diamond, threshold);\n}vec4 getColor(vec4 color) {\nreturn blurPass(vTextureCoord, true, 7.5, false, false);\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 color = texture(uTexture, uv);color = getColor(color);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform sampler2D uBgTexture;\nout vec4 fragColor;const float PI = 3.14159265359;\nconst float TAU = 6.28318530718;float interleavedGradientNoise(vec2 st) {\nreturn fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));\n}vec4 finalPass(vec4 bloomColor) {\nfloat nx = interleavedGradientNoise(gl_FragCoord.xy) - 0.5;\nvec2 jitter = vec2(nx) * 0.02 * (0.0000 + 0.1);\nbloomColor = texture(uTexture, vTextureCoord + jitter);\nbloomColor.rgb *= vec3(1, 0.807843137254902, 0.7176470588235294);\nvec4 sceneColor = texture(uBgTexture, vTextureCoord);\nvec4 finalColor = mix(sceneColor, sceneColor + bloomColor, 0.2500 * 3.5);\nreturn finalColor;\n}vec4 getColor(vec4 color) {\nreturn finalPass(color);\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 color = texture(uTexture, uv);color = getColor(color);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "data": {
      "downSample": 0.5,
      "depth": false,
      "uniforms": {},
      "isBackground": false,
      "passes": [{
        "prop": "pass",
        "value": 1,
        "downSample": 0.5,
        "passDescription": "Blur the bloom buffer vertically."
      }, {
        "prop": "pass",
        "value": 2,
        "downSample": 1,
        "includeBg": true,
        "passDescription": "Composite the tinted bloom back over the scene."
      }]
    },
    "id": "1709b3b9-0a21-403d-b6ef-17f3ba92bcfb",
    "publicId": "fast_bloom"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "godrays",
    "usesPingPong": false,
    "texture": false,
    "animating": false,
    "mouseMomentum": 1,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uMousePos;\nuniform vec2 uResolution;const float MAX_ITERATIONS = 32.0;float interleavedGradientNoise(vec2 st) {\nreturn fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));\n}vec4 godRays(vec2 st) {\nvec3 color = vec3(0);\nfloat decay = mix(0.89, 0.965, 1.0400);\nvec2 pos = vec2(0.5, 0.5) - mix(vec2(0), (vec2(1. - uMousePos.x, 1. - uMousePos.y) - 0.5), 0.3600);\nfloat weight = 1.0;\nvec2 stepDir = (pos - st) / MAX_ITERATIONS * (0.25 + min(1., 1.0400)) * 0.75;\nfloat noise = interleavedGradientNoise(st * uResolution);\nvec2 sampleUv = st + stepDir * noise;\nvec2 perpDir = vec2(-stepDir.y, stepDir.x);\nfloat intensity = 2.8 * 1.8200;for (float i = 0.0; i < MAX_ITERATIONS; i++) {\nfloat theta = i/MAX_ITERATIONS;\nsampleUv += stepDir + (perpDir * theta * sin((noise * 0.25) * (1.0 + theta) * 50.0)) * 1.0000 * 0.25;\nvec4 samp = texture(uTexture, sampleUv);\nfloat lum = dot(samp.rgb, vec3(0.299, 0.587, 0.114));\nfloat thresh = smoothstep(1.0000 - 0.1, 1.0000, lum);\ncolor += samp.rgb * thresh * weight * intensity;\nweight *= decay;\nif(weight < 0.05) break;\n}\nreturn vec4(color / MAX_ITERATIONS, 1.0);\n}out vec4 fragColor;void main() {\nvec2 uv = vTextureCoord;\nvec4 bg = texture(uTexture, uv);if(1.8200 <= 0.01) {\nvec4 color = bg;\nfragColor = color;return;\n}vec4 rays = godRays(uv);\nrays.rgb *= vec3(0.7333333333333333, 0.38823529411764707, 0.12549019607843137);\nvec4 color = vec4(bg.rgb + rays.rgb, bg.a + rays.r);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "trackMouse": 0.36,
    "trackAxes": "xy",
    "data": {
      "depth": false,
      "uniforms": {},
      "isBackground": false
    },
    "id": "41b50c0b-8fbf-4c66-a215-1041b2b6db24",
    "publicId": "god_rays"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "fastFog",
    "usesPingPong": false,
    "texture": false,
    "animating": true,
    "mouseMomentum": 0,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform float uTime;\nuniform vec2 uMousePos;\nuniform vec2 uResolution;\nfloat ease (int easingFunc, float t) {\nreturn t;\n}out vec4 fragColor;mat2 rot(float a) {\nreturn mat2(cos(a),-sin(a),sin(a),cos(a));\n}const float PHI = 1.618033988;\nconst float PI = 3.14159265359;float interleavedGradientNoise(vec2 st) {\nreturn fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));\n}float ignGaussian4(vec2 st) {\nfloat n0 = interleavedGradientNoise(st + vec2(0.5, 0.5));\nfloat n1 = interleavedGradientNoise(st + vec2(5.2, 1.3));\nfloat n2 = interleavedGradientNoise(st + vec2(1.7, 9.2));\nfloat n3 = interleavedGradientNoise(st + vec2(8.3, 2.8));\nreturn (n0 + n1 + n2 + n3 - PHI) * PHI;\n}vec2 rot90(vec2 v) {\nreturn vec2(v.y, -v.x);\n}float dot_noise(vec3 p) {\nconst mat3 GOLD = mat3(\n-0.571464913, +0.814921382, +0.096597072,\n-0.278044873, -0.303026659, +0.911518454,\n+0.772087367, +0.494042493, +0.399753815);\nreturn dot(cos(GOLD * p), sin(PHI * p * GOLD));\n}float cheap_fbm(vec3 p) {\nmat2 rota = mat2(0.6, -0.8, 0.8, 0.6);\nfloat nos = 0.;\nfloat amp = 1. + 0.5300 * 10.;\nfloat xp = sqrt(2.);\nfloat halfxp = xp * 0.5;\nfor(int i = 0; i < 6; i++) {\nfloat theta = uTime * 0.05 + float(i);\np.xy *= xp;\np.xy += sin(rota * p.xy * xp + theta) * 0.2;\nfloat nz = dot_noise(vec3(p.xy * rota, p.z + theta));\nnos += nz * amp * rota[0][0];\namp *= halfxp;\nrota *= mat2(0.6, -0.8, 0.8, 0.6);\n}\nnos *= 1./float(6);\nfloat density = -3. + 0.3100 * 6.;\nreturn smoothstep(-3., 3., nos + density);\n}float fnoise(vec2 uv) {\nfloat aspectRatio = uResolution.x/uResolution.y;\nvec2 aspect = vec2(aspectRatio, 1);\nfloat multiplier = 10.0 * (2.0000 / ((aspectRatio + 1.) / 2.));vec2 st = ((uv * aspect - vec2(0.5, 0.4986111111111111) * aspect)) * multiplier * rot((0.0000) * 2. * PI);\nst *= vec2((1.0 + 0.0000 * 2.0), 1.0);vec2 mPos = vec2(0.5, 0.4986111111111111) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nvec2 pos = mix(vec2(0.5, 0.4986111111111111), mPos, floor(1.0000));\nfloat dist = ease(0, max(0.,1.-distance(uv * aspect, mPos * aspect) * 4. * (1. - 1.0000)));if (0 == 1) {\ndist = max(0., (0.5 - dist));\n}\nfloat time = uTime * 0.05;\nvec2 drift = vec2(time * 0.2) * 2.0 * 0.5000 * rot(0.125 * 2. * PI);\nfloat fbm = cheap_fbm(vec3(st - drift, time)) * dist;\nfbm = fbm / (1. + fbm);\nreturn fbm;\n}vec4 fastFogBlur(vec2 uv) {\nfloat fogNoise = fnoise(uv);\nvec2 px = gl_FragCoord.xy;\nvec2 texel = 1.0 / uResolution;\nfloat aspectRatio = uResolution.x / uResolution.y;\nvec2 aspect = vec2(aspectRatio, 1.0);\nfloat blurStrength = 1.0000;\nfloat baseRadius = (blurStrength * 100.0) * texel.y;if (baseRadius <= texel.y) {\nreturn vec4(texture(uTexture, uv).rgb, fogNoise);\n}float noise = interleavedGradientNoise(px * 1.212);\nfloat angle = noise * 2.0 * PI;\nvec2 screenAxis = vec2(cos(angle), sin(angle));\nvec2 screenAxisPerp = rot90(screenAxis);\nvec2 axis = screenAxis / aspect;\nvec2 axisPerp = screenAxisPerp / aspect;\nvec2 diag = (axis + axisPerp) * 0.7071;\nvec2 diagPerp = (axisPerp - axis) * 0.7071;float jitter = ignGaussian4(px);\njitter = clamp(jitter, -PHI, PHI);\njitter *= 0.46;float radius = baseRadius * (1.0 + jitter) * fogNoise;\nradius = max(radius, 0.0);if (radius <= texel.y * 0.5) {\nreturn vec4(texture(uTexture, uv).rgb, clamp(fogNoise, 0.0, 1.0));\n}float innerR = radius * 0.5;\nvec4 color = vec4(0.0);\ncolor += texture(uTexture, uv + axis * radius);\ncolor += texture(uTexture, uv - axis * radius);\ncolor += texture(uTexture, uv + axisPerp * radius);\ncolor += texture(uTexture, uv - axisPerp * radius);\ncolor += texture(uTexture, uv + diag * innerR);\ncolor += texture(uTexture, uv - diag * innerR);\ncolor += texture(uTexture, uv + diagPerp * innerR);\ncolor += texture(uTexture, uv - diagPerp * innerR);\nreturn vec4((color * 0.125).rgb, clamp(fogNoise, 0.0, 1.0));\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 color = vec4(0);color = fastFogBlur(uv);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform vec2 uResolution;out vec4 fragColor;const float PHI = 1.618033988;\nconst float PI = 3.14159265359;float interleavedGradientNoise(vec2 st) {\nreturn fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));\n}vec2 rot90(vec2 v) {\nreturn vec2(v.y, -v.x);\n}vec4 gaussianBlur(vec2 uv) {\nfloat fogNoise = clamp(texture(uTexture, uv).a, 0.0, 1.0);\nfloat radius = 1.0000 * 60.0 * fogNoise;\nradius = max(radius, 0.000);\nfloat jitter = interleavedGradientNoise(gl_FragCoord.xy);\nvec2 texel = (radius / uResolution);\nvec2 at = texel * vec2(1.0, uResolution.x / uResolution.y);vec4 color = vec4(0.0);color += texture(uTexture, uv + vec2(at.x, 0.0)) * 0.0719;\ncolor += texture(uTexture, uv - vec2(at.x, 0.0)) * 0.0719;\ncolor += texture(uTexture, uv + vec2(0.0, at.y)) * 0.0719;\ncolor += texture(uTexture, uv - vec2(0.0, at.y)) * 0.0719;\ncolor += texture(uTexture, uv + at) * 0.0635;\ncolor += texture(uTexture, uv - at) * 0.0635;\ncolor += texture(uTexture, uv + vec2(at.x, -at.y)) * 0.0635;\ncolor += texture(uTexture, uv + vec2(-at.x, at.y)) * 0.0635;vec2 at2 = rot90(at) * 2.0;\ncolor += texture(uTexture, uv + vec2(at2.x, 0.0)) * 0.0494;\ncolor += texture(uTexture, uv - vec2(at2.x, 0.0)) * 0.0494;\ncolor += texture(uTexture, uv + vec2(0.0, at2.y)) * 0.0494;\ncolor += texture(uTexture, uv - vec2(0.0, at2.y)) * 0.0494;\ncolor += texture(uTexture, uv + at2) * 0.0300;\ncolor += texture(uTexture, uv - at2) * 0.0300;\ncolor += texture(uTexture, uv + vec2(at2.x, -at2.y)) * 0.0300;\ncolor += texture(uTexture, uv + vec2(-at2.x, at2.y)) * 0.0300;vec2 at3 = at * 3.0;\ncolor += texture(uTexture, uv + vec2(at3.x, 0.0)) * 0.0265;\ncolor += texture(uTexture, uv - vec2(at3.x, 0.0)) * 0.0265;\ncolor += texture(uTexture, uv + vec2(0.0, at3.y)) * 0.0265;\ncolor += texture(uTexture, uv - vec2(0.0, at3.y)) * 0.0265;\ncolor += texture(uTexture, uv + at3) * 0.0087;\ncolor += texture(uTexture, uv - at3) * 0.0087;\ncolor += texture(uTexture, uv + vec2(at3.x, -at3.y)) * 0.0087;\ncolor += texture(uTexture, uv + vec2(-at3.x, at3.y)) * 0.0087;return color;\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 color = vec4(0);color = gaussianBlur(uv);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nprecision highp int;in vec3 vVertexPosition;\nin vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform sampler2D uBgTexture;\nuniform vec2 uResolution;\nuvec2 pcg2d(uvec2 v) {\nv = v * 1664525u + 1013904223u;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nv ^= v >> 16;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nreturn v;\n}float randFibo(vec2 p) {\nuvec2 v = floatBitsToUint(p);\nv = pcg2d(v);\nuint r = v.x ^ v.y;\nreturn float(r) / float(0xffffffffu);\n}vec3 blend (int blendMode, vec3 src, vec3 dst) {\nreturn max(src, dst);\n}out vec4 fragColor;vec3 chromatic_aberration(vec3 color, vec2 uv, float amount) {\nvec2 offset = normalize(vTextureCoord - 0.5) * amount / vec2(uResolution.x/uResolution.y, 1);\nvec4 left = texture(uTexture, uv - offset);\nvec4 right = texture(uTexture, uv + offset);color.r = left.r;\ncolor.b = right.b;return color;\n}const float PHI = 1.618033988;\nconst float PI = 3.14159265359;float interleavedGradientNoise(vec2 st) {\nreturn fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));\n}vec4 fogComposite(vec2 uv) {\nfloat ign = interleavedGradientNoise(gl_FragCoord.xy) - 0.5;\nfloat fogNoise = clamp(texture(uTexture, uv).a, 0.0, 1.0);\nvec2 jitter = vec2(0, ign * 0.02) * 1.0000;\nvec4 blur = texture(uTexture, uv + jitter);\nblur.a = clamp(fogNoise, 0.0, 1.0);\nfloat fogMask = clamp(fogNoise * 2., 0., 1.);\nvec4 bg = texture(uBgTexture, uv);vec3 grain = vec3(randFibo(uv + fogNoise));blur.rgb = chromatic_aberration(blur.rgb, uv, fogMask * 0.01 * 1.0000 * (0.5100 * 1.5));\nblur.rgb = (blur.rgb * (1.0000 + 0.5)) + grain * 0.05;\nvec4 foggedBlur = vec4(blur.rgb * vec3(1, 1, 1), bg.a);\nfoggedBlur.rgb += (0.1000 * 0.25 * fogMask * vec3(1, 1, 1));\nfoggedBlur.rgb = blend(7, bg.rgb, foggedBlur.rgb * fogMask);\nreturn foggedBlur;\n}void main() {\nvec2 uv = vTextureCoord;\nvec4 color = vec4(0);color = fogComposite(uv);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "speed": 0.5,
    "trackMouse": 0,
    "trackAxes": "xy",
    "data": {
      "downSample": 0.5,
      "depth": false,
      "uniforms": {},
      "isBackground": false,
      "passes": [{
        "prop": "pass",
        "value": 1,
        "downSample": 0.5,
        "passDescription": "Blur the fog field for a softer result."
      }, {
        "prop": "pass",
        "value": 2,
        "includeBg": true,
        "passDescription": "Composite the fog over the background."
      }]
    },
    "id": "930a7e01-9aba-4d7e-a1d5-8b4ffbe9babe",
    "publicId": "fast_fog"
  }],
  "options": {
    "name": "industry v2",
    "fps": 60,
    "dpi": 1.5,
    "scale": 1,
    "includeLogo": false,
    "isProduction": false,
    "flatten": false,
    "freePlan": false
  },
  "version": "2.1.12",
  "id": "qaoprCtzWn8bD05CvWSN",
  "designName": "industry v2",
  "designId": "s8FciMfC5eWtoy4gbvf0",
  "canvasId": "ccb67a91-0407-49a9-a0f9-b0b71c2e77d7",
  "projectName": "industry v2",
  "sceneName": "Scene"
}