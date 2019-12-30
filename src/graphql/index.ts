import { knex } from '../db';

type Migration = {
    name : string
}

type Logging = {
    name : string
    migrationId: number
}

type Worker = {
    name: string
    endpoint: string
    apiKey: string
}

const workers = () => knex('workers');
const migrations = () => knex('migrations');
const logging = () => knex('logging');
const createMigration = (parent : any, args : Migration) => knex('migrations').insert(args);
const createLog = (parent : any, args : Logging) => knex('logging').insert(args);
const createWorker = (parent : any, args : Worker) => knex('workers').insert(args);

const Query = {
    workers,
    migrations,
    logging
};

const Mutation = {
    createMigration,
    createLog,
    createWorker
};

const resolvers = { Query, Mutation };

export { resolvers }
