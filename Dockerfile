FROM node:16.6.2-alpine3.11 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD node app.js
