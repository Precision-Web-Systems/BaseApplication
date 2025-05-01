
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

install:
	$(MAKE) bun-install

bun-install:
	./bin/bash app bun install

direnv-install:
	brew install direnv

direnv-enable:
	direnv allow

direnv-disable:
	direnv deny
