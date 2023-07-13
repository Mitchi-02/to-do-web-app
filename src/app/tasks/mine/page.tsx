import { getTasksAction } from "@/actions"
import TaskBoard from "@/components/TaskBoard"


export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {  
  const res = await getTasksAction()
  if (!res?.tasks) {
    throw new Error('something went wrong')
  } 

  return (
    <TaskBoard tasks={res?.tasks} isStatus={ searchParams.mode!=="priority" }/>
  )
}
