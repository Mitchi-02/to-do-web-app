"use client"

import React, { HTMLAttributes } from 'react'

const Toggle = ({ isChecked, handleToggle, ...rest }: { isChecked: boolean, handleToggle: () => void }& HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className='relative w-14 h-8' {...rest}>
      <input
        checked={isChecked}
        onChange={handleToggle}
        type='checkbox'
        className='hidden'
      />
      <span className='slider round' />
    </label>
  )
}

export default Toggle