FROM node:12.18.3-alpine as builder

WORKDIR /app

COPY  package.json /app/

RUN npm install

COPY ./ /app

RUN npm run build --prod

FROM nginx:1.18.0-alpine

COPY --from=builder /app/dist/scp-frontend /usr/share/nginx/html
