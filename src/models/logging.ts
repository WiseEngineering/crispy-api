import { knex } from '../db';

type Logging = {
    id: number
    name : string
    migrationId: number
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'logging';

const logging = () => knex(tableName);
const createLog = (parent : any, args : Logging) => knex(tableName)
    .insert(args)
    .then(data => Promise.resolve({id: data[0]}));
const deleteLog = (parent : any, args : Logging) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);
const updateLog = (parent : any, {id, ...data} : Logging) => knex(tableName)
    .where({id})
    .first()
    .then(row => ({...row, ...data, updated_at : new Date()}))
    .then(data => knex(tableName)
        .update(data)
        .then(() => ({id}))
    );

export { logging, createLog, deleteLog, updateLog }
