import { workers, createWorker } from "../models/workers";
import { migrations, createMigration } from "../models/migrations";
import { logging, createLog } from "../models/logging";
import { jobs, createJob } from "../models/jobs";

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
    createJob
};

const resolvers = { Query, Mutation };

export { resolvers }
