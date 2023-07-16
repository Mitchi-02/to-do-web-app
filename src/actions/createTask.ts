"use server"


import { dbConnect, getSession } from '@/lib'
import { Task } from '@/models'
import { ITask } from '@/types'

export default async function createTask(task: ITask){
  const session = await getSession()
  if (!session) return { error: 'You must be signed in to create a task' }
  await dbConnect()
  try{
    const t = await Task.create({
        ...task,
        user_id: session.user?._id
    })
    return {
        message: "task created successfully"
    }
  } catch (e: any) {
    return {
        error: e.message
    }
  }
}