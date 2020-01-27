import OrganizationsService from '../../services/organizations.service';
import { Request, Response } from 'express';
import { logger } from '../../../common/logger';

export class Controller {
  async byId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const organization = await OrganizationsService.byId(id);
      if (organization) res.json(organization);
      else res.sendStatus(404);
    } catch (e) {
      req.log.error(e);
      res.sendStatus(500);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;
      const organization = await OrganizationsService.create(name);
      res.status(201).json({ organization });
    } catch (e) {
      req.log.error(e);
      res.sendStatus(500);
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const { name, lightswitch } = req.body;
      await OrganizationsService.update(id, name, lightswitch);
      logger.debug(lightswitch);
      res.sendStatus(204);
    } catch (e) {
      req.log.error(e);
      res.sendStatus(500);
    }
  }
}
export default new Controller();
