import { Request, Response } from 'express';
import auth from 'basic-auth';
import OrganizationsService from '../../services/organizations.service';

export class Controller {
  async getSwitches(req: Request, res: Response) {
    try {
      const { name: clientId, pass: apiKey } = auth(req) ?? {};
      if (!clientId || !apiKey) return res.sendStatus(403);

      const { lightswitches, key } = await OrganizationsService.byId(clientId);
      if (!key) return res.sendStatus(403);
      const hasValidKey = key === apiKey;
      if (!hasValidKey) return res.sendStatus(403);

      return res.json({ lightswitches });
    } catch (e) {
      console.error(e);
      return res.sendStatus(500);
    }
  }
}
export default new Controller();
