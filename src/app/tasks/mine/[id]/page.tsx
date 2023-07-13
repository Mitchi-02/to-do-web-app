import { getTask, updateTaskAction } from '@/actions'
import TaskForm from '@/components/TaskForm'
import { notFound } from 'next/navigation'
import React from 'react'

const TaskDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const res = await getTask(id)
  if(res.error) {
    throw notFound()
  }  
  return <TaskForm task={res.task} onSubmit={updateTaskAction} />
}

export default TaskDetails
