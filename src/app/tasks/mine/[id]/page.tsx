import { getTask, updateTaskAction } from '@/actions'
import TaskForm from '@/components/TaskForm'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: 'Task Details',
  description: 'Taskify Task Details Page.',
}

const TaskDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const res = await getTask(id)
  if(res.error) {
    throw notFound()
  }  
  return <TaskForm task={res.task} onSubmit={updateTaskAction} />
}

export default TaskDetails
