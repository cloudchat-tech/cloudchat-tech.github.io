#!/usr/bin/env bash

echo "Setting the Node version"
nvm install
nvm use

echo "Installing Hexo CLI"
npm install -g hexo-cli

echo "Installing the NPM packages"
npm install
