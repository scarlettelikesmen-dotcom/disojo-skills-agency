cd ~/.claude/skills/disojo-site-system; export NODE_PATH=$HOME/.disojo-tools/node_modules; R=research/tftl-portfolio
node $R/fp.cjs $R/live.json $R/fp 3 > $R/fp.log 2>&1
probe(){ python3 -c "import json;[print(x['s'],x['url']) for x in json.load(open('$1'))]" | xargs -P 3 -n 2 sh -c 'd='$R'/'$2'/$0; [ -f $d/pages-1512.json ] || HOVERMAX=14 node scripts/taste_probe.cjs $d $1 '$3' > /dev/null 2>&1; echo probed $0' ; }
probe $R/live.json live 3 > $R/live.log
probe $R/caseonly.json caseonly 1 > $R/caseonly.log
echo ALLDONE
