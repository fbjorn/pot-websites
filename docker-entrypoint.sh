#!/bin/sh
set -euxo pipefail

# TODO: If necessary, update configs to contain e.g. access tokens to services
# TODO: etc. from environment variables or mounted secrets.

nginx -c /etc/nginx/nginx.conf -g "daemon off;"
