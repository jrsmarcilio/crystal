import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
