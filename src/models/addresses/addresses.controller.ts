import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AddressesService } from './addresses.service';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) { }

  @Get('zipcode/:zipcode')
  async findByZipcode(@Param('zipcode') zipcode: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const addresses = await this.addressesService.findByZipcode(zipcode);
    return res.status(200).json(addresses);
  }

  @Get(':id')
  async findOneById(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const address = await this.addressesService.findOneById(id);
    return res.status(200).json(address);
  }

  @Post()
  async create(@Body() address: AddressEntity, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const newAddress = await this.addressesService.create(address);
    return res.status(201).json(newAddress);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() address: AddressEntity, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const addressExists = await this.addressesService.findOneById(id);
    if (!addressExists) {
      return res.status(404).json({ message: 'Address not found.' });
    }
    const updatedAddress = await this.addressesService.update(id, address);
    return res.status(200).json(updatedAddress);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const addressExists = await this.addressesService.findOneById(id);
    if (!addressExists) {
      return res.status(404).json({ message: 'Address not found.' });
    }
    await this.addressesService.delete(id);
    return res.status(204).json({ message: 'Address deleted.' });
  }
}
