FROM node as builder
WORKDIR /app

COPY . .
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
