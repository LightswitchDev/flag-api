import SwitchesService from '../../services/switches.service';
import { Request, Response } from 'express';
import { Switch } from '../../services/switches.service';

export class Controller {
  update(req: Request, res: Response): void {
    try {
      const lightswitch: Switch = req.body;
      const organization = SwitchesService.update(lightswitch);
      res.status(201).json({ organization });
    } catch (e) {
      req.log.error(e);
      res.sendStatus(500);
    }
  }
}
export default new Controller();
