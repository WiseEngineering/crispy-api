import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import'
import { resolvers } from "./graphql";

const typeDefs = importSchema('src/graphql/schema.graphql');
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });
app.use('/', express.static('public'));

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
