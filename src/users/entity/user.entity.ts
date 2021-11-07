import { Document } from "mongoose";

export class User extends Document {
  readonly name: string
  readonly email: string
  readonly phone?: string
  readonly password: string
  readonly createAt: Date
}
