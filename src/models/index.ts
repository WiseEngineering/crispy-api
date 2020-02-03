import { knex } from '../db';

const select = (tableName: string) => knex(tableName);
const create = (parent : any, args : any, tableName: string) => knex(tableName)
    .insert(args)
    .then(data => Promise.resolve({id: data[0]}));
const remove = (parent : any, args : any, tableName: string) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);
const update = (parent : any, {id, ...data} : any, tableName: string) => knex(tableName)
    .where({id})
    .first()
    .then(row => ({...row, ...data, updated_at : new Date()}))
    .then(data => knex(tableName)
        .update(data)
        .then(() => ({id}))
    );

export { select, create, remove, update }
