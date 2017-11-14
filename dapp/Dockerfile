
FROM node:latest

EXPOSE 3000

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN rm -rf node_modules src/contracts
RUN npm install -g yarn

RUN yarn global add truffle
RUN yarn install 
CMD RPC_HOST=testrpc truffle migrate && yarn move-contracts && yarn start