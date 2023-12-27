import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) { }

  async create(category: CategoryEntity): Promise<CategoryEntity> {
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find();
  }

  async findOneById(id: string): Promise<CategoryEntity> {
    return await this.categoryRepository.findOneBy({ id });
  }

  async findOneByName(name: string): Promise<CategoryEntity> {
    return await this.categoryRepository.findOneBy({ name });
  }

  async searchByName(name: string): Promise<CategoryEntity[]> {
    return await this.categoryRepository.findBy({ name: Like(`%${name}%`) });
  }

  async update(id: string, category: CategoryEntity): Promise<CategoryEntity> {
    await this.categoryRepository.update(id, category);
    return await this.categoryRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
