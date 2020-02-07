import { workers, createWorker, deleteWorker, updateWorker } from "../models/workers";
import { migrations, createMigration, deleteMigration, updateMigration } from "../models/migrations";
import { logging, createLog, deleteLog, updateLog } from "../models/logging";
import { jobs, createJob, deleteJob, updateJob } from "../models/jobs";

const Query = {
    workers,
    migrations,
    logging,
    jobs
};

const Mutation = {
    createMigration,
    createLog,
    createWorker,
    createJob,
    deleteJob,
    deleteWorker,
    deleteMigration,
    deleteLog,
    updateJob,
    updateWorker,
    updateMigration,
    updateLog
};

const resolvers = { Query, Mutation };

export { resolvers }
