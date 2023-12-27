import { CategoryEntity } from 'src/models/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Service } from '../interface/service.interface';

@Entity('services')
export class ServiceEntity implements Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  description: string;

  @Column({ precision: 6, scale: 2, default: 0 })
  price: string;

  @Column({ length: 100 })
  currency: string;

  @Column({ default: 60 })
  duration: number;

  @Column({ default: 1 })
  availableType: number;

  @Column({ default: 1 })
  attendantsNumber: number;

  @ManyToOne(() => CategoryEntity, (category) => category.services)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}