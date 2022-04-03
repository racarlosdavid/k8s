# K8s-Code

## Creacion de las imagenes de los contenedores

`docker build -t "racarlosdavid/k8s_backend" ./backend`

`docker build -t "racarlosdavid/k8s_frontend" ./pokedex`

## Prueba de los contenedores
`docker run -d -p 2000:2000 --name k8s_backend racarlosdavid/k8s_backend`

`docker run -d -p 80:80 --name k8s_frontend racarlosdavid/k8s_frontend`

## Subir contenedores a dockerhub
`docker login`

`docker push racarlosdavid/k8s_backend`

`docker push racarlosdavid/k8s_frontend`

## Creacion del cluster
gcloud config get-value project
gcloud config set project
gcloud config set compute/zone us-central1-a
gcloud container clusters create cluster-k8s-conferencia --num-nodes=2 --tags=all-in,all-out --machine-type=n1-standard-2 --no-enable-network-policy

## Instalacion de Ingress
`helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx`

`helm repo update`

`helm install ingress-nginx ingress-nginx/ingress-nginx`

## Kubernetes

`kubectl apply -f deployment.yml`

`kubectl apply -f ingress.yml`

`kubectl get services`

`kubectl get pods`

`kubectl get pods -o wide`

`kubectl describe pod <NOMBRE DEL POD>`

