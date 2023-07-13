'use server'

import { dbConnect, getSession } from '@/lib'
import { User } from '@/models'

export default async function updateInfos({
  username,
  email,
}: {
  username: string
  email: string
}) {
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to update profile' }
  await dbConnect()
  const user = (await User.findById(session.user?._id))!
  if (user.email !== email && (await User.findOne({ email }))) {
    return { error: 'Email already used' }
  }

  user.email = email
  user.username = username
  await user.save()
}
