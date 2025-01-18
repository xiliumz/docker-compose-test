# Stage 1: Build the React app
FROM node:22.12.0-alpine AS builder

WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

# Stage 2: Serve the app with Nginx
FROM nginx:1.21-alpine

# Copy the build output to Nginx's HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
