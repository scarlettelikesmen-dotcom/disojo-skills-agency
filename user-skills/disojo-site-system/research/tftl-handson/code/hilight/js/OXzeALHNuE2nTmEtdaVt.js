/* https://assets.unicorn.studio/embeds/OXzeALHNuE2nTmEtdaVt?v=1795410987494 */
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
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform vec2 uMousePos;const float PI = 3.14159265359;vec2 rotate(vec2 coord, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(\ncoord.x * c - coord.y * s,\ncoord.x * s + coord.y * c\n);\n}out vec4 fragColor;vec3 getBgColor(vec2 uv) {return vec3(0.03529411764705882, 0.03137254901960784, 0.023529411764705882);\n}void main() {vec2 uv = vTextureCoord;\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nuv -= pos;\nuv /= max(0.5000*2., 1e-5);\nuv = rotate(uv, (0.0000 - 0.5) * 2. * PI);\nvec4 color = vec4(getBgColor(uv), 1.0) * 1.0000;\nfragColor = color;\n}"],
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
    "id": "6da32c86-01f5-4d1b-9603-22c62ab44756",
    "publicId": "gradient"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "gradientFill",
    "usesPingPong": false,
    "texture": false,
    "animating": true,
    "mouseMomentum": 1,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;uniform float uTime;vec3 getColor(int index) {\nswitch(index) {\ncase 0: return vec3(0.5647058823529412, 0.43529411764705883, 0.30980392156862746);\ncase 1: return vec3(0.7333333333333333, 0.6509803921568628, 0.5372549019607843);\ndefault: return vec3(0.0);\n}\n}float getStop(int index) {\nswitch(index) {\ncase 0: return 0.0000;\ncase 1: return 1.0000;\ndefault: return 0.0;\n}\n}uvec2 pcg2d(uvec2 v) {\nv = v * 1664525u + 1013904223u;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nv ^= v >> 16;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nreturn v;\n}float randFibo(vec2 p) {\nuvec2 v = floatBitsToUint(p);\nv = pcg2d(v);\nuint r = v.x ^ v.y;\nreturn float(r) / float(0xffffffffu);\n}uniform vec2 uMousePos;\nuniform vec2 uResolution;\nvec3 blend (int blendMode, vec3 src, vec3 dst) {\nreturn src + dst;\n}vec4 applyLayerMix(vec4 color, vec4 bg, float amount) {\ncolor.rgb = mix(bg.rgb, color.rgb, amount);\ncolor.a = max(bg.a, amount);\nreturn color;\n}float deband() {\nreturn (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;\n}vec2 rotate(vec2 coord, float angle) {\nfloat s = sin(angle);\nfloat c = cos(angle);\nreturn vec2(\ncoord.x * c - coord.y * s,\ncoord.x * s + coord.y * c\n);\n}vec3 linear_from_srgb(vec3 rgb) {\nreturn pow(max(rgb, vec3(0.0)), vec3(2.2));\n}vec3 srgb_from_linear(vec3 lin) {\nreturn pow(max(lin, vec3(0.0)), vec3(1.0/2.2));\n}vec3 safeCbrt(vec3 v) {\nreturn sign(v) * pow(abs(v), vec3(1.0/3.0));\n}vec3 oklab_mix(vec3 lin1, vec3 lin2, float a) {\nconst mat3 kCONEtoLMS = mat3(\n0.4121656120, 0.2118591070, 0.0883097947,\n0.5362752080, 0.6807189584, 0.2818474174,\n0.0514575653, 0.1074065790, 0.6302613616);\nconst mat3 kLMStoCONE = mat3(\n4.0767245293, -1.2681437731, -0.0041119885,\n-3.3072168827, 2.6093323231, -0.7034763098,\n0.2307590544, -0.3411344290, 1.7068625689);\nvec3 lms1 = safeCbrt(kCONEtoLMS*lin1);\nvec3 lms2 = safeCbrt(kCONEtoLMS*lin2);\nvec3 lms = mix(lms1, lms2, a);\nlms *= 1.0+0.025*a*(1.0-a);\nreturn kLMStoCONE*(lms*lms*lms);\n}vec3 getGradientColor(float position) {\nposition = clamp(position, 0.0, 1.0);\nint count = 2 - 1;\nfor (int i = 0; i < count; i++) {\nfloat colorPosition = getStop(i);\nfloat nextColorPosition = getStop(i + 1);\nif (position <= nextColorPosition) {\nfloat stopDelta = nextColorPosition - colorPosition;\nfloat mixFactor = clamp(stopDelta > 0.0001 ? (position - colorPosition) / stopDelta : 0.0, 0.0, 1.0);\nvec3 linStart = linear_from_srgb(getColor(i));\nvec3 linEnd = linear_from_srgb(getColor(i + 1));\nvec3 mixedLin = oklab_mix(linStart, linEnd, mixFactor);\nreturn srgb_from_linear(mixedLin);\n}\n}\nreturn getColor(count);\n}out vec4 fragColor;vec3 applyColorToPosition(float position) {\nvec3 color = vec3(0);\nposition -= (uTime * 0.01 + 0.0000);\nfloat cycle = floor(position);\nbool reverse = 1.0000 > 0.5 && int(cycle) % 2 == 0;\nfloat animatedPos = reverse ? 1.0 - fract(position) : fract(position);color = getGradientColor(animatedPos);\nfloat dither = deband();\ncolor += dither;\nreturn color;\n}vec3 linearGrad(vec2 uv) {\nfloat position = (uv.x+0.5);\nreturn applyColorToPosition(position);\n}vec3 getGradient(vec2 uv) {\nreturn linearGrad(uv);\n}vec3 getColor(vec2 uv) {\nswitch(2) {\ncase 1: return vec3(0.5647058823529412, 0.43529411764705883, 0.30980392156862746); break;\ndefault: return getGradient(uv); break;\n}\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 res = uResolution;\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.1200);\nuv -= pos;\nuv /= (0.5000*2.);\nuv = rotate(uv, (0.2778 - 0.5) * 2. * 3.14159265);\nvec4 color = vec4(getColor(uv), 1);\nvec4 bg = texture(uTexture, vTextureCoord);color.rgb = blend(1, bg.rgb, color.rgb);color = applyLayerMix(color, bg, 1.0000);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = aTextureCoord;\n}"],
    "speed": 0.11,
    "trackMouse": 0.12,
    "trackAxes": "xy",
    "data": {
      "depth": false,
      "uniforms": {},
      "isBackground": false
    },
    "id": "9eb9ddc4-46b4-4c92-af87-8f1a972a652d",
    "publicId": "fill_/_gradient"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "noiseField",
    "usesPingPong": false,
    "texture": {
      "src": "https://assets.unicorn.studio/images/kNkk9FUXZDZ4wt2ORrTQ0y5ueZC3/light-leaks-background-colorful-film-burn-black-background%201%20(1).png",
      "sampler": "uCustomTexture"
    },
    "animating": true,
    "mouseMomentum": 0,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 vVertexPosition;\nin vec2 vTextureCoord;\nuniform sampler2D uTexture;out vec4 fragColor;void main() {\nvec2 uv = vTextureCoord;\nuv = vec2(\n1. - uv.x,\n1. - uv.y\n);\nvec4 color = texture(uTexture, uv);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nout vec3 vVertexPosition;\nout vec2 vTextureCoord;uniform float uTime;\nuniform vec2 uResolution;vec3 hash33(vec3 p3) {\np3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));\np3 += dot(p3, p3.yxz + 19.19);\nreturn -1.0 + 2.0 * fract(vec3(\n(p3.x + p3.y) * p3.z,\n(p3.x + p3.z) * p3.y,\n(p3.y + p3.z) * p3.x\n));\n}float perlin_noise(vec3 p) {\nvec3 pi = floor(p);\nvec3 pf = p - pi;vec3 w = pf * pf * (3.0 - 2.0 * pf);float n000 = dot(pf - vec3(0.0, 0.0, 0.0), hash33(pi + vec3(0.0, 0.0, 0.0)));\nfloat n100 = dot(pf - vec3(1.0, 0.0, 0.0), hash33(pi + vec3(1.0, 0.0, 0.0)));\nfloat n010 = dot(pf - vec3(0.0, 1.0, 0.0), hash33(pi + vec3(0.0, 1.0, 0.0)));\nfloat n110 = dot(pf - vec3(1.0, 1.0, 0.0), hash33(pi + vec3(1.0, 1.0, 0.0)));\nfloat n001 = dot(pf - vec3(0.0, 0.0, 1.0), hash33(pi + vec3(0.0, 0.0, 1.0)));\nfloat n101 = dot(pf - vec3(1.0, 0.0, 1.0), hash33(pi + vec3(1.0, 0.0, 1.0)));\nfloat n011 = dot(pf - vec3(0.0, 1.0, 1.0), hash33(pi + vec3(0.0, 1.0, 1.0)));\nfloat n111 = dot(pf - vec3(1.0, 1.0, 1.0), hash33(pi + vec3(1.0, 1.0, 1.0)));float nx00 = mix(n000, n100, w.x);\nfloat nx01 = mix(n001, n101, w.x);\nfloat nx10 = mix(n010, n110, w.x);\nfloat nx11 = mix(n011, n111, w.x);float nxy0 = mix(nx00, nx10, w.y);\nfloat nxy1 = mix(nx01, nx11, w.y);float nxyz = mix(nxy0, nxy1, w.z);return nxyz;\n}const float PI = 3.14159265359;mat4 rotation(float angle) {\nreturn mat4(\nvec4( cos(angle), -sin(angle), 0.0, 0.0 ),\nvec4( sin(angle), cos(angle), 0.0, 0.0 ),\nvec4( 0.0, 0.0, 1.0, 0.0 ),\nvec4( 0.0, 0.0, 0.0, 1.0 ) );\n}\nvoid main() {\nvec3 vertexPosition = aVertexPosition;\nvec3 waveCoord = aVertexPosition;\nfloat cumval = 0.;\nfloat spr = (0.2880 + 1.) / ((uResolution.x/uResolution.y + 1.) * 0.5) * 10.;\nfloat time = 0.0000 * 10. + uTime * 0.05;\nvec2 origin = (vec2(0.5, 0.5) - 0.5) * 2.0;\nvec2 centered = waveCoord.xy - origin;\nfloat cosA = cos(0.5972 * 2. * PI);\nfloat sinA = sin(0.5972 * 2. * PI);\nvec2 rotated = vec2(\ncentered.x * cosA - centered.y * sinA,\ncentered.x * sinA + centered.y * cosA\n);\nvec2 transformed = rotated + origin;float value = perlin_noise(vec3(((transformed * 0.2880 * 10.) + (vec2(0.5, 0.5) - 0.5) * 20. * 0.2880) * (vec2(0.2, 1.)), time)) * 0.6000;waveCoord.z = 0.;\nwaveCoord.y += mix(value, smoothstep(-1., 0., value) - 1., 0.5000);\nwaveCoord.x += value * 0.02;\nif(vertexPosition.x == 1.) {\nwaveCoord.x = 1.;\n}\nif(vertexPosition.x == -1.) {\nwaveCoord.x = -1.;\n}\nif(vertexPosition.y == 1.) {\nwaveCoord.y = 1.;\n}\nif(vertexPosition.y == -1.) {\nwaveCoord.y = -1.;\n}gl_Position = uPMatrix * uMVMatrix * rotation(radians(180.0)) * vec4(waveCoord, 1.);vTextureCoord = aTextureCoord - vec2(0., mix(value, smoothstep(-1., 0., value) - 1., 0.5000));\nvVertexPosition = vertexPosition;\n}"],
    "speed": 0.11,
    "data": {
      "depth": false,
      "uniforms": {},
      "isBackground": false,
      "heightSegments": 300,
      "widthSegments": 300
    },
    "id": "1f79999f-cb58-4c49-85a8-9fae4cc05f7e",
    "publicId": "waves"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6666666666666667,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "anchorPoint": 8,
    "blendMode": "MULTIPLY",
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "image",
    "width": 450,
    "widthMode": 1,
    "height": 270,
    "heightMode": 2,
    "left": 0.5,
    "top": 0.5,
    "src": "https://assets.unicorn.studio/images/kNkk9FUXZDZ4wt2ORrTQ0y5ueZC3/light-leaks-background-colorful-film-burn-black-background%201%20(1).png",
    "imageNaturalSize": {
      "type": "Vec2",
      "_x": 1440,
      "_y": 864
    },
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform sampler2D uSourceImage;uniform vec2 uArtboardResolution;\nuniform vec2 uMousePos;\nuniform sampler2D uBgTexture;vec3 blend (int blendMode, vec3 src, vec3 dst) {\nreturn src * dst;\n}const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec4 sampleImage(vec2 canvasUV, vec2 mouseOffset, vec2 mouseRotOffset) {\nvec2 canvasPos = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);\nvec2 imageUV;float imageAspect = vec2(1440, 864).x / vec2(1440, 864).y;\nfloat canvasAspect = uArtboardResolution.x / uArtboardResolution.y;\nvec2 fitSize = vec2(\n(canvasAspect < imageAspect) ? uArtboardResolution.y * imageAspect : uArtboardResolution.x,\n(canvasAspect < imageAspect) ? uArtboardResolution.y : uArtboardResolution.x / imageAspect\n);\nvec2 offset = (uArtboardResolution - fitSize) * 0.5;\nvec2 adjustedPos = canvasPos + mouseOffset;\nimageUV = (adjustedPos - offset) / fitSize;\nvec2 flippedUV = vec2(imageUV.x, 1.0 - imageUV.y);\nvec4 color = textureLod(uSourceImage, flippedUV, 0.0);\nif (imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0) {\nreturn color;\n} else {\nreturn vec4(0.0);\n}\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nvec3 unpremultColor = color.rgb / max(color.a, 0.0001);\nvec3 blendedColor = blend(3, unpremultColor, background.rgb);\ncolor = vec4(blendedColor, 1.0) * (color.a * 1.0000);\ncolor = color + background * (1.0 - color.a);\nreturn color;\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 applyImageAdjustments(vec4 color) {color.rgb = clamp(color.rgb, 0.0, 1.0);\ncolor.rgb *= color.a;\nreturn color;\n}vec4 getCompositeOutput(vec2 uv, vec2 mouseOffsetPx, vec2 mouseRotOffset) {\nvec4 background = vec4(0);background = texture(uBgTexture, vTextureCoord);\nvec4 color = sampleImage(uv, mouseOffsetPx, mouseRotOffset);\ncolor = applyImageAdjustments(color);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 mouseOffsetUV = (uMousePos - 0.5) * 0.0000;\nvec2 mouseOffsetPx = mouseOffsetUV;\nvec2 mouseRotOffset = (uMousePos - 0.5) * 0.0000 * PI * 0.5;\nuv -= mouseOffsetUV;\nfragColor = getCompositeOutput(uv, mouseOffsetPx, mouseRotOffset);\n}"],
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
          "value": 1.6666666666666667
        }
      },
      "elementOpacity": 1
    },
    "id": "86aa886d-24de-4c2a-90b9-f382d853bdf1",
    "publicId": "image"
  }, {
    "breakpoints": [],
    "aspectRatio": 1.6666666666666667,
    "userDownsample": 1,
    "states": {
      "appear": [],
      "scroll": [],
      "hover": [],
      "mousemove": []
    },
    "effects": [],
    "anchorPoint": 8,
    "blendMode": "MULTIPLY",
    "mask": 0,
    "maskInvert": 0,
    "maskDepth": 0,
    "maskDepthLayer": 0,
    "layerType": "image",
    "width": 450,
    "widthMode": 1,
    "height": 270,
    "heightMode": 2,
    "left": 0.5,
    "top": 0.5,
    "src": "https://assets.unicorn.studio/images/kNkk9FUXZDZ4wt2ORrTQ0y5ueZC3/light-leaks-background-colorful-film-burn-black-background%201.png",
    "imageNaturalSize": {
      "type": "Vec2",
      "_x": 1440,
      "_y": 864
    },
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;\nin vec3 vVertexPosition;uniform sampler2D uSourceImage;uniform vec2 uArtboardResolution;\nuniform vec2 uMousePos;\nuniform sampler2D uBgTexture;vec3 blend (int blendMode, vec3 src, vec3 dst) {\nreturn src * dst;\n}const float TAU = 6.28318530718;\nconst float PI = 3.14159265359;out vec4 fragColor;vec4 sampleImage(vec2 canvasUV, vec2 mouseOffset, vec2 mouseRotOffset) {\nvec2 canvasPos = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);\nvec2 imageUV;float imageAspect = vec2(1440, 864).x / vec2(1440, 864).y;\nfloat canvasAspect = uArtboardResolution.x / uArtboardResolution.y;\nvec2 fitSize = vec2(\n(canvasAspect < imageAspect) ? uArtboardResolution.y * imageAspect : uArtboardResolution.x,\n(canvasAspect < imageAspect) ? uArtboardResolution.y : uArtboardResolution.x / imageAspect\n);\nvec2 offset = (uArtboardResolution - fitSize) * 0.5;\nvec2 adjustedPos = canvasPos + mouseOffset;\nimageUV = (adjustedPos - offset) / fitSize;\nvec2 flippedUV = vec2(imageUV.x, 1.0 - imageUV.y);\nvec4 color = textureLod(uSourceImage, flippedUV, 0.0);\nif (imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0) {\nreturn color;\n} else {\nreturn vec4(0.0);\n}\n}vec4 getNormalOutput(vec4 color, vec4 background) {\nvec3 unpremultColor = color.rgb / max(color.a, 0.0001);\nvec3 blendedColor = blend(3, unpremultColor, background.rgb);\ncolor = vec4(blendedColor, 1.0) * (color.a * 1.0000);\ncolor = color + background * (1.0 - color.a);\nreturn color;\nreturn mix(background, color + background * (1.0 - color.a), 1.0000);\n}vec4 getOutputByMode(vec4 color, vec4 background) {\nreturn getNormalOutput(color, background);\n}vec4 applyImageAdjustments(vec4 color) {color.rgb = clamp(color.rgb, 0.0, 1.0);\ncolor.rgb *= color.a;\nreturn color;\n}vec4 getCompositeOutput(vec2 uv, vec2 mouseOffsetPx, vec2 mouseRotOffset) {\nvec4 background = vec4(0);background = texture(uBgTexture, vTextureCoord);\nvec4 color = sampleImage(uv, mouseOffsetPx, mouseRotOffset);\ncolor = applyImageAdjustments(color);return getOutputByMode(color, background);\n}void main() {\nvec2 uv = vTextureCoord;\nvec2 mouseOffsetUV = (uMousePos - 0.5) * 0.0000;\nvec2 mouseOffsetPx = mouseOffsetUV;\nvec2 mouseRotOffset = (uMousePos - 0.5) * 0.0000 * PI * 0.5;\nuv -= mouseOffsetUV;\nfragColor = getCompositeOutput(uv, mouseOffsetPx, mouseRotOffset);\n}"],
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
          "value": 1.6666666666666667
        }
      },
      "elementOpacity": 1
    },
    "id": "6793c8bb-ab7a-4225-bfdd-9156f6346f53",
    "publicId": "image1"
  }, {
    "breakpoints": [],
    "visible": true,
    "aspectRatio": 1,
    "userDownsample": 1,
    "layerType": "effect",
    "type": "radialBlur",
    "usesPingPong": false,
    "texture": false,
    "animating": false,
    "mouseMomentum": 0,
    "mouseSpring": 0,
    "isMask": 0,
    "compiledFragmentShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform vec2 uMousePos;\nuniform vec2 uResolution;\nfloat ease (int easingFunc, float t) {\nreturn t;\n}\nuvec2 pcg2d(uvec2 v) {\nv = v * 1664525u + 1013904223u;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nv ^= v >> 16;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nreturn v;\n}float randFibo(vec2 p) {\nuvec2 v = floatBitsToUint(p);\nv = pcg2d(v);\nuint r = v.x ^ v.y;\nreturn float(r) / float(0xffffffffu);\n}\nfloat deband() {\nreturn (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;\n}out vec4 fragColor;\nfloat getExponentialWeight(int index) {\nswitch(index) {\ncase 0: return 1.0000000000;\ncase 1: return 0.7165313106;\ncase 2: return 0.5134171190;\ncase 3: return 0.3678794412;\ncase 4: return 0.2636050919;\ncase 5: return 0.1888756057;\ncase 6: return 0.1353352832;\ncase 7: return 0.0969670595;\ncase 8: return 0.0694877157;\ndefault: return 0.0;\n}\n}vec4 RadialBlur(sampler2D tex, vec2 uv) {\nif (0.2000 == 0.0) {\nreturn texture(tex, uv);\n}\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nfloat aspectRatio = uResolution.x/uResolution.y;\nvec2 dir = uv - pos;\ndir.x *= aspectRatio;\nfloat dist = distance(uv * vec2(aspectRatio, 1), pos * vec2(aspectRatio, 1));\ndist = ease(0, max(0.,1.-dist * 4. * (1. - 1.0000)));\nif (0 == 1) {\ndist = max(0., (0.5 - dist));\n}float amount = (0.2000 + 0.2) * dist * 0.04;\nif(0 == 1) amount *= 0.5;\nif(0 == 2) amount *= 0.25;\nif (amount < 0.0001) {\nreturn texture(tex, uv);\n}\nvec4 color = vec4(0.0);\nfloat total_weight = 0.0;\nvec4 center = texture(tex, uv);\nfloat center_weight = getExponentialWeight(0);\ncolor += center * center_weight;\ntotal_weight += center_weight;\nvec2 toUv = uv - pos;\nvec2 toUvAR = vec2(toUv.x * aspectRatio, toUv.y);\nfloat radius = length(toUvAR);\nfloat baseAngle = atan(toUvAR.y, toUvAR.x);float angleStep = amount;for (int i = 1; i <= 8; i++) {\nfloat weight = getExponentialWeight(i);\nfloat step = float(i) * angleStep;float a1 = baseAngle + step;\nvec2 rot1AR = radius * vec2(cos(a1), sin(a1));\nvec2 rot1 = vec2(rot1AR.x / aspectRatio, rot1AR.y) + pos;float a2 = baseAngle - step;\nvec2 rot2AR = radius * vec2(cos(a2), sin(a2));\nvec2 rot2 = vec2(rot2AR.x / aspectRatio, rot2AR.y) + pos;vec4 sample1 = texture(tex, rot1);\nvec4 sample2 = texture(tex, rot2);color += (sample1 + sample2) * weight;\ntotal_weight += 2.0 * weight;\n}color = color / total_weight;\nif(0 == 3) {\nfloat dither = deband();\ncolor.rgb += dither;\n}\nreturn color;\n}vec4 radialBlurPass(vec2 uv) {return RadialBlur(uTexture, uv);\n}vec4 getPassColor(vec2 uv) {\nreturn radialBlurPass(uv);\n}\nvoid main() {\nvec2 uv = vTextureCoord;\nvec4 color = getPassColor(uv);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform vec2 uMousePos;\nuniform vec2 uResolution;\nfloat ease (int easingFunc, float t) {\nreturn t;\n}\nuvec2 pcg2d(uvec2 v) {\nv = v * 1664525u + 1013904223u;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nv ^= v >> 16;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nreturn v;\n}float randFibo(vec2 p) {\nuvec2 v = floatBitsToUint(p);\nv = pcg2d(v);\nuint r = v.x ^ v.y;\nreturn float(r) / float(0xffffffffu);\n}\nfloat deband() {\nreturn (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;\n}out vec4 fragColor;\nfloat getExponentialWeight(int index) {\nswitch(index) {\ncase 0: return 1.0000000000;\ncase 1: return 0.7165313106;\ncase 2: return 0.5134171190;\ncase 3: return 0.3678794412;\ncase 4: return 0.2636050919;\ncase 5: return 0.1888756057;\ncase 6: return 0.1353352832;\ncase 7: return 0.0969670595;\ncase 8: return 0.0694877157;\ndefault: return 0.0;\n}\n}vec4 RadialBlur(sampler2D tex, vec2 uv) {\nif (0.2000 == 0.0) {\nreturn texture(tex, uv);\n}\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nfloat aspectRatio = uResolution.x/uResolution.y;\nvec2 dir = uv - pos;\ndir.x *= aspectRatio;\nfloat dist = distance(uv * vec2(aspectRatio, 1), pos * vec2(aspectRatio, 1));\ndist = ease(0, max(0.,1.-dist * 4. * (1. - 1.0000)));\nif (0 == 1) {\ndist = max(0., (0.5 - dist));\n}float amount = (0.2000 + 0.2) * dist * 0.04;\nif(1 == 1) amount *= 0.5;\nif(1 == 2) amount *= 0.25;\nif (amount < 0.0001) {\nreturn texture(tex, uv);\n}\nvec4 color = vec4(0.0);\nfloat total_weight = 0.0;\nvec4 center = texture(tex, uv);\nfloat center_weight = getExponentialWeight(0);\ncolor += center * center_weight;\ntotal_weight += center_weight;\nvec2 toUv = uv - pos;\nvec2 toUvAR = vec2(toUv.x * aspectRatio, toUv.y);\nfloat radius = length(toUvAR);\nfloat baseAngle = atan(toUvAR.y, toUvAR.x);float angleStep = amount;for (int i = 1; i <= 8; i++) {\nfloat weight = getExponentialWeight(i);\nfloat step = float(i) * angleStep;float a1 = baseAngle + step;\nvec2 rot1AR = radius * vec2(cos(a1), sin(a1));\nvec2 rot1 = vec2(rot1AR.x / aspectRatio, rot1AR.y) + pos;float a2 = baseAngle - step;\nvec2 rot2AR = radius * vec2(cos(a2), sin(a2));\nvec2 rot2 = vec2(rot2AR.x / aspectRatio, rot2AR.y) + pos;vec4 sample1 = texture(tex, rot1);\nvec4 sample2 = texture(tex, rot2);color += (sample1 + sample2) * weight;\ntotal_weight += 2.0 * weight;\n}color = color / total_weight;\nif(1 == 3) {\nfloat dither = deband();\ncolor.rgb += dither;\n}\nreturn color;\n}vec4 radialBlurPass(vec2 uv) {return RadialBlur(uTexture, uv);\n}vec4 getPassColor(vec2 uv) {\nreturn radialBlurPass(uv);\n}\nvoid main() {\nvec2 uv = vTextureCoord;\nvec4 color = getPassColor(uv);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform vec2 uMousePos;\nuniform vec2 uResolution;\nfloat ease (int easingFunc, float t) {\nreturn t;\n}\nuvec2 pcg2d(uvec2 v) {\nv = v * 1664525u + 1013904223u;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nv ^= v >> 16;\nv.x += v.y * v.y * 1664525u + 1013904223u;\nv.y += v.x * v.x * 1664525u + 1013904223u;\nreturn v;\n}float randFibo(vec2 p) {\nuvec2 v = floatBitsToUint(p);\nv = pcg2d(v);\nuint r = v.x ^ v.y;\nreturn float(r) / float(0xffffffffu);\n}\nfloat deband() {\nreturn (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;\n}out vec4 fragColor;\nfloat getExponentialWeight(int index) {\nswitch(index) {\ncase 0: return 1.0000000000;\ncase 1: return 0.7165313106;\ncase 2: return 0.5134171190;\ncase 3: return 0.3678794412;\ncase 4: return 0.2636050919;\ncase 5: return 0.1888756057;\ncase 6: return 0.1353352832;\ncase 7: return 0.0969670595;\ncase 8: return 0.0694877157;\ndefault: return 0.0;\n}\n}vec4 RadialBlur(sampler2D tex, vec2 uv) {\nif (0.2000 == 0.0) {\nreturn texture(tex, uv);\n}\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nfloat aspectRatio = uResolution.x/uResolution.y;\nvec2 dir = uv - pos;\ndir.x *= aspectRatio;\nfloat dist = distance(uv * vec2(aspectRatio, 1), pos * vec2(aspectRatio, 1));\ndist = ease(0, max(0.,1.-dist * 4. * (1. - 1.0000)));\nif (0 == 1) {\ndist = max(0., (0.5 - dist));\n}float amount = (0.2000 + 0.2) * dist * 0.04;\nif(2 == 1) amount *= 0.5;\nif(2 == 2) amount *= 0.25;\nif (amount < 0.0001) {\nreturn texture(tex, uv);\n}\nvec4 color = vec4(0.0);\nfloat total_weight = 0.0;\nvec4 center = texture(tex, uv);\nfloat center_weight = getExponentialWeight(0);\ncolor += center * center_weight;\ntotal_weight += center_weight;\nvec2 toUv = uv - pos;\nvec2 toUvAR = vec2(toUv.x * aspectRatio, toUv.y);\nfloat radius = length(toUvAR);\nfloat baseAngle = atan(toUvAR.y, toUvAR.x);float angleStep = amount;for (int i = 1; i <= 8; i++) {\nfloat weight = getExponentialWeight(i);\nfloat step = float(i) * angleStep;float a1 = baseAngle + step;\nvec2 rot1AR = radius * vec2(cos(a1), sin(a1));\nvec2 rot1 = vec2(rot1AR.x / aspectRatio, rot1AR.y) + pos;float a2 = baseAngle - step;\nvec2 rot2AR = radius * vec2(cos(a2), sin(a2));\nvec2 rot2 = vec2(rot2AR.x / aspectRatio, rot2AR.y) + pos;vec4 sample1 = texture(tex, rot1);\nvec4 sample2 = texture(tex, rot2);color += (sample1 + sample2) * weight;\ntotal_weight += 2.0 * weight;\n}color = color / total_weight;\nif(2 == 3) {\nfloat dither = deband();\ncolor.rgb += dither;\n}\nreturn color;\n}vec4 radialBlurPass(vec2 uv) {return RadialBlur(uTexture, uv);\n}vec4 getPassColor(vec2 uv) {\nreturn radialBlurPass(uv);\n}\nvoid main() {\nvec2 uv = vTextureCoord;\nvec4 color = getPassColor(uv);\nfragColor = color;}", "#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;\nuniform sampler2D uBgTexture;\nuniform vec2 uMousePos;\nuniform vec2 uResolution;\nfloat ease (int easingFunc, float t) {\nreturn t;\n}out vec4 fragColor;vec4 finalPass(vec2 uv) {\nif (0.2000 == 0.00) {\nreturn texture(uBgTexture, uv);\n}\nvec4 blurredColor = texture(uTexture, uv);\nvec4 originalColor = texture(uBgTexture, uv);\nvec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);\nfloat aspectRatio = uResolution.x/uResolution.y;\nfloat dist = ease(0, max(0.,1.-distance(uv * vec2(aspectRatio, 1), pos * vec2(aspectRatio, 1)) * 4. * (1. - 1.0000)));\nif (0 == 1) {\ndist = max(0., (0.5 - dist));\n}return mix(originalColor, blurredColor, (0.2000 * dist > 0.001) ? 1.0 : 0.0);\n}vec4 getPassColor(vec2 uv) {\nreturn finalPass(uv);\n}\nvoid main() {\nvec2 uv = vTextureCoord;\nvec4 color = getPassColor(uv);\nfragColor = color;}"],
    "compiledVertexShaders": ["#version 300 es\n// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.\n// Unauthorized copying, redistribution, or use in competing products is prohibited.\nprecision mediump float;in vec3 aVertexPosition;\nin vec2 aTextureCoord;uniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uTextureMatrix;out vec2 vTextureCoord;\nout vec3 vVertexPosition;void main() {\ngl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\nvTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n}"],
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
        "downSample": 0.25,
        "passDescription": "Apply a second radial blur pass at lower resolution."
      }, {
        "prop": "pass",
        "value": 2,
        "downSample": 0.5,
        "passDescription": "Apply a third radial blur pass on the downsampled buffer."
      }, {
        "prop": "pass",
        "value": 3,
        "includeBg": true,
        "passDescription": "Composite the radial blur over the original image."
      }]
    },
    "id": "ca9dc7b5-d2c2-4ab6-ab23-e00749ae9d5b",
    "publicId": "radial_blur"
  }],
  "options": {
    "name": "Globe Bg",
    "fps": 60,
    "dpi": 1.5,
    "scale": 1,
    "includeLogo": false,
    "isProduction": false,
    "flatten": false,
    "freePlan": false
  },
  "version": "2.1.12",
  "id": "OXzeALHNuE2nTmEtdaVt",
  "designName": "Globe Bg",
  "designId": "ba2nvBwVoXTUk3D1JBJL",
  "canvasId": "c9e18a94-31ab-4795-8c6a-dfbab3db3bc9",
  "projectName": "Globe Bg",
  "sceneName": "Scene"
}