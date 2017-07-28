#!/bin/bash

echo -e "Content-type: text/html\n"

OUTPUT+=$(git fetch origin 2>&1)$'\n\n'
if [ $? -eq 0 ]; then
	OUTPUT+=$(git reset --hard origin/master 2>&1)$'\n\n'
fi

echo "$OUTPUT" | mail "orgpsmf2017@gmail.com" "me@apophis.cz" -s "[PSMF2017-web] Deploy status"
