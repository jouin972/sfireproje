#!/usr/bin/env bash
rm -Rf public &&
mkdir public &&
cp -a dist/browser/. public/ &&
# VERY IMPORTANT: if you want to execute the functions!!!!!
mv public/index.html public/index2.html &&
cp -a dist/ functions/dist &&
firebase deploy
