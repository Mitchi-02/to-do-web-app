'use client'

import Lottie from 'lottie-react'
import loading from './not-found.json'

const NotFoundAnimation = () => {
  return (
    <div>
      <Lottie
        className="h-[420px]"
        animationData={loading}
        loop={true}
      />
    </div>
  )
}

export default NotFoundAnimation
