# Capstone Project for DevOps Engineer Nanodegree

The project can be broken down into two parts: the application itself, and the infrastructure that deploys and hosts it.

## Application

It is a very simple e-commerce application written in JavaScript and using the React library

## Infrastructure

All of the deployment steps are automated - they are run in a Jenkins pipeline that can be triggered whenever new code is added.

After provisioning the EKS cluster using Fargate, here's what I configured Jenkins to do:

1. Install the dependencies and build the application
2. Lint the code
3. Build a Docker image and pushes it to my Docker Hub Registry
4. Deploy the application to the AWS EKS cluster (Rollout updates is the default)

In the end, the app is deployed to the cluster and accessible to users.

## Tools that I used to build the project

- JavaScript
- React
- AWS
- Jenkins
- Docker
- Kubernetes
