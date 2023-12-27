import { UserEntity } from 'src/models/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../interface/address.interface';

@Entity('addresses')
export class AddressEntity implements Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  zipcode: string;

  @Column({ length: 100, nullable: false })
  neighborhood: string;

  @Column({ length: 100, nullable: false })
  city: string;

  @Column({ length: 100, nullable: false })
  state: string;

  @Column({ length: 100, nullable: false })
  street: string;

  @Column({ length: 10, nullable: false })
  number: string;

  @Column({ length: 100, nullable: true })
  complement: string;

  @Column({ length: 100, default: 'Brazil' })
  country: string;

  @Column({ length: 100, nullable: true })
  latitude: string;

  @Column({ length: 100, nullable: true })
  longitude: string;

  @OneToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
