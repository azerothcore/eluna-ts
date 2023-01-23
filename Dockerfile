FROM node:16-alpine

RUN mkdir -p /eluna-ts && chown -R node:node /eluna-ts

USER node

COPY --chown=node:node . /eluna-ts

# Create empty index file. It should be edited by the user
RUN touch /eluna-ts/modules/index.ts

WORKDIR /eluna-ts

RUN npm install
