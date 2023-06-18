"use client"

import Lottie, { LottieComponentProps } from 'lottie-react'

type LoadingAnimationProps = {
  scale?: string
} & Omit<LottieComponentProps, 'animationData' | 'loop'>

const LoadingAnimation = ({ scale, className, ...rest}: LoadingAnimationProps) => {
  const s = `scale-[${scale}]`
  return <Lottie className={`s ${className}`} {...rest} animationData="./loading.json" loop={true} />
}

export default LoadingAnimation
