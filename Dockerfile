# Build frontend assets using a Node.js image
FROM node:14 AS asset-builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Use the official PHP image
FROM php:8.1-fpm

# Install system dependencies, PHP extensions, and Composer.
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-configure pdo_mysql \
    && docker-php-ext-install pdo pdo_mysql zip pdo_pgsql \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory.
WORKDIR /var/www/html

# Copy built assets from asset-builder
COPY --from=asset-builder /app/public /var/www/html/public

# Copy the rest of the application
COPY . .

# You can expose port 9000 for FPM if needed
EXPOSE 9000
