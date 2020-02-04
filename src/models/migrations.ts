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
    .then(data => Promise.resolve({id: data[0]}));
const deleteMigration = (parent : any, args : Migration) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);
const updateMigration = (parent : any, {id, ...data} : Migration) => knex(tableName)
    .where({id})
    .first()
    .then(row => ({...row, ...data, updated_at : new Date()}))
    .then(data => knex(tableName)
        .update(data)
        .then(() => ({id}))
    );

export { migrations, createMigration, deleteMigration, updateMigration }
