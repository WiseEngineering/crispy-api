import {select, create, remove, update} from './index';

type Job = {
    id: number
    migrationId: number
    workerId: number
    status: "pending" | "running" | "failed" | "finished"
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'jobs';

const jobs = () => select(tableName);
const createJob = (parent : any, args : Job) => create(parent, args, tableName);
const deleteJob = (parent : any, args : Job) => remove(parent, args, tableName);
const updateJob = (parent : any, args : Job) => update(parent, args, tableName);

export { jobs, createJob, deleteJob, updateJob }
