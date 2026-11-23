#!/bin/bash
# 2026-11-23 run 3: menus that missed, the two stuck closes, the remaining loaders. Log moments/run3.log
export NODE_PATH=$HOME/.disojo-tools/node_modules
cd "$(dirname "$0")"
r(){ rm -rf moments/$1-$3; node moments.cjs "$@" >> moments/run3.log 2>&1; python3 strip.py moments/$1-$3 >> moments/run3.log 2>&1; }
r era-residence https://www.era-residence.com/ menu .btn-menu 16000
r lenval-properties https://www.lenvalproperties.com/ menu .header_menu 14000
SCRIPT=1 STEP=120 r hilight https://hilight.design/ close footer 9000
SCRIPT=1 STEP=120 r face-to-face https://13322566869.com/ close footer 9000
export FRAMES=24 EVERY=400
r grape https://grape.ua/ loader
r coeval https://coevalstudio.com/ loader
r pictoric https://pictoric.com.ua/ loader
r 4x-strategy https://4xstrategy.com/ loader
r nabil https://nabilissa.com/ loader
echo ALLDONE >> moments/run3.log
