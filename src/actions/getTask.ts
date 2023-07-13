'use server'

import { dbConnect, getSession } from '@/lib'
import { Task } from '@/models'

export default async function getTask(id: string) {
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to get task' }
  await dbConnect()
  try {    
    const t = await Task.findOne({
      _id: id,
      user_id: session.user?._id
    })
    if(!t) return {
        error: "task not found"
    }
    return {
        task: t
    }
  } catch (e: any) {    
    return {
      error: e.message,
    }
  }
}
