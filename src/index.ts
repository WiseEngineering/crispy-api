import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import'
import { resolvers } from "./graphql";
import { serverConfig } from "./config";

const typeDefs = importSchema('src/graphql/schema.graphql');
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });
app.use('/', express.static('public'));

app.listen(serverConfig.port, () =>
  console.log(`App listening on port ${serverConfig.port}!`)
);
