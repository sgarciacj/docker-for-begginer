# Repository: docker-for-begginer
Docker for Beginners [Slides](https://docs.google.com/presentation/d/1euIO5LdVFxdc94jRNOI4yJFAkCOkwOFL-Pkse_RohW4/edit#slide=id.p21)
## Most used Docker Commands
Test Docker:
- `docker run hello-world`
- `docker version`
- `docker info`
- `docker --help`

Images:
- Pull Image: `docker pull busybox` or `docker image pull node:latest`
- Image List: `docker image ls`
- Delete image: `docker image rmi node` (image name or image id)
- Run Image: `docker run busybox` (image name or image id)
- Run Image and parameters: `docker run busybox echo "hello from busybox"` (image name or image id)
- Tag Image: `docker tag image_name:tag new_image_name:new_tag`
- Push new Image: `docker push new_image_name:new_tag`

Containers:
- List Container: `docker container ps` or `docker ps`
- List all Container even inactives: `docker ps -a`
- Stop container: `docker container stop node` (container name or container id)
- Delete container: `docker container rm node` (container name or container id)
- Run/Create Container: `docker container run –d –p 5000:5000 –name node node:latest`

Networking:
- Create Network: `docker network create --attachable beginnersnet`

Volumes: 
- Create volume associated to an image: `docker volume create --name postgres_data`

Combine: Container, Network and Volume based on https://hub.docker.com/_/postgres

`docker run -d --name postgresdb --network beginnersnet --restart always -e POSTGRES_USER=myadmin -e POSTGRES_PASSWORD=mypassword -v ~/postgresql:var/lib/postgresql -v postgresql_data:/var/lib/postgresql/data postgres:12.1-alpine`
- To start a container in detached mode or foreground running, you use -d=true or just `-d`
- Add environment variable: `-e`
- Add volume: `-v`
- Add port: `-p host_port:container_port`

## Dockerfile
Working with Dockerfile.
Build Image with Dockerfile
Go to project folder and run the following commands:
- `docker build .`
- `docker build -t node-web-app:sandy.garcia .`
- `docker run -d --name node-web-app -p 9090:8080 node-web-app:sandy.garcia`
- `docker ps`
- `docker stop node-web-app`

Docker.hub: https://hub.docker.com/repository/docker/ragyd/node-web-app
Example upload an image to Docker Hub
- `docker login`
- `docker tag node-web-app:sandy.garcia ragyd/node-web-app:begginers`
- `docker push ragyd/node-web-app:begginers`
Example Pull image:
- `docker pull ragyd/node-web-app:begginers`
