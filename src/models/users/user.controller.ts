import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async show(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async showOne(@Req() request: Request, @Res() response: Response, @Param('id') id: string) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      return response.status(404).json({ statusCode: 404, message: 'User not found' });
    }
    return response.status(200).json(user);
  }

  @Post()
  async create(@Req() request: Request, @Res() response: Response, @Body() user: UserEntity) {
    const userExists = await this.userService.findOneByEmail(user.email);
    if (userExists) {
      return response.status(409).json({ statusCode: 409, message: 'User already exists with this email' });
    }
    return this.userService.create(user);
  }

  @Put(':id')
  async update(@Req() request: Request, @Res() response: Response, @Param('id') id: string, @Body() user: UserEntity) {
    const userExists = await this.userService.findOneById(id);
    if (!userExists) {
      return response.status(404).json({ statusCode: 404, message: 'User not found' });
    }
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Req() request: Request, @Res() response: Response, @Param('id') id: string) {
    const userExists = await this.userService.findOneById(id);
    if (!userExists) {
      return response.status(404).json({ statusCode: 404, message: 'User not found' });
    }
    return this.userService.delete(id);
  }
}
