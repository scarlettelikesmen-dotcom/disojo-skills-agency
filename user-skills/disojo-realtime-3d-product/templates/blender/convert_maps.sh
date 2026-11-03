#!/bin/zsh
# Baked PNG maps -> WebP for the web. Usage: convert_maps.sh <bake_dir> <public/tex/dir>
set -e; IN=$1; OUT=$2; mkdir -p $OUT
for f in $IN/*.png; do n=${f:t:r}; q=84; [[ $n == *normal* ]] && q=90; cwebp -quiet -q $q -m 6 $f -o $OUT/$n.webp; done
ls -la $OUT | awk '{print $5, $9}'
