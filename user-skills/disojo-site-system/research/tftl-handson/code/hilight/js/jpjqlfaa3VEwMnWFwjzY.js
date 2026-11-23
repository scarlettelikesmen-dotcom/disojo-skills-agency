/* https://assets.unicorn.studio/embeds/jpjqlfaa3VEwMnWFwjzY?v=1795410987404 */
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
    "description": "",
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform vec2 uMousePos;const float PI = 3.14159265359;vec2 rotate(vec2 coord, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(\ncoord.x * c - coord.y * s,\ncoord.x * s + coord.y * c\n);\n}out vec4 fragColor;vec3 getBgColor(vec2 uv) {return vec3(1, 1, 1);\n}void main() {vec2 uv = vTextureCoord;\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nuv -= pos;\nuv /= max(0.5000*2., 1e-5);\nuv = rotate(uv, (0.0000 - 0.5) * 2. * PI);\nvec4 color = vec4(getBgColor(uv), 1.0) * 1.0000;\nfragColor = color;\n}"],
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
    "id": "0f02a01d-108b-44b1-8559-fde59a79f5ce",
    "publicId": "gradient"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "noise",
    "usesPingPong": false,
    "texture": false,
    "parentLayer": "d159224e-1c90-4bc9-a46f-ebbe71563e65",
    "animating": true,
    "mouseMomentum": 0,
    "mouseSpring": 0,
    "isMask": 0,
    "description": "",
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nin vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform sampler2D uTexture;\nuniform float uTime;\nuniform vec2 uMousePos;\nuniform vec2 uResolution;\nfloat ease (int easingFunc, float t) {\nreturn t;\n}vec3 hash33(vec3 p3) {\np3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));\np3 += dot(p3, p3.yxz + 19.19);\nreturn -1.0 + 2.0 * fract(vec3(\n(p3.x + p3.y) * p3.z,\n(p3.x + p3.z) * p3.y,\n(p3.y + p3.z) * p3.x\n));\n}float perlin_noise(vec3 p) {\nvec3 pi = floor(p);\nvec3 pf = p - pi;vec3 w = pf * pf * (3.0 - 2.0 * pf);float n000 = dot(pf - vec3(0.0, 0.0, 0.0), hash33(pi + vec3(0.0, 0.0, 0.0)));\nfloat n100 = dot(pf - vec3(1.0, 0.0, 0.0), hash33(pi + vec3(1.0, 0.0, 0.0)));\nfloat n010 = dot(pf - vec3(0.0, 1.0, 0.0), hash33(pi + vec3(0.0, 1.0, 0.0)));\nfloat n110 = dot(pf - vec3(1.0, 1.0, 0.0), hash33(pi + vec3(1.0, 1.0, 0.0)));\nfloat n001 = dot(pf - vec3(0.0, 0.0, 1.0), hash33(pi + vec3(0.0, 0.0, 1.0)));\nfloat n101 = dot(pf - vec3(1.0, 0.0, 1.0), hash33(pi + vec3(1.0, 0.0, 1.0)));\nfloat n011 = dot(pf - vec3(0.0, 1.0, 1.0), hash33(pi + vec3(0.0, 1.0, 1.0)));\nfloat n111 = dot(pf - vec3(1.0, 1.0, 1.0), hash33(pi + vec3(1.0, 1.0, 1.0)));float nx00 = mix(n000, n100, w.x);\nfloat nx01 = mix(n001, n101, w.x);\nfloat nx10 = mix(n010, n110, w.x);\nfloat nx11 = mix(n011, n111, w.x);float nxy0 = mix(nx00, nx10, w.y);\nfloat nxy1 = mix(nx01, nx11, w.y);float nxyz = mix(nxy0, nxy1, w.z);return nxyz;\n}out vec4 fragColor;const float PI = 3.14159265359;mat2 rot(float a) {\nreturn mat2(cos(a),-sin(a),sin(a),cos(a));\n}vec2 getPerlinNoise(vec2 uv, vec2 textureCoord, float direction, float phase, float time, float turbulence) {\nvec2 skew = vec2(direction, 1. - direction);\nfloat noiseX = perlin_noise(vec3(\nuv * skew,\nphase + time * 0.03\n));float noiseY = perlin_noise(vec3(\n(uv + vec2(4.37)) * skew,\nphase + time * 0.03\n));vec2 offset = vec2(noiseX * 1.5, noiseY * 1.5) * 0.5 + 0.5;return mix(textureCoord, offset, turbulence * 1.2);\n}vec2 getNoiseOffset(vec2 uv, vec2 textureCoord, float direction, float phase, float time, float turbulence) {\nreturn getPerlinNoise(uv, textureCoord, direction, phase, time, turbulence);\n}vec2 distortUV(vec2 uv) {\nfloat aspectRatio = uResolution.x/uResolution.y;vec2 mPos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nfloat dist = ease(0, max(0.,1.-distance(uv * vec2(aspectRatio, 1), mPos * vec2(aspectRatio, 1)) * 4. * (1. - 1.0000)));if(dist <= 0.001) {\nreturn uv;\n}if(1.0000 <= 0.001) {\nreturn uv;\n}vec2 pos = mix(vec2(0.5, 0.5), mPos, floor(1.0000));\nvec2 drift = vec2(0, 0.0000 * uTime * 0.0125);\npos += drift * rot(0.0000 * -2. * PI);\nvec2 st = (uv - pos) * vec2(aspectRatio, 1);\nst *= 12. * 0.1500;\nst = rot(0.0000 * -2. * PI) * st;vec2 noise = getNoiseOffset(st, uv, 0.5000, 0.0000, uTime, 1.0000);\nreturn mix(uv, noise, dist);\n}void main() {\nvec2 uv = vTextureCoord;\nuv = distortUV(uv);\nvec4 color = texture(uTexture, uv);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "speed": 0.25,
    "trackMouse": 0,
    "trackAxes": "xy",
    "data": {
      "depth": false,
      "uniforms": {},
      "isBackground": false
    },
    "id": "f4105d5e-ee02-4d1e-82cf-0aefa2b52848",
    "publicId": "noise"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": ["d159224e-1c90-4bc9-a46f-ebbe71563e65"],
    "trackMouse": 0.1,
    "anchorPoint": 8,
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "shape",
    "width": 0.25,
    "widthMode": 0,
    "height": 0.4,
    "heightMode": 2,
    "left": 0.5,
    "top": 0.5,
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(p.x * c - p.y * s, p.x * s + p.y * c);\n}vec2 getAnchorOffsets() {\nreturn vec2(0.5, 0.5);\n}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {\nvec2 halfSize = elementSize * 0.5;\nvec2 p = localPos - halfSize;return vec3(0.39215686274509803, 0.24705882352941178, 0);\n}float sdBox(vec2 p, vec2 b) {\nvec2 d = abs(p) - b;\nreturn length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\n}float sdEllipse(vec2 p, vec2 ab) {\nvec2 q = p / ab;\nreturn (length(q) - 1.0) * min(ab.x, ab.y);\n}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {\nvec2 p = vec2(0.0);\nvec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;\nvec2 rel = canvasPosPx - centerPx;\nvec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;\np = local - elementSizePx * 0.5;\nhalfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));\nreturn sdBox(p, halfSize);\n}vec4 sampleShape(vec2 canvasUV) {\nvec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 0.2500 * uArtboardResolution.x;\nfloat absHeight = 0.4000 * uArtboardResolution.y;absHeight = absWidth / 1.0000;\nvec2 elementSizePx = vec2(absWidth, absHeight);\nvec2 elementPosPx = vec2(0.5000, 0.5000) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);\nfloat aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);\nfloat uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));\nfloat seamFactor = smoothstep(0.01, 0.03, uvGrad);\naa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 1.0000), mix(aa, 150., 1.0000), dist);\nfillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);\nvec2 localPos;\nlocalPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;\nvec2 localSize;\nlocalSize = elementSizePx;vec2 centerPx;\ncenterPx = elementPosPx + elementSizePx * 0.5;\nfloat centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);\nfloat maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;\nvec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;\nvec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);\nvec4 col = stroke + fill * (1.0 - stroke.a);\nreturn col;\n}vec4 getSourceOutput(vec2 uv) {\nreturn sampleShape(uv);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = (uMousePos - 0.5) * 0.1000;uv -= pos;fragColor = getSourceOutput(uv);\n}"],
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
          "value": 1
        }
      },
      "elementOpacity": 0.1,
      "compositeShader": {
        "fragmentShader": "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;\nin vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform sampler2D uBgTexture;\nuniform sampler2D uTexture;const float PI = 3.14159265359;out vec4 fragColor;vec4 getNormalOutput(vec4 color, vec4 background) {\nreturn mix(background, color + background * (1.0 - color.a), 0.1000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 pos = vec2(0);uv -= pos;vec4 background = vec4(0);background = texture(uBgTexture, vTextureCoord);\nvec4 color = texture(uTexture, uv);vec4 col = getOutputByMode(color, background);fragColor = col;\n}",
        "vertexShader": "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;\nuniform vec2 uMousePos;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\nfloat angleX = uMousePos.y * 0.5 - 0.25;\nfloat angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,\n0.0, cos(angleX), -sin(angleX), 0.0,\n0.0, sin(angleX), cos(angleX), 0.0,\n0.0, 0.0, 0.0, 1.0);\nmat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,\n0.0, 1.0, 0.0, 0.0,\n-sin(angleY), 0.0, cos(angleY), 0.0,\n0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"
      },
      "compositeUniforms": {
        "resolution": {
          "name": "uResolution",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 1080,
            "_y": 1080
          }
        },
        "opacity": {
          "name": "uOpacity",
          "type": "1f",
          "value": 1
        },
        "mousePos": {
          "name": "uMousePos",
          "type": "2f",
          "value": {
            "type": "Vec2",
            "_x": 0.5,
            "_y": 0.5
          }
        }
      }
    },
    "id": "47557d8e-bbe2-459e-b6e9-d8268e0042c6",
    "publicId": "shape"
  }],
  "options": {
    "name": "Copy of hilight-bg",
    "fps": 60,
    "dpi": 1.5,
    "scale": 1,
    "includeLogo": false,
    "isProduction": false,
    "flatten": false,
    "freePlan": false,
    "width": 1440,
    "height": 900
  },
  "version": "2.3.0",
  "id": "jpjqlfaa3VEwMnWFwjzY",
  "designName": "Copy of hilight-bg",
  "designId": "xCMSdIVgnhCzfBAjagGc",
  "canvasId": "af2dfebb-7737-4485-bf28-c74a13de45dd",
  "projectName": "Copy of hilight-bg",
  "sceneName": "Scene"
}