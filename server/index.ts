import './common/env';
import Server from './common/server';
import routes from './routes';

import { Sequelize, Model, DataTypes } from 'sequelize';
import { logger } from './common/logger';
import { uuid } from 'uuidv4';
import {
  OrganizationSchema,
  Organization,
} from './api/services/organization.model';

const port = parseInt(process.env.PORT);

const sequelize = new Sequelize(process.env.POSTGRESQL_URL);

sequelize
  .authenticate()
  .then(() => {
    Organization.init(OrganizationSchema, {
      sequelize,
      modelName: 'organization',
    });

    sequelize.sync({ force: true }); //set force for now

    const server = new Server();
    server.router(routes);
    server.listen(port);
  })
  .catch(e => {
    console.log('failed to connect to postgres');
    logger.error(e);
    process.exit(1);
  });

export { sequelize };
