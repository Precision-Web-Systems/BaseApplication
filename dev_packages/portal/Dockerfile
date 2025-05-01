FROM bun:latest as base

RUN ORGANGE='\e[33m' \
    BLUE='\e[36m' \
    GREEN='\e[32m' \
    PURPLE='\e[35m' \
    RESET='\e[0m' \
    echo 'PS1="\[${ORGANGE}\][Precision] \[${BLUE}\]\w\[${RESET}\] \u \[${PURPLE}\](${CONTAINER_NAME}: \h)\[${RESET}\]$ "' >> ~/.bashrc



