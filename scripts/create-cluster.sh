#!/bin/bash

eksctl create cluster \
--name capstone-cluster \
--node-type t3.medium \
--nodegroup-name capstone-nodegrp \
--version 1.20 \
--nodes 2 \
--managed

eksctl get cluster --name=capstone-cluster