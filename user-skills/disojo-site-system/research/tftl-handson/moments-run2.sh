export NODE_PATH=$HOME/.disojo-tools/node_modules
cd "$(dirname "$0")"
r(){ rm -rf moments/$1-$3; node moments.cjs "$@" >> moments/run2.log 2>&1; python3 strip.py moments/$1-$3 >> moments/run2.log 2>&1; }
for k in menu nav; do
r era-residence https://www.era-residence.com/ $k footer 16000
r lenval-properties https://www.lenvalproperties.com/ $k footer 14000
r hilight https://hilight.design/ $k footer 9000
r fame-estate https://fame-estate.com/ $k footer 10000
r ada https://aventuradentalarts.com $k footer 15000
r archvoyage https://archvoyage.ae/ $k footer 9000
done
echo ALLDONE >> moments/run2.log
