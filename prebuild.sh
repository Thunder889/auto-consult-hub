#!/bin/bash

# Clean up node_modules
echo "Cleaning up node_modules..."
rm -rf node_modules

# Clean up any build cache
echo "Cleaning up build caches..."
rm -rf .astro
rm -rf dist

# Clean up package-lock.json (optional)
echo "Removing package-lock.json..."
rm -f package-lock.json

# Install dependencies fresh
echo "Installing dependencies..."
npm install

# Run build
echo "Building the application..."
npm run build

echo "Prebuild process completed!" 