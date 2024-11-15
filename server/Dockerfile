FROM node:18-alpine AS builder

WORKDIR /app

COPY server/package*.json ./

RUN npm install --only=production

COPY server/ . 

FROM node:18-alpine AS runtime

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["node", "index.js"]
