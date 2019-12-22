require('dotenv').config();

export const mySQLConfig = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    rootPassword: process.env.MYSQL_ROOT_PASSWORD,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
};

export const serverConfig = {
    port: process.env.SERVER_PORT || 4000,
};
