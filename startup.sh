#!/bin/sh

# Copy .env.example to .env if .env does not exist
if [ ! -f .env ]; then
  cp .env.example .env
fi

composer install --no-interaction

# Generate application key
php artisan key:generate

php artisan migrate --force
php artisan migrate:fresh --seed --force

npm install
npm run build

composer run dev-docker