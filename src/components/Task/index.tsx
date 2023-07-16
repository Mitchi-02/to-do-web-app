'use client'

import { ITask } from '@/types'
import { HTMLAttributes } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ObjectId } from 'mongoose'

const Task = ({
  task,
  isStatus,
  className,
  handleDelete,
  ...rest
}: {
  task: ITask
  handleDelete: (id: ObjectId) => void
  isStatus: boolean
  className?: string
} & HTMLAttributes<HTMLDivElement>) => {
  
  const priorityColor = {
    low: 'text-mainGreen',
    medium: 'text-yellow-700',
    high: 'text-mainRed',
  }
  const statusColor = {
    'to do': 'text-blue-700',
    'in progress': 'text-yellow-700',
    completed: 'text-mainGreen',
  }
  const deadlineColor =
    new Date(task.deadline) >= new Date() || task.status === 'completed'
      ? 'text-mainGreen'
      : "text-mainRed after:content-['_!']"
  return (
    <div
      {...rest}
      className={`bg-bgColor text-sm py-3 px-4 rounded-xl shadow space-y-3 cursor-pointer capitalize max-h- ' ${
        className || ''
      }`}
    >
      <div className='flex justify-between gap-4 items-start'>
        <p className='font-semibold'>{task.title}</p>
        <div className='flex gap-1 items-center'>
          <Link href={'/tasks/mine/' + task._id}>
            <Image src='/icons/edit.svg' alt='more' width={18} height={18} />
          </Link>
          <Image
            onClick={() => handleDelete(task._id)}
            src='/icons/delete.svg'
            alt='more'
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className='font-semibold text-xs flex justify-between'>
        {isStatus ? (
          <span className={`${statusColor[task.status]}`}>{task.status}</span>
        ) : (
          <span className={`${priorityColor[task.priority]}`}>
            {task.priority}
          </span>
        )}
        <span className={`${deadlineColor} hidden md:block lg:hidden`}>
          {new Date(task.deadline)
            .toJSON()
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('/')}
        </span>
        <span className={`${deadlineColor} md:hidden lg:block`}>
          {new Date(task.deadline).toDateString()}
        </span>
      </div>
    </div>
  )
}

export default Task
