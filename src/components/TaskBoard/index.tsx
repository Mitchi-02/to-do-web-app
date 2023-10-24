'use client'

import { ITask } from '@/types'
import { priorities, statuses } from '@/types'
import Image from 'next/image'
import React, { Fragment, useMemo, useState } from 'react'
import Task from '../Task'
import saveTask from '@/actions/saveTask'
import Toggle from '../Toggle'
import Link from 'next/link'
import deleteTask from '@/actions/deleteTask'
import { ObjectId } from 'mongoose'
import DropArea from '../DropArea'

const TaskBoard = ({
  isStatus: defaultStatus,
  tasks: tasksData,
}: {
  isStatus: boolean
  tasks: ITask[]
}) => {  
  const [tasks, setTasks] = useState(tasksData)
  const [isStatus, setIsStatus] = useState(defaultStatus)
  const data = useMemo(() => (isStatus ? statuses : priorities), [isStatus])
  const accessor = useMemo(() => (isStatus ? 'status' : 'priority'), [isStatus])
  const icons = {
    'to do': '/icons/to-do.svg',
    'in progress': '/icons/in-progress.svg',
    completed: '/icons/completed.svg',
    low: '/icons/low.svg',
    medium: '/icons/medium.svg',
    high: '/icons/high.svg',
  }

  const handleToggle = () => {
    setIsStatus((prev) => !prev)
  }
  return (
    <>
      <div className='flex justify-between sm:justify-start pb-4 gap-4 sm:gap-8 items-center'>
        <span className='text-lg sm:text-xl font-semibold'>Sort By</span>
        <div className='flex gap-3 sm:gap-4 items-center font-semibold'>
          <span className={isStatus ? 'text-primaryColor' : ''}>Status</span>
          <Toggle isChecked={!isStatus} handleToggle={handleToggle} />
          <span className={!isStatus ? 'text-primaryColor' : ''}>Priority</span>
        </div>
      </div>
      <div className='grid md:grid-cols-3 items-start gap-4 lg:gap-8'>
        {data.map((item) => (
          <div
            key={item}
            className='pt-5 pb-2 px-4 rounded-xl shadow'
            onDragOver={(e) => e.preventDefault()}
            onDrop={async (e) => {
              e.preventDefault()
              const task = tasks.find(
                (t) => t._id === JSON.parse(e.dataTransfer.getData('Text'))._id
              )!
              //@ts-ignore
              task[accessor] = item
              setTasks([...tasks])
              saveTask(task)
            }}
          >
            <h2 className='flex ml-1 capitalize items-center gap-3 font-semibold text-primaryColor'>
              <Image width={20} height={20} src={icons[item]} alt='' />
              {item}
            </h2>
            <ul
              className='mt-4 relative overflow-auto'
              style={{
                maxHeight: 64 * 4 + 16 * 3 + 'px',
              }}
            >
              <DropArea />
              {tasks
                .filter((t) => t[accessor] === item)
                .map((t) => (
                  <Fragment key={JSON.stringify(t._id)}>
                    <li
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('Text', JSON.stringify(t))
                        //e.currentTarget.classList.add('absolute')
                      }}
                      onDragEnd={(e) => {
                        //e.currentTarget.classList.remove('absolute')
                      }}
                      className='w-full cursor-grab active:cursor-grabbing active:animate-pulse'
                    >
                      <Task
                        handleDelete={(id: ObjectId) => {
                          deleteTask(id)
                          setTasks(tasks.filter((t) => t._id !== id))
                        }}
                        task={t}
                        isStatus={isStatus}
                      />
                    </li>
                    <DropArea />
                  </Fragment>
                ))}
            </ul>
            <Link
              href={{
                pathname: '/tasks/create',
                query: { [accessor]: item },
              }}
              className='flex items-center text-sm font-medium justify-start gap-2 py-3 px-3 mt-3 rounded-xl dark:hover:bg-primaryBlack hover:bg-gray-200'
            >
              <svg
                width='12px'
                height='12px'
                viewBox='0 0 32 32'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <title>plus</title>
                <desc>Created with Sketch Beta.</desc>
                <defs></defs>
                <g
                  id='Page-1'
                  stroke='none'
                  strokeWidth='1'
                  fill='none'
                  fillRule='evenodd'
                >
                  <g
                    id='Icon-Set-Filled'
                    transform='translate(-362.000000, -1037.000000)'
                    className='fill-primaryBlack dark:fill-white'
                  >
                    <path
                      d='M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049'
                      id='plus'
                    ></path>
                  </g>
                </g>
              </svg>
              <span>add task</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskBoard
