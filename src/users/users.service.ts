import { Injectable, Inject } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user-dto'
import { Model } from 'mongoose'
import { User } from './entity/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersModel')
    private readonly userModel: Model<User>
  ) {}

  async createUser(user: User): Promise<User> {
    console.log('###### dentro do users.service ######')
    const createdCat = new this.userModel(user)
    return createdCat.save()
  }

  async getAll(): Promise<User[]> {
    console.log('##### get no SERVICES ######' + this.userModel.find().exec())
    return this.userModel.find().exec()
  }

  async getOne(id: string): Promise<User> {
    console.log('dentro do getbyId service')
    return this.userModel.findOne({ _id: id })
  }

  async delete(id: string): Promise<User> {
    console.log('## Estou do delite SERVICE ##')
    return this.userModel.findByIdAndRemove(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    console.log('###### Put userService ######')
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    })
  }
}
