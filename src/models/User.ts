import { Schema, models, model, Model} from "mongoose"; 
import bcrypt from 'bcryptjs'


interface IUser {
  username: string
  email: string
  password: string
}

interface UserModel extends Model<IUser> { }

const UserSchema = new Schema<IUser, UserModel>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const User: UserModel = models.User || model<IUser, UserModel>('User', UserSchema)



export default User;