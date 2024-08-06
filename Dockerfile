# Stage 1: Build the Hugo site
FROM klakegg/hugo:ext-alpine AS builder

# Set the working directory inside the container
WORKDIR /site

# Copy the entire Hugo site into the container
COPY . .

# Build the Hugo site
RUN hugo --minify

# Stage 2: Serve the site with Nginx
FROM nginx:alpine

# Copy the built Hugo site from the builder stage to Nginx
COPY --from=builder /site/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]