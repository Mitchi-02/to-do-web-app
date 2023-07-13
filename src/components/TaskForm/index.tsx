'use client'

import { ITask } from '@/models/Task'
import { Label, statuses, priorities, labels } from '@/types'
import Input from '@/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useState } from 'react'
import Button from '../Button'
import LabelsSelect from './LabelsSelect'
import Select from '../Select'
import toast from '@/lib/toast'
import { useRouter } from 'next/navigation'

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  deadline: yup.date().required(),
  status: yup.string().required(),
  priority: yup.string().required(),
  labels: yup.array().of(yup.string()).min(1).required(),
})

const TaskForm = ({
  task,
  onSubmit: submit,
}: {
  task?: ITask
  onSubmit: (data: ITask) => Promise<{ error?: string, message?: string }>
}) => {  
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ITask>({
    resolver: yupResolver(schema),
    //@ts-ignore
    defaultValues: task?._id
      ? { ...task, deadline: task.deadline.toISOString().slice(0, 10) }
      : {
          status: task?.status || 'to do',
          priority: task?.priority || 'low',
          deadline: new Date().toISOString().slice(0, 10),
          labels: [],
        },
  })
  const router = useRouter()
  const [selectedLabels, setSelectedLabels] = useState<Label[]>(
    task?.labels || []
  )
  const onSubmit: SubmitHandler<ITask> = async (data) => {    
    if (!isDirty) return
    const res = await submit(data)
    if (res?.error) {
      toast('error', res?.error)
    } else {
      toast('success', res?.message || '')
      router.push('/tasks/mine')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid md:grid-cols-2 gap-x-8 gap-y-4 py-8'
    >
      <div className='space-y-4'>
        <Input
          label='Title'
          error={errors.title?.message}
          inputProps={{
            type: 'text',
            placeholder: 'title...',
            ...register('title'),
          }}
        />
        <Input
          label='Description'
          error={errors.description?.message}
          inputProps={{
            type: 'text',
            placeholder: 'description...',
            ...register('description'),
          }}
        />
        <Input
          label='Deadline'
          error={errors.deadline?.message}
          inputProps={{
            type: 'date',
            ...register('deadline'),
          }}
        />
        <Select
          options={priorities}
          label='Priority'
          error={errors.priority?.message}
          selectProps={{
            ...register('priority'),
          }}
        />
      </div>
      <div className='space-y-4'>
        <Select
          options={statuses}
          label='Status'
          error={errors.status?.message}
          selectProps={{
            ...register('status'),
          }}
        />
        <LabelsSelect
          selectedLabels={selectedLabels}
          labels={labels}
          error={errors.labels?.message}
          setSelectedLabels={setSelectedLabels}
          setValue={(labels: Label[]) => setValue('labels', labels)}
        />
        <Button loading={isSubmitting} className='py-4 w-full'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default TaskForm
