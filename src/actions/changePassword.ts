'use server'

import { dbConnect, getSession } from '@/lib'
import { User } from '@/models'
import bcrypt from "bcryptjs"


export default async function changePassword({
  old_password,
  new_password,
}: {
  old_password: string
  new_password: string
}) {
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to change password' }
  
  await dbConnect()
  const user = (await User.findById({
    _id: session.user?._id
  }))!

  if (!(await bcrypt.compare(old_password, user.password))) {
    return {
        error: "wrong password"
    }
  }

  user.password = new_password
  await user.save()
}
