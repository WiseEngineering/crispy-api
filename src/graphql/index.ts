import { workers, createWorker } from "../models/workers";
import { migrations, createMigration } from "../models/migrations";
import { logging, createLog } from "../models/logging";

const Query = {
    workers,
    migrations,
    logging
};

const Mutation = {
    createMigration,
    createLog,
    createWorker
};

const resolvers = { Query, Mutation };

export { resolvers }
