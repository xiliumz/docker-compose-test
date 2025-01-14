FROM denoland/deno:alpine as builder

WORKDIR /app

COPY . /app

RUN deno task compile

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/dist/index /app/index

EXPOSE 8000

CMD ["/app/index"]
