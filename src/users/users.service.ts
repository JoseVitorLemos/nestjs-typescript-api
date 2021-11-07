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
    const createdCat = new this.userModel(user)
    return createdCat.save()
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async getOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id })
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    })
  }
}
