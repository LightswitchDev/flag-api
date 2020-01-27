import { Organization, Lightswitch } from './organization.model';
import { logger } from '../../common/logger';

export class OrganizationsService {
  async create(name?: string): Promise<Organization> {
    const organization = await Organization.create(
      {
        name,
      },
      { raw: true }
    );
    return organization;
  }
  async byId(id: string): Promise<Organization> {
    const organization = await Organization.findByPk(id, { raw: true });
    return organization;
  }

  async update(id: string, name?: string, lightswitch?: Lightswitch) {
    const org = await this.byId(id);
    if (!org) return;

    const lightswitches = lightswitch
      ? [
          ...org.lightswitches.filter(ls => ls.key !== lightswitch.key),
          lightswitch,
        ]
      : org.lightswitches;

    await Organization.update(
      {
        name,
        lightswitches,
      },
      { where: { id }, limit: 1 }
    );
    return { ...org, lightswitches };
  }
}

export default new OrganizationsService();
