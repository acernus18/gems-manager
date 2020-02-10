FROM php:7.1-fpm
WORKDIR /var/www/html

COPY index.php composer.json composer.lock composer.phar ./
COPY src/ resources/ ./

RUN php composer.phar install