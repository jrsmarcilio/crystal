import { ServiceEntity } from 'src/models/services/entities/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../interface/category.interface';

@Entity('categories')
export class CategoryEntity implements Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  description: string;

  @OneToMany(() => ServiceEntity, (service) => service.category)
  services: ServiceEntity[];
}
