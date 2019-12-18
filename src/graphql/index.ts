import { knex } from '../db';

const users = () => knex('user');

const Query = {
    users,
};

const resolvers = { Query };

export { resolvers }
