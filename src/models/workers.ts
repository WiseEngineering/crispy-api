import {create, remove, select, update} from "./index";

type Worker = {
    id: number
    name: string
    endpoint: string
    apiKey: string
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'workers';

const workers = () => select(tableName);
const createWorker = (parent : any, args : Worker) => create(parent, args, tableName);
const deleteWorker = (parent : any, args : Worker) => remove(parent, args, tableName);
const updateWorker = (parent : any, args : Worker) => update(parent, args, tableName);

export { workers, createWorker, deleteWorker, updateWorker }
