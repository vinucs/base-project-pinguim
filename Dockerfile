FROM node:18-alpine as builder

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

FROM node:18-alpine

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
ENV PORT=3000
ENV NODE_ENV=Production
RUN npm ci
# COPY --from=builder /app/dist ./dist
EXPOSE ${PORT}

CMD [ "npm", "run", "start:dev" ]