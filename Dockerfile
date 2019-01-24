FROM alpine:3.8

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

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
    util-linux

# Not in build-dependencies
RUN apk add --no-cache nginx

ADD gatsby-pot-dev /src/gatsby-pot-dev
ADD cmsadmin /src/cmsadmin
ADD nginx /src/nginx
ADD docker-entrypoint.sh /src
ADD docker-setup.sh /src

WORKDIR /src
RUN chmod +x docker-*.sh && ./docker-setup.sh

RUN apk del build-dependencies

EXPOSE 8080

ENTRYPOINT ["./docker-entrypoint.sh"]
