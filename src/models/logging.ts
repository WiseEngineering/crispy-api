import { knex } from '../db';

type Logging = {
    name : string
    migrationId: number
    createdAt?: Date
    updatedAt?: Date
}

const logging = () => knex('logging');
const createLog = (parent : any, args : Logging) =>
    knex('logging')
        .insert(args)
        .then(data => Promise.resolve({id : data[0]}));

export { logging, createLog }
