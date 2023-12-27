import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
  ) { }

  async findOneById(id: string): Promise<AddressEntity> {
    return await this.addressRepository.findOneBy({ id });
  }

  async findByZipcode(zipcode: string): Promise<AddressEntity[]> {
    return await this.addressRepository.find({ where: { zipcode } })
  }

  async create(address: AddressEntity): Promise<AddressEntity> {
    return await this.addressRepository.save(address);
  }

  async update(id: string, address: AddressEntity): Promise<AddressEntity> {
    await this.addressRepository.update(id, address);
    return await this.addressRepository.findOneBy({ id });
  }

  async delete(id: string): Promise<void> {
    await this.addressRepository.delete(id);
  }
}
