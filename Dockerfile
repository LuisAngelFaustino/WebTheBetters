FROM node:18.15.0 as build-step


RUN mkdir -p /app

WORkDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build


FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/webapp-the-betters /usr/share/nginx/html