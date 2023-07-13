'use server'

import { dbConnect, getSession } from '@/lib'
import Task, { ITask } from '@/models/Task'

export default async function saveTask({ _id, ...rest}: ITask) {
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to save task' }
  await dbConnect()
  try {
    await Task.findByIdAndUpdate(_id, { ...rest, user_id: session.user?._id })    
  } catch (error) {
    
  }
}
