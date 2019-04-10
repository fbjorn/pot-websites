#!/bin/sh
set -euxo pipefail

if [ -z "${MARKETING_HOST:-}" ]; then
  MARKETING_HOST="marketing.example.host"
fi

sed -i 's/$MARKETING_HOST/'"${MARKETING_HOST}"'/g' /etc/nginx/sites/*.conf

nginx -c /etc/nginx/nginx.conf -g "daemon off;"
