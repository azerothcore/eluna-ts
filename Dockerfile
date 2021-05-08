FROM node:14-alpine

RUN mkdir -p /eluna-ts && chown -R node:node /eluna-ts

USER node

COPY --chown=node:node . /eluna-ts

WORKDIR /eluna-ts

RUN npm install