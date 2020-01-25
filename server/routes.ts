import { Application } from 'express';
import organizationsRouter from './api/controllers/organizations/router';
import switchesRouter from './api/controllers/switches/router';

export default function routes(app: Application): void {
  app.use('/v1/organizations', organizationsRouter);
  app.use('/v1/switches', switchesRouter);
}
