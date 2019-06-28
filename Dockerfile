FROM ubuntu:18.04

ENV LC_ALL=C.UTF-8 \
    LANG=C.UTF-8

ADD . /src
WORKDIR /src

RUN set -exu && apt-get clean && apt-get -y update \
 && df -h \
 && apt-get -y install build-essential \
    npm \
    gcc \
    git \
    autoconf \
    automake \
    libtool \
    libc6-compat \
    g++ \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    bash \
    nasm \
    nginx \
    openssl \
 && chmod +x docker-*.sh \
 && ./docker-setup.sh \
 && apt-get -y clean


#RUN apk update \
# && apk upgrade \
# && apk add --virtual build-dependencies \
#    nodejs \
#    npm \
#    build-base \
#    gcc \
#    git \
#    autoconf \
#    automake \
#    libtool \
#    nasm \
#    util-linux \
# && apk add nginx \
#    openssl \
# && chmod +x docker-*.sh \
# && ./docker-setup.sh \
# && apk del build-dependencies \
# && rm -rf /var/cache/apk/*

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
