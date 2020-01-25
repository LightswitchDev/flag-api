import { Organization } from './organization.model';

export class OrganizationsService {
  async create(name?: string) {
    const organization = await Organization.create({ name });

    return organization.toJSON();
  }
  async byId(id: string) {
    const organization = await Organization.findByPk(id);
    return organization.toJSON();
  }

  async update(id: string, name: string) {
    await Organization.update({ name }, { where: { id }, limit: 1 });
  }
}

export default new OrganizationsService();
