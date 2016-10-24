#!/bin/bash

sed -e "s/{{BACKGROUND_COLOR}}/$BACKGROUND_COLOR/g" \
	-e "s/{{MESSAGE}}/$MESSAGE/g" \
	< /index.template > /site/index.html

python -m SimpleHTTPServer 8000