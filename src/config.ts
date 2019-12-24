import fs from "fs";

const usersDirectoryConfigPath = `${process.cwd()}/crispy.js`;

type MysqlAPI = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

type ServerAPI = {
  port: number;
};

export type Config = {
  mysql?: MysqlAPI;
  server?: ServerAPI;
};

let usersDirectoryConfig = {};

if (fs.existsSync(usersDirectoryConfigPath)) {
  usersDirectoryConfig = require(usersDirectoryConfigPath);
}

const defaultConfig = {
  mysql: {
    host: "mysql",
    port: 3306,
    user: "root",
    password: "crispy",
    database: "crispy"
  },
  server: {
    port: 4444
  }
} as Config;

export default { ...defaultConfig, ...usersDirectoryConfig };
