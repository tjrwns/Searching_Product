#!/bin/sh
cd $(dirname $0)

#——————————————————————————————————————————————————;
#권한;
#——————————————————————————————————————————————————;
./chmod.sh.command

#——————————————————————————————————————————————————;
#WebPage;
#——————————————————————————————————————————————————;

../WebPage/root/bin_linux/__BuildAll-Dev.sh.command

#——————————————————————————————————————————————————;