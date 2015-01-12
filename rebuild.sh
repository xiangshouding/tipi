#!/usr/bin/env bash

ROOT=$(pwd)

cp -rf $ROOT/book $ROOT/book_md

files=$(find $ROOT/book_md -name '*.markdown')

for file in $files; do
    md=$(echo $file | sed s/.markdown/.md/)
    mv $file $md
done

node rebuild.js
