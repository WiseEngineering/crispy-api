import {select, create, remove, update} from './index';

type Logging = {
    id: number
    name : string
    migrationId: number
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'logging';

const logging = () => select(tableName);
const createLog = (parent : any, args : Logging) => create(parent, args, tableName);
const deleteLog = (parent : any, args : Logging) => remove(parent, args, tableName);
const updateLog = (parent : any, args : Logging) => update(parent, args, tableName);

export { logging, createLog, deleteLog, updateLog }
