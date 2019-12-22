import * as knex from "knex";
import { mySQLConfig } from "./src/config";

const database = {
    client: "mysql",
    connection: mySQLConfig,
    migrations: {
        directory: './migrations',
        tableName: 'knex_migrations'
    },
} as knex.Config;

export = database;

