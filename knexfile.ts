import * as knex from "knex";
require('dotenv').config();

const database = {
    client: "mysql",
    connection:{
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
    },
} as knex.Config;

export = database;

