#!/bin/bash

eksctl create cluster \
--name capstone-cluster \
--version 1.20 \
--region us-west-2 \
--fargate

eksctl get cluster --name=capstone-cluster