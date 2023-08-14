
FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive


RUN apt-get update && \
    apt-get install -y curl jq openjdk-17-jdk npm


WORKDIR /app


COPY . /app


RUN npm install


CMD npm run build && npm run start
