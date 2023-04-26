SHELL := /bin/bash

run: build

# docker
build:
	docker-compose build && \
	docker-compose up -d

down:
	docker-compose down --remove-orphans

# docker logs
logs:
	docker-compose logs -f


# docker exec
exec:
	docker-compose exec flask sh

# docker prune: used to clear all the stale containers, images, volumes, networks
prune:
	docker system prune -a