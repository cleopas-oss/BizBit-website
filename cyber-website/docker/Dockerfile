# Use nginx alpine for lightweight production serving
FROM nginx:alpine

# Copy custom nginx config
COPY nginx/default.conf /etc/nginx/nginx.conf

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/*

# Copy website files to nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]