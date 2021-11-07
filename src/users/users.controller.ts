import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from './entity/user.entity'
import { CreateUserDto } from './dto/create-user-dto'
import { UpdateUserDto } from './dto/update-user-dto'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto)
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getAll()
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getOne(id)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id)
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    return this.userService.update(id, updateUserDto)
  }
}
