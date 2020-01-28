import { knex } from '../db';


type Job = {
    migrationId: number
    workerId: number
    status: "pending" | "running" | "failed" | "finished"
    createdAt?: Date
    updatedAt?: Date
}

const jobs = () => knex('logging');
const createJob = (parent : any, args : Job) => knex('jobs')
    .insert(args)
    .then(data => Promise.resolve({id: data[0]}))
export { jobs, createJob }
