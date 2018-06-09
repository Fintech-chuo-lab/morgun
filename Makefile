.PHONY: docker-build
docker-build:
	docker build -t fintechlab/morgun ./

.PHONY:
docker-run:
	docker run -p 3000:3000 --rm=true -it -v $(pwd):/work -w /work fintechlab/morgun /bin/bash
