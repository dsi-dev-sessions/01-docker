FROM debian:latest

RUN apt-get update && \
	apt-get install -y python && \
	rm -rf /var/lib/apt/lists/*

EXPOSE 8000

RUN mkdir -p /site
COPY index.template entrypoint.bash /
RUN chmod +x /entrypoint.bash

WORKDIR /site

ENTRYPOINT ["/entrypoint.bash"]