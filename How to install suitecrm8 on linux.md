# How to install suitecrm 8 on linux like ubuntu

    apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

## Install angular cli with npm

    npm install -g @angular/cli

## Install yarn globally with npm

    npm install --global yarn


## Now clone the existing repo or download the fresh source code.

fresh install.

    https://suitecrm.com/suitecrm/files/SuiteCRM-8.0.3.zip

existig repo.

    git clone https://github.com/junaidgemini/suitecrm8.git 


## Quick Start Guide
For System Requirements see the compatibility matrix here

## Pre-Installation

Setup php, mysql and apache

Please make sure that your apache has mod_rewrite enabled and that it is properly configured to allow for re-writes. All SuiteCRM-Core api calls depend on this (calls to api/graphql) if re-rewrites are not allowed you will get a 404 when calling the api.

1. Install composer

2. Install node and npm

3. Install angular cli

Install yarn: (https://yarnpkg.com/getting-started/install)

## Installation

Run composer install in the root directory
    **composer install**

Run yarn install in the root directory **yarn install**

## Set permissions (though these may need to be different depending on your setup)

    find . -type d -not -perm 2775 -exec chmod 2775 {} \;

    find . -type f -not -perm 0644 -exec chmod 0644 {} \;

    find . \! -user www-data -exec chown www-data:www-data {} \;

    chmod +x bin/console
