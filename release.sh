#!/usr/bin/env sh
set -e
git checkout master

VERSION=`npx select-version-cli`

read -p "你确定要发布 $VERSION 吗? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "确定版本 $VERSION ..."

  # build
  VERSION=$VERSION npm run build

  # publish theme
  npm version $VERSION --message "[release] $VERSION"
  if [[ $VERSION =~ "beta" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi
fi
