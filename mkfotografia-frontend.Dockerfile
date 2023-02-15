FROM nginx:1.18.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/mkfotografia /usr/share/nginx/html
