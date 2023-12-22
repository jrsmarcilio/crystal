import { AddressEntity } from "src/models/addresses/entities/address.entity";
import { RoleEntity } from "src/models/roles/entities/roles.entity";
import { UserSettingsEntity } from "src/models/user_settings/entities/userSettings.entity";

export interface User {
  id?: string;
  name: string;
  email: string;
  picture: string;
  birthday: string;
  phone: string;

  // Status
  blocked: boolean;
  deleted: boolean;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;

  // Relations
  address?: AddressEntity;
  role?: RoleEntity;
  settings?: UserSettingsEntity;
}
