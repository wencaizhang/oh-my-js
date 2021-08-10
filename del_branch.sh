#!/usr/bin/env sh

cat ./branch.txt | while read line
do
	git push origin :${line}
	# echo ${line}
done