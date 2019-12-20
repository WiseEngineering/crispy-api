import { knex } from '../db';

const users = () => knex('users');

const Query = {
    users,
};

const resolvers = { Query };

export { resolvers }
