import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  async show(@Req() request: Request, @Res() response: Response): Promise<Response> {
    const categories = await this.categoryService.findAll();
    if (!categories) {
      return response.status(404).json({ statusCode: 404, message: 'Categories not found' });
    }
    return response.status(200).json(categories);
  }

  @Post()
  async create(@Req() request: Request, @Res() response: Response, @Body() category: CategoryEntity): Promise<Response> {
    const categoryExists = await this.categoryService.findOneByName(category.name);
    if (categoryExists) {
      return response.status(404).json({ statusCode: 404, message: 'Category already exists' });
    }
    const categoryCreated = await this.categoryService.create(category);
    return response.status(201).json(categoryCreated);
  }

  @Get('search')
  async search(@Req() request: Request, @Res() response: Response, @Query('name') name: string): Promise<Response> {
    const categories = await this.categoryService.searchByName(name);
    if (!categories) {
      return response.status(404).json({ statusCode: 404, message: 'Categories not found' });
    }
    return response.status(200).json(categories);
  }

  @Get(':id')
  async read(@Req() request: Request, @Res() response: Response, @Param('id') id: string): Promise<Response> {
    const categoryExists = await this.categoryService.findOneById(id);
    if (!categoryExists) {
      return response.status(404).json({ statusCode: 404, message: 'Category not found' });
    }
    return response.status(200).json(categoryExists);
  }

  @Put(':id')
  async update(@Req() request: Request, @Res() response: Response, @Param('id') id: string, @Body() category: CategoryEntity) {
    const categoryExists = await this.categoryService.findOneById(id);
    if (!categoryExists) {
      return response.status(404).json({ statusCode: 404, message: 'Category not found' });
    }
    return await this.categoryService.update(id, category);
  }

  @Delete(':id')
  async delete(@Req() request: Request, @Res() response: Response, @Param('id') id: string): Promise<Response> {
    const categoryExists = await this.categoryService.findOneById(id);
    if (!categoryExists) {
      return response.status(404).json({ statusCode: 404, message: 'Category not found' });
    }
    await this.categoryService.delete(id);
    return response.status(200).json({ statusCode: 200, message: 'Category deleted' });
  }
}
