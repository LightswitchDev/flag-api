import { Sequelize } from 'sequelize';
import {
  Organization,
  OrganizationSchema,
} from './api/services/organization.model';
import './common/env';
import { logger } from './common/logger';
import Server from './common/server';
import routes from './routes';

const port = parseInt(process.env.PORT);
const sequelize = new Sequelize(process.env.POSTGRESQL_URL);

sequelize
  .authenticate()
  .then(() => {
    Organization.init(OrganizationSchema, {
      sequelize,
      modelName: 'organization',
    });

    sequelize.sync({ force: false }); //set force for now

    const server = new Server();
    server.router(routes);
    server.listen(port);
  })
  .catch(e => {
    console.log('failed to connect to postgres');
    logger.error(e);
    process.exit(1);
  });
