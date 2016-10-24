FROM debian:latest

RUN apt-get update && \
	apt-get install -y python && \
	rm -rf /var/lib/apt/lists/*

EXPOSE 8000

RUN mkdir -p /site
COPY index.html /site

WORKDIR /site

ENTRYPOINT ["python", "-m", "SimpleHTTPServer"]