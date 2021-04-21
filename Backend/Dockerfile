FROM node:15.14.0-alpine3.10

COPY ./package*.json ./

RUN npm ci

COPY ./ .

CMD ["npm", "start"]