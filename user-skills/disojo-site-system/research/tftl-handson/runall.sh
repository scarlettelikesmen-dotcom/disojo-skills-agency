#!/bin/bash
cd "$(dirname "$0")"
export NODE_PATH=$HOME/.disojo-tools/node_modules
cat sites.txt | xargs -P 4 -L 1 bash -c 'node scan.cjs "$0" "$1" >> scan/run.log 2>&1 & pid=$!; ( sleep 220; kill $pid 2>/dev/null ) & wd=$!; wait $pid; kill $wd 2>/dev/null; python3 sheet.py "scan/$0" >> scan/run.log 2>&1; echo "done $0" >> scan/run.log'
echo ALLDONE >> scan/run.log
