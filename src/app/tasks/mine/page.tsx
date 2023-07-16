import { getTasksAction } from "@/actions"
import TaskBoard from "@/components/TaskBoard"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'My Tasks',
  description: 'Taskify Tasks Page.',
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {  
  const res = await getTasksAction()
  if (!res?.tasks) {
    throw new Error('Something went wrong')
  }   
  return (
    <TaskBoard tasks={res?.tasks} isStatus={ searchParams.mode!=="priority" }/>
  )
}
