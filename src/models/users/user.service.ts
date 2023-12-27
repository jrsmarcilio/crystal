import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find({ relations: ['address', 'role', 'settings'] });
  }

  async findWhere(where: UserEntity, relations: FindManyOptions<UserEntity>['relations']): Promise<UserEntity[]> {
    return await this.userRepository.find({ relations, where });
  }

  async findOneById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({ email });
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async update(id: string, user: UserEntity): Promise<UserEntity> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
