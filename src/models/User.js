import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: pass => {
        if (!pass?.length || pass.length < 5) {
          new Error('Password must be at least 6 characters')
          return pass
        }
      }
    }
  },
  { timestamps: true },
)

UserSchema.post('validate', async (user) => {
  const notHashedPassword = user.password
  const hashedPassword = await bcrypt.hashSync(notHashedPassword, 12)
  user.password = hashedPassword
})
const User = mongoose.models?.User || mongoose.model('User', UserSchema)

export default User