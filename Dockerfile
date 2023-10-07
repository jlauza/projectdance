# Use the official PHP image
FROM php:8.1-fpm

# Install system dependencies, PHP extensions, and Composer.
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo pdo_mysql zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && apt-get clean && rm -rf /var/lib/apt/lists/* \
    && npm run production

# Set the document root to the public directory of your Laravel app.
# This is to align with the structure of a typical Laravel app.
WORKDIR /var/www/html
COPY . .
RUN mv public html

# Expose port 80 for Apache.
EXPOSE 80
