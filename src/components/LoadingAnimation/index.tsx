"use client"

import Lottie, { LottieComponentProps } from 'lottie-react'
import loading from "./loading.json"

type LoadingAnimationProps = {
  scale?: string
} & Omit<LottieComponentProps, 'animationData' | 'loop'>

const LoadingAnimation = ({ scale, className, ...rest}: LoadingAnimationProps) => {
  const s = scale || 'scale-[2] h-[52px]'
  return (
    <Lottie
      className={`${s} ${className || ''}`}
      {...rest}
      animationData={loading}
      loop={true}
    />
  )
}

export default LoadingAnimation
