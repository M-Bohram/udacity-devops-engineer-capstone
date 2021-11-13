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
- Helm

### Steps:
1. create EKS cluster using ```create-cluster.sh``` script in ```scripts``` directory.
2. deploy Jenkins using ```deploy.sh``` in ```jenkins-deployment``` directory, then follow the instructions to get the admin password and to login.
3. create the first pipeline using Blue Ocean plugin or using the traditional way, you have to create a personal access token (PAT) of your GitHub account containing at least repost and user.email scopes.
4. create a webhook in the GitHub repository so Jenkins will be notified with code changes.
5. after running the tests, delete the cluster using ```delete-cluster.sh``` script in ```scripts``` directory.

Please note that I removed the rule ```react/prop-types``` from ```eslintrc.json``` to fail the linter stage.

The deployment strategy used is the default of kubernetes which is ```rolling updates```.