'use server'

import { dbConnect, getSession } from '@/lib'
import Task from '@/models/Task'
import { ObjectId } from 'mongoose'

export default async function deleteTask(_id: ObjectId) {  
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to delete a task' }  
  await dbConnect()
  try {
    await Task.findOneAndDelete({
      _id,
      user_id: session.user?._id
    })    
  } catch (error) {
    return {
      error: "couldn't delete task"
    }
  }
}
