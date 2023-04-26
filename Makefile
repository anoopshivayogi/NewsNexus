# Define the name of the docker-compose file
DOCKER_COMPOSE_FILE = docker-compose.yml

# Define the name of the docker-compose service
DOCKER_COMPOSE_SERVICE = mongodb

# Define the name of the docker-compose project
PROJECT_NAME = newsnexus

# Define the container_id by filtering out
CONTAINER_ID=$(shell docker ps -q --filter "name=$(PROJECT_NAME)-mongodb-1")

# Start the container in detached mode
up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d $(DOCKER_COMPOSE_SERVICE)

# Stop the container
down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down --remove-orphans

# Restart the container
restart:
	docker-compose -f $(DOCKER_COMPOSE_FILE) restart $(DOCKER_COMPOSE_SERVICE)

# Display the logs from the container
logs:
	docker-compose -f $(DOCKER_COMPOSE_FILE) logs -f $(DOCKER_COMPOSE_SERVICE)

# Run a command inside the container
exec:
	docker exec -it $(CONTAINER_ID) sh

# docker prune: used to clear all the stale containers, images, volumes, networks
prune:
	docker system prune -a