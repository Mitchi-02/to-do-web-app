import createTask from '@/actions/createTask'
import TaskForm from '@/components/TaskForm'
import { ITask } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Task',
  description: 'Taskify Create Task Page.',
}

const CreateTask = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <TaskForm
      onSubmit={createTask}
      task={
        {
          status: searchParams.status,
          priority: searchParams.priority,
        } as ITask
      }
    />
  )
}

export default CreateTask
