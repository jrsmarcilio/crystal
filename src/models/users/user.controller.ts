import { Controller, Get } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async show(): Promise<User[]> {
    return this.userService.findAll();
  }
}
