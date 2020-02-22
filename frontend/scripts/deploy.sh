#!/usr/bin/env bash
rm -Rf public &&
mkdir public &&
cp -a dist/browser/. public/ &&
# VERY IMPORTANT: if you want to execute the functions!!!!!
mv public/en/index.html public/en/index2.html &&
mv public/es/index.html public/es/index2.html &&
mv public/hi/index.html public/hi/index2.html &&
cp -a dist/ functions/dist &&
firebase deploy
