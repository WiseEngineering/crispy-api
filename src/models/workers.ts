import { knex } from '../db';

type Worker = {
    name: string
    endpoint: string
    apiKey: string
    createdAt?: Date
    updatedAt?: Date
}

const workers = () => knex('workers');
const createWorker = (parent : any, args : Worker) =>
    knex('workers')
        .insert(args)
        .then(data => Promise.resolve({id : data[0]}));

export { workers, createWorker }
