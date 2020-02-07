import { knex } from '../db';

type Worker = {
    id: number
    name: string
    endpoint: string
    apiKey: string
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'workers';

const workers = () => knex(tableName);
const createWorker = (parent : any, args : Worker) => knex(tableName)
    .insert(args)
    .then(data => Promise.resolve({id: data[0]}));
const deleteWorker = (parent : any, args : Worker) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);
const updateWorker = (parent : any, {id, ...data} : Worker) => knex(tableName)
    .where({id})
    .first()
    .then(row => ({...row, ...data, updated_at : new Date()}))
    .then(data => knex(tableName)
        .update(data)
        .then(() => ({id}))
    );

export { workers, createWorker, deleteWorker, updateWorker }
