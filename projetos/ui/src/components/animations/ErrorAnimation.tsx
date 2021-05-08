import Lottie from 'lottie-react'
import React from 'react'
import errorAnimation from './errorAnimation.json'

export function ErrorAnimation(): JSX.Element {
  return (
    <Lottie
      style={{ height: '150px', width: '150px' }}
      animationData={errorAnimation}
      autoplay
      loop={false}
    />
  )
}
