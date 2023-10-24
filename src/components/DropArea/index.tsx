'use client'

import { useState } from 'react'

const DropArea = () => {
  const [visible, setVisible] = useState(false)

  const show = () => {
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }
  return (
    <div
      className={`transition-all before:inset-2 rounded-xl relative before:absolute duration-300 h-4 ${
        visible ? 'h-10 bg-bgColor opacity-100' : 'opacity-0'
      }`}
      onDragEnter={show}
      onDragLeave={hide}
    />
  )
}

export default DropArea
