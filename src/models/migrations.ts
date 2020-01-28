import { knex } from '../db';

type Migration = {
    name : string
    createdAt?: Date
    updatedAt?: Date
}

const migrations = () => knex('migrations');
const createMigration = (parent : any, args : Migration) =>
    knex('migrations')
        .insert(args)
        .then(data => Promise.resolve({id : data[0]}));

export { migrations, createMigration }
