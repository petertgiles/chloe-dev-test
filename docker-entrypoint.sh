#!/bin/sh

# Copy .env.example to .env if .env does not exist
if [ ! -f .env ]; then
  cp .env.example .env
fi

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate:fresh --seed --force

# Execute the main container command
exec "$@"