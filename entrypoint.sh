#!/bin/sh

# Inject runtime env values into env.js
cat <<EOF > /usr/share/nginx/html/env.js
window._env_ = {
  REACT_APP_API_URL: "${REACT_APP_API_URL:-http://localhost:3001}"
};
EOF

exec "$@"