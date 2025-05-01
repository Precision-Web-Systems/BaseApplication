
build:
	docker compose build

run:
	docker compose up -d

c:
	docker compose run -it --rm --entrypoint "bash -c" app bash

start:
	docker compose up -d

stop:
	docker compose down

restart: stop start

bun-install:
	docker compose run --rm app bun install

