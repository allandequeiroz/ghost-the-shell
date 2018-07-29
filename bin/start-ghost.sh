#!/usr/bin/env bash

cd /var/www/ghost
NODE_ENV=production knex-migrator init
NODE_ENV=production node index.js