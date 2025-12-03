#!/bin/bash

rm -rf dist
npm run type
npm run build
git stage ./*
git stage -f ./dist
npm version patch
git stage ./package.json
git commit -m "Latest changes"
git push
npm publish




