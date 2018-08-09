IMAGE_TAG='marquee:latest'

build:
	docker build -t ${IMAGE_TAG} .
run:
	docker run --name maquee -p 3000:3000 -it marquee:latest npm run start
