import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { ServicesService } from './services.service';
import { ServiceEntity } from './entities/service.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) { }

  @Get()
  async show(@Req() request: Request, @Res() response: Response): Promise<Response> {
    const service = await this.servicesService.findAll();
    if (!service) {
      return response.status(404).json({ statusCode: 404, message: 'Service not found' });
    }
    return response.status(200).json(service);
  }

  @Post()
  async create(@Req() request: Request, @Res() response: Response, @Body() service: ServiceEntity): Promise<Response> {
    const serviceExists = await this.servicesService.findByName(service.name);
    if (serviceExists) {
      return response.status(404).json({ statusCode: 404, message: 'Service already exists' });
    }
    const serviceCreated = await this.servicesService.create(service);
    return response.status(201).json(serviceCreated);
  }

  @Get('search')
  async search(@Req() request: Request, @Res() response: Response, @Query('name') name: string): Promise<Response> {
    const service = await this.servicesService.searchByName(name);
    if (!service) {
      return response.status(404).json({ statusCode: 404, message: 'Service not found' });
    }
    return response.status(200).json(service);
  }

  @Get(':id')
  async read(@Req() request: Request, @Res() response: Response, @Param('id') id: string): Promise<Response> {
    const service = await this.servicesService.findOne(id);
    if (!service) {
      return response.status(404).json({ statusCode: 404, message: 'Service not found' });
    }
    return response.status(200).json(service);
  }

  @Put(':id')
  async update(@Req() request: Request, @Res() response: Response, @Param('id') id: string, @Body() service: ServiceEntity): Promise<Response> {
    const serviceExists = await this.servicesService.findOne(id);
    if (!serviceExists) {
      return response.status(404).json({ statusCode: 404, message: 'Service not found' });
    }
    const serviceUpdated = await this.servicesService.update(id, service);
    return response.status(200).json(serviceUpdated);
  }

  @Delete(':id')
  async delete(@Req() request: Request, @Res() response: Response, @Param('id') id: string): Promise<Response> {
    const serviceExists = await this.servicesService.findOne(id);
    if (!serviceExists) {
      return response.status(404).json({ statusCode: 404, message: 'Service not found' });
    }
    await this.servicesService.remove(id);
    return response.status(200).json({ statusCode: 200, message: 'Service deleted' });
  }
}
