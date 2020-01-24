import { config } from 'dotenv';
config();
console.log(process.env.POSTGRESQL_URL);

import { GraphQLServer } from 'graphql-yoga';
import { schema } from './schema';
import { createContext } from './context';
import getSwitchesWithAuthHeader from './controllers/switches';
import * as cors from 'cors';
import { Client } from 'pg';

const client = new Client({ connectionString: process.env.POSTGRESQL_URL });
const p = client.connect();
p.then(() => {
  const server = new GraphQLServer({ schema, context: createContext });
  server.express.use(cors());
  server.express.get('/switches', getSwitchesWithAuthHeader);

  server.start(() =>
    console.log(
      `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#5-using-the-graphql-api`,
    ),
  );
});
