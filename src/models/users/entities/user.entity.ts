import { AddressEntity } from 'src/models/addresses/entities/address.entity';
import { RoleEntity } from 'src/models/roles/entities/roles.entity';
import { UserSettingsEntity } from 'src/models/user_settings/entities/userSettings.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from '../interfaces/user.interface';

@Entity('users')
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({ length: 100, nullable: true })
  picture: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  birthday: string;

  @Column({ length: 100, nullable: false })
  phone: string;

  @Column({ type: 'boolean', default: false })
  blocked: boolean;

  @Column({ type: 'boolean', default: false })
  deleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => AddressEntity, (address) => address.id)
  @JoinColumn({ name: 'addressId' })
  address: AddressEntity;

  @OneToOne(() => RoleEntity, (role) => role.user)
  role: RoleEntity;

  @OneToOne(() => UserSettingsEntity, (userSettings) => userSettings.user)
  settings: UserSettingsEntity;
}
