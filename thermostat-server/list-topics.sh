#!/usr/bin/env bash



oc run kafka-producer -ti \
--image=registry.redhat.io/amq7/amq-streams-kafka-31-rhel8:2.1.0 \
--rm=true \
--restart=Never \
-- bin/kafka-topics.sh \
--bootstrap-server my-cluster-kafka-bootstrap:9092 \
--list

# or just list it with oc
# oc get KafkaTopics
