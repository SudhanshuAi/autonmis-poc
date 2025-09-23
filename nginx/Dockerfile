# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy your custom nginx.conf file from your repository
# into the correct location inside the container.
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Tell Docker that the container will listen on port 80
EXPOSE 80