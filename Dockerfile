FROM node:alpine
WORKDIR /developer/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm","run","start"]