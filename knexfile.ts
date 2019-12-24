import * as knex from "knex";
import config from "./src/config";

const database = {
    client: "mysql",
    connection: config.mysql,
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
    },
} as knex.Config;

export = database;

