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
        .then(data => ({id : data[0]}));
const deleteWorker = (parent : any, args : Worker) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);


export { workers, createWorker, deleteWorker }
