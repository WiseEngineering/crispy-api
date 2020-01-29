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
        .then(data => ({id : data[0]}));
const deleteLog = (parent : any, args : Logging) => knex(tableName)
        .insert(args)
        .then(data => ({id : data[0]}));

export { logging, createLog, deleteLog }
