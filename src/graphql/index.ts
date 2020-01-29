import { workers, createWorker, deleteWorker } from "../models/workers";
import { migrations, createMigration, deleteMigration } from "../models/migrations";
import { logging, createLog, deleteLog } from "../models/logging";
import { jobs, createJob, deleteJob } from "../models/jobs";

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
};

const resolvers = { Query, Mutation };

export { resolvers }
