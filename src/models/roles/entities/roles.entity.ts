import { UserEntity } from 'src/models/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../interface/roles.interface';

@Entity('roles')
export class RoleEntity implements Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  slug: string;

  @Column({ default: false })
  is_admin: boolean;

  @Column({ default: false })
  appointments: boolean;

  @Column({ default: false })
  customers: boolean;

  @Column({ default: false })
  services: boolean;

  @Column({ default: false })
  users: boolean;

  @Column({ default: false })
  system_settings: boolean;

  @Column({ default: false })
  user_settings: boolean;

  @ManyToOne(() => UserEntity, (user) => user.roles)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
