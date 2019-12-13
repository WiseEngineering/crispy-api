import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { Context } from './utils'

const resolvers = {
  Query: {
    getAll(parent, args, context: Context): object {
      return context.prisma.users()
    }
  },
  Mutation: {
    createUser(parent, { name }, context: Context): object {
      return context.prisma.createUser({ name })
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
