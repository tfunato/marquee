FROM node:8.11.3-alpine

WORKDIR /srv/marquee

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./app ./app
RUN npm install --production
