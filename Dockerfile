FROM node:14-alpine

RUN mkdir -p /opt/application && chown -R node:node /opt/application

USER node

COPY --chown=node:node . /opt/application

WORKDIR /opt/application

RUN npm install