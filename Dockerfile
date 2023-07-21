FROM nginx
ENV TimeZone=Asia/Shanghai    
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80