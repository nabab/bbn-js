#!/bin/bash

npm run type
npm run build
git stage ./*
git stage -f ./dist
npm version patch
git stage ./package.json
git commit -m "Latest changes"
git push
npm publish
#rm -rf ~/web/bbn-js/v2/dist
#cp -rf dist ~/web/bbn-js/v2/




