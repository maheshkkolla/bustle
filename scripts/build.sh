rm -r dist/*

npm run buildJs

# Copy src other than js folder to dist
cd src
cp -r `ls -A | grep -v "js"` ../dist
cd ..
