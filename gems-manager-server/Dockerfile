FROM php:7.1-fpm
WORKDIR /var/www/html
COPY index.php composer.json composer.lock composer.phar ./
COPY src/ resources/ ./
RUN docker-php-ext-install pdo pdo_mysql json xdebug
RUN php composer.phar install