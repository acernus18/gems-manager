FROM node as builder
WORKDIR /app

COPY . .
RUN npm install --registry=https://registry.npm.taobao.org && npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html