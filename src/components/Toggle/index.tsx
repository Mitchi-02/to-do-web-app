"use client"

import React, { HTMLAttributes } from 'react'

const Toggle = ({ isChecked, className, handleToggle, ...rest }: { isChecked: boolean, handleToggle: () => void }& HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className={className+' relative sm:w-14 sm:h-8 h-6 w-10'} {...rest}>
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