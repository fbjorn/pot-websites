FROM alpine:3.8

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

ADD . /src
WORKDIR /src

RUN apk add --update --no-cache --virtual build-dependencies \
    nodejs \
    npm \
    build-base \
    gcc \
    git \
    autoconf \
    automake \
    libtool \
    nasm \
    util-linux \
 && apk add --no-cache nginx \
 && chmod +x docker-*.sh \
 && ./docker-setup.sh \
 && apk del build-dependencies

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
