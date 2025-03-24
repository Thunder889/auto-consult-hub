@echo off
echo Clearing build cache...

:: Remove Astro build files
if exist .astro rmdir /s /q .astro

:: Remove node_modules/.cache directory
if exist node_modules\.cache rmdir /s /q node_modules\.cache

:: Remove node_modules/.vite directory
if exist node_modules\.vite rmdir /s /q node_modules\.vite

:: Delete any temporary files in src directory
del /s /q src\*.tmp

echo Cache cleared successfully!
echo.
echo Run 'npm run dev' to restart the development server. 