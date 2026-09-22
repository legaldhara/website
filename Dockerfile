# Stage 1: Build Next.js frontend
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build  # no more export

# Stage 2: Serve with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out /usr/share/nginx/html/website
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
