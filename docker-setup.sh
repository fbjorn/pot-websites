#!/bin/sh

echo "The build environment consists of the following files:"
find /src

set -euxo pipefail

# Clean up any defaults
rm -rf /etc/nginx/nginx.conf /etc/nginx/conf.d /var/lib/nginx /var/www

# Set up Nginx folders
mkdir -p /run/nginx
mkdir -p /var/www
mkdir -p /var/log/nginx
mkdir -p /var/lib/nginx/logs

# And non-root user for Nginx to run as
adduser -D -g www www

# Set up Nginx configuration in place
cp -r /src/nginx/* /etc/nginx

# Build the contents to be published
cd /src/developers-site
npm install
npm run build

# Publish everything necessary
cd /src/developers-site/public/
cp -r . /var/www/
cp -r /src/cmsadmin /var/www/

# Set permissions
chown -R www:www /var/www /var/log/nginx /var/lib/nginx/logs

# Clean up files not needed in final container
rm -rf /src/gatsby /src/nginx /src/cmsadmin /root/.npm /tmp/* /src/.git
rm -rf /src/*.md /src/docs /src/Dockerfile
rm -rf /src/.github /src/LICENSE


# Show in logs what we're publishing
set +x

cd /var/www
echo "Ready to publish the following:"
find .