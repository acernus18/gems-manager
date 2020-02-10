FROM php:7.1-fpm
WORKDIR /var/www/html

COPY index.php composer.json ./
COPY src/ resources/ ./

RUN docker-php-ext-install pdo_mysql sockets \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug
RUN php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');" \
    && php composer-setup.php && php composer.phar install