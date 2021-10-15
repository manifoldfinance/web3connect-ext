#!/bin/sh
zip -r web3connect-chrome.zip dist/ -x ".*" -x "__MACOSX" "publish.sh" "docs/" "CHANGELOG.md" "README.md"
