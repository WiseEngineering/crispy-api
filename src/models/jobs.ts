import { knex } from '../db';

type Job = {
    id: number
    migrationId: number
    workerId: number
    status: "pending" | "running" | "failed" | "finished"
    createdAt?: Date
    updatedAt?: Date
}

const tableName = 'jobs';

const jobs = () => knex(tableName);
const createJob = (parent : any, args : Job) => knex(tableName)
    .insert(args)
    .then(data => Promise.resolve({id: data[0]}));
const deleteJob = (parent : any, args : Job) => knex(tableName)
    .where(args)
    .del()
    .then(() => args);
const updateJob = (parent : any, {id, ...data} : Job) => knex(tableName)
    .where({id})
    .first()
    .then(row => ({...row, ...data, updated_at : new Date()}))
    .then(data => knex(tableName)
        .update(data)
        .then(() => ({id}))
    );

export { jobs, createJob, deleteJob, updateJob }
