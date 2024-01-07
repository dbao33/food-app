import mongoose from 'mongoose'
import User from '../../../models/User'

const POST = async (req, res, next) => {
  const body = await req.json()
  mongoose.connect(process.env.URI_DB)
  const createdUser = await User.create(body)
  return Response.json(createdUser)
}

export { POST }