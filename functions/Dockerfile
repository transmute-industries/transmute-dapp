FROM node:latest

RUN npm install -g yarn

RUN mkdir -p /usr/src/app

COPY . /usr/src/app/functions
WORKDIR /usr/src/app/functions
RUN yarn install

WORKDIR /usr/src/app
RUN yarn global add transmute-cli@latest

