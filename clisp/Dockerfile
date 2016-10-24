FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y wget clisp && \
    wget -O /quicklisp.lisp https://beta.quicklisp.org/quicklisp.lisp && \
    clisp -x "(load 'quicklisp) (quicklisp-quickstart:install)"
COPY .clisprc.lisp /root/.clisprc.lisp

VOLUME /sources