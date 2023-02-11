###### Install dependencies only when needed ######
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

######  Use NgInx alpine image  ######
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/phone-book-client /usr/share/nginx/html

EXPOSE 80

