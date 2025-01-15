FROM denoland/deno:alpine AS builder

WORKDIR /app

COPY . /app

RUN deno task compile

FROM gcr.io/distroless/cc

WORKDIR /app

COPY --from=builder /app/dist /app

EXPOSE 8000

CMD ["./main"]
