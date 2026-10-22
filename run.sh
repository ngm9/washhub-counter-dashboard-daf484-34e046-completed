#!/usr/bin/env bash
# Starts the starter app's dev server on :5173 (the App Preview tab).
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v npm >/dev/null 2>&1; then
  echo "node/npm not found - installing Node.js 20"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash - >/dev/null
  apt-get install -y nodejs >/dev/null
fi

npm install --no-audit --no-fund --loglevel=error
chown -R user:user . 2>/dev/null || true

setsid nohup sudo -u user npm run dev > /tmp/app-dev.log 2>&1 < /dev/null &
for i in $(seq 1 90); do
  if curl -fsS -o /dev/null http://127.0.0.1:5173/; then
    echo "app dev server ready on :5173"
    exit 0
  fi
  sleep 1
done
echo "app dev server did not start on :5173"
tail -n 50 /tmp/app-dev.log || true
exit 1
