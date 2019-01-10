#!/usr/bin/env bash

# Si vous devez être vert  ./run -g "commit message"

function commit() {
    git add . && \
    git commit --allow-empty-message -m "$1"
}


function revert() {
    git reset --hard
    git clean -f
}

function tests() {
    mvn clean install
}

MESSAGE="$2"

key="$1"
case ${key} in
    -g)
    tests && commit ${MESSAGE} || revert
        ;;
    -r)
    tests && revert || commit ${MESSAGE}
        ;;
    *)
     echo "./run -g 'mon message commit' # si vous pensez que le build passe"
     echo "./run -r 'mon message commit' # si vous pensez que le build ne passe pas"
        ;;
esac