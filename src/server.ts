import { config } from 'dotenv';
config();
console.log(process.env.POSTGRESQL_URL);

import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';
import getSwitchesWithAuthHeader from './controllers/switches';
import * as cors from 'cors';

const server = new GraphQLServer({ schema, context: createContext });
server.express.use(cors());
server.express.get('/switches', getSwitchesWithAuthHeader);

server.start(
  { port: 8080 },

  () =>
    console.log(
      `🚀 Server ready at: http://localhost:8080\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#5-using-the-graphql-api`,
    ),
);
