import { Model, DataTypes } from 'sequelize';
import { uuid } from 'uuidv4';
import APIKey from 'uuid-apikey';

class Organization extends Model {
  id!: string;
  name: string | null;
  key!: string;
  lightswitches: Lightswitch[];
}

export type Lightswitch = {
  name: string;
  key: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  enabled: true;
};

const OrganizationSchema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: function() {
      return uuid();
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lightswitches: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  key: {
    type: DataTypes.STRING,
    unique: true,
    defaultValue: function() {
      return APIKey.create().apiKey;
    },
    allowNull: false,
  },
};

export { Organization, OrganizationSchema };
