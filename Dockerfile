FROM klakegg/hugo:ext-alpine-onbuild AS hugo
ENV HUGO_ENV_ARG="production"

FROM nginx
COPY --from=hugo /target /usr/share/nginx/html
ENTRYPOINT [ "nginx","-g", "daemon off;" ]