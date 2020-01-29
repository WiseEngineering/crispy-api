import { knex } from '../db';

type Migration = {
    id: number
    name: string
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'migrations';

const migrations = () => knex(tableName);
const createMigration = (parent : any, args : Migration) => knex(tableName)
        .insert(args)
        .then(data => ({id : data[0]}));
const deleteMigration = (parent : any, args : Migration) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);

export { migrations, createMigration, deleteMigration }
