#!/bin/bash

docker compose stop
docker compose rm -f
docker compose pull
TMPDIR=/private$TMPDIR docker compose up -d

echo 'Starting LocalStack '
until $(curl --silent --fail http://localhost:4566/health | grep "\"starting\"" > /dev/null)
do
  printf '.'
  sleep 5
done
echo ' Ready!'
