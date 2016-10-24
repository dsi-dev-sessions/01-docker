FROM debian:latest

RUN apt-get update && \
	apt-get install -y nodejs npm && \
	rm -rf /var/lib/apt/lists/*

COPY index.js package.json /app/

WORKDIR /app

RUN npm install

ENTRYPOINT ["nodejs", "index.js"]