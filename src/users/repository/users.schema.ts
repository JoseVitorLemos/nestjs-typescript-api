import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
})
