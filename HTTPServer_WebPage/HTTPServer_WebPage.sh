#!/bin/sh
cd $(dirname $0)

kill -9 `lsof -i TCP:49781 | awk '/LISTEN/ {print $2}'`

../../Development-Binary-Linux-Ubuntu/Binary/NodeJS/exes100 ./HTTPServer_WebPage.js 49781
