#!/usr/bin/env bash


# run Kafka  with podman as standalone or in the pod


IMAGE="quay.io/strimzi/kafka:latest-kafka-3.1.0-amd64"

#POD=sso
uid=$(id -u)
USER_ID=uid

#SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
SCRIPT_DIR=`dirname "$0"`



## get UID
uid=$(id -u)
run_kafka(){
echo "run container as user $uid"
echo "using docker image: $IMAGE"
if [ -z "$1" ]
  then
    echo "No POD name as argument run standalone"
    podman run --rm  -u $uid  --name   kafka-zkless -p 9092:9092 -e LOG_DIR=/tmp/logs $IMAGE /bin/sh -c 'export CLUSTER_ID=$(bin/kafka-storage.sh random-uuid) && bin/kafka-storage.sh format -t $CLUSTER_ID -c config/kraft/server.properties && bin/kafka-server-start.sh config/kraft/server.properties'


 else
    echo "joining pod: $1"


fi

}


run_kafka



