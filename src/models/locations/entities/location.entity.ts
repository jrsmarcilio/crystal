import { AddressEntity } from 'src/models/addresses/entities/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from '../interface/location.interface';

@Entity('locations')
export class LocationEntity implements Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  description: string;

  @OneToOne(() => AddressEntity)
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;
}
