#!/bin/sh

set -e

cd $(dirname "$0")

git submodule update --init --recursive

EMPATH="$(pwd)/emscripten"
OUTPUT="$(pwd)/sundown.js"
TEMPFILE="$(mktemp -d -t sundownjs)/sundown.js"

cd sundown
"${EMPATH}/emmake" make CC="${EMPATH}/emcc" CXX="${EMPATH}/em++" RANLIB="${EMPATH}/emranlib" AR="${EMPATH}/emar"
"${EMPATH}/emcc" libsundown.so -o "${TEMPFILE}"
test -s "${TEMPFILE}"
cd ..

echo "(function () {" > "${OUTPUT}"
cat "${TEMPFILE}" exports.js >> "${OUTPUT}"
echo "})();" >> "${OUTPUT}"
