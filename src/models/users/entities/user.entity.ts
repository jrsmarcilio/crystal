import { AddressEntity } from 'src/models/addresses/entities/address.entity';
import { RoleEntity } from 'src/models/roles/entities/roles.entity';
import { UserSettingsEntity } from 'src/models/user_settings/entities/userSettings.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../interfaces/user.interface';

@Entity('users')
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  mobile_number: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column({ length: 255 })
  notes: string;

  @Column({ length: 50 })
  timezone: string;

  @Column({ length: 50 })
  language: string;

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses: AddressEntity[];

  @OneToMany(() => RoleEntity, (role) => role.user)
  roles: RoleEntity[];

  @OneToOne(() => UserSettingsEntity)
  @JoinColumn()
  settings: UserSettingsEntity;
}
