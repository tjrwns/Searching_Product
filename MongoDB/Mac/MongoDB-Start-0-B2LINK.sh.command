#!/bin/sh
cd $(dirname $0)

echo "Kill process..."
pid=`lsof -i TCP:58781 | awk '/LISTEN/ {print $2}'`
if test -z "$pid"
then
	echo "Not running process!"
else
	echo "pid=$pid"
	kill -9 $pid
	echo "Kill process complete!"
fi

#echo "Remove log files..."
#rm -rf ./Log/B2LINK/0/*
#echo "Remove complete!"
mkdir -p Log/B2LINK/0

ulimit -n 2048 && ../../../Development-Binary-Mac/Binary/MongoDB/mongod --config ./Config/B2LINK/0.conf