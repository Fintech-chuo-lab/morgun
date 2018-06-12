.PHONY: docker-build
docker-build:
	docker build -t fintechlab/morgun ./

.PHONY:
docker-run:
	sh ./docker-run.sh
