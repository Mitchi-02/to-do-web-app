"use server"


import { dbConnect, getSession } from '@/lib'
import { Task } from '@/models'
import { ITask } from '@/types'

export default async function updateTask(task: ITask){
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to update a task' }
  
  await dbConnect()
    const { _id, ...rest } = task
  try{
    await Task.findByIdAndUpdate(_id, { ...rest, user_id: session.user?._id })
    return {
        message: "task updated successfully"
    }
  } catch (e: any) {
    return {
        error: e.message
    }
  }
}