export NODE_PATH=$HOME/.disojo-tools/node_modules
cd "/Users/tejjo/.claude/skills/disojo-site-system/research/tftl-handson"
r(){ node moments.cjs "$@" >> moments/run.log 2>&1; python3 strip.py moments/$1-$3 >> moments/run.log 2>&1; }
r era-residence https://www.era-residence.com/ close footer 12000
r 4x-strategy https://4xstrategy.com/ close footer 9000
r ada https://aventuradentalarts.com close footer 15000
r lenval-properties https://www.lenvalproperties.com/ close footer 10000
r sl-architects https://ab-sl.ru/ close footer 9000
r pictoric https://pictoric.com.ua/ close footer 9000
r grape https://grape.ua/ close footer 9000
r archvoyage https://archvoyage.ae/ close footer 9000
r coeval https://coevalstudio.com/ close footer 9000
r alchemy-family https://alchemy.family/ close footer 9000
r face-to-face https://13322566869.com/ close footer 9000
r gifford-hill https://www.giffordhill.com/ close footer 9000
r hilight https://hilight.design/ close footer 9000
r era-residence https://www.era-residence.com/ loader
r lenval-properties https://www.lenvalproperties.com/ loader
r fame-estate https://fame-estate.com/ loader
r ada https://aventuradentalarts.com loader
r era-residence https://www.era-residence.com/ close footer 12000
echo ALLDONE >> moments/run.log
