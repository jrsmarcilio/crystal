import { UserEntity } from 'src/models/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../interface/address.interface';

@Entity('addresses')
export class AddressEntity implements Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  street: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 100 })
  complement: string;

  @Column({ length: 100 })
  neighborhood: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  state: string;

  @Column({ length: 100 })
  country: string;

  @Column({ length: 100 })
  zipcode: string;

  @ManyToOne(() => UserEntity, (user) => user.addresses)
  user: UserEntity;
}
