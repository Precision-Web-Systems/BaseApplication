
build:
	docker compose build

run:
	docker compose up -d

c:
	docker compose run -it --rm --entrypoint "bash -c" app bash