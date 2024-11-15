FROM node:18-alpine AS builder

WORKDIR /app

COPY client/package*.json ./

RUN npm install --legacy-peer-deps

COPY client/ .

RUN npm run build

FROM nginx:alpine AS runtime

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
