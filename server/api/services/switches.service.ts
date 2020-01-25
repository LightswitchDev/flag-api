const SwitchTypes = ['Boolean', 'Multi'];

type SwitchType = typeof SwitchTypes[number];

export interface Switch {
  id: string;
  name: string;
  key: string;
  type: SwitchType;
  createdAt: Date;
  updatedAt: Date;
}

export class SwitchesService {
  update(lightswitch: Switch): Switch[] {
    return [];
  }
}

export default new SwitchesService();
