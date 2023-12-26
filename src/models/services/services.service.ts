import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from './entities/service.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(ServiceEntity)
    private serviceRepository: Repository<ServiceEntity>,
  ) { }

  async findAll(): Promise<ServiceEntity[]> {
    return await this.serviceRepository.find({ relations: ['category'] });
  }

  async findOne(id: string): Promise<ServiceEntity> {
    return await this.serviceRepository.findOneBy({ id });
  }

  async findByName(name: string): Promise<ServiceEntity> {
    return await this.serviceRepository.findOneBy({ name });
  }

  async searchByName(name: string): Promise<ServiceEntity[]> {
    return await this.serviceRepository.findBy({ name: Like(`%${name}%`) });
  }

  async create(service: ServiceEntity): Promise<ServiceEntity> {
    return await this.serviceRepository.save(service);
  }

  async update(id: string, service: ServiceEntity): Promise<ServiceEntity> {
    await this.serviceRepository.update(id, service);
    return await this.serviceRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.serviceRepository.delete(id);
  }
}
