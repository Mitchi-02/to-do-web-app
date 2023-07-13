'use server'

import { dbConnect, getSession } from '@/lib'
import { Task } from '@/models'

export default async function getTasks() {
  const session = await getSession()
  if(!session) return { error: 'You must be signed in to get tasks' }
  await dbConnect()
  try {
    return {
      tasks: await Task.find({ user_id: session.user?._id}),
    }
  } catch (e: any) {
    return {
      error: e.message,
    }
  }
}
