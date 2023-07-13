'use server'

import { dbConnect } from '@/lib'
import { User } from '@/models'

export default async function register({
  email,
  username,
  password,
}: {
  email: string
  username: string
  password: string
}) {
  await dbConnect()
  const user = await User.findOne({
    email,
  })
  if (user) return { error: 'Email already used' }
  
  
  await User.create({
    username,
    email,
    password,
  })
}
