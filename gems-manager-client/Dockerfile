FROM node as builder
WORKDIR /app

COPY . .
RUN npm install --registry=https://registry.npm.taobao.org && npm run build