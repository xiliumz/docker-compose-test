FROM node:22.12.0-alpine as builder

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn build

FROM node:22.12.0-alpine

RUN npm i -g serve

WORKDIR /app

COPY --from=builder /app/dist /app

EXPOSE 3000

CMD ["serve", "."]
