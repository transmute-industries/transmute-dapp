
FROM node:latest

EXPOSE 3000

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g yarn

RUN yarn global add truffle
RUN yarn install 
CMD yarn start
