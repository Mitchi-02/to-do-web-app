'use client'

import Lottie from 'lottie-react'
import error from './error.json'

const Error = () => {
  return (
    <div>
      <Lottie className='h-[338px]' animationData={error} loop={true} />
    </div>
  )
}

export default Error
