#!/bin/sh

FoundFiles=`find . -name "*.sh" -not -executable`
if [ -z "$FoundFiles" ]; then
    echo "All files have -x applied."
else
    echo "* Files that don't have -x applied:"
    for i in $FoundFiles
    do
        echo "$i"
    done
    exit 1
fi