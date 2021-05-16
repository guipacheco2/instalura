import Lottie from 'lottie-react'
import React from 'react'
import successAnimation from './successAnimation.json'

export function SuccessAnimation(): JSX.Element {
  return (
    <Lottie
      style={{ height: '150px', width: '150px' }}
      animationData={successAnimation}
      autoplay
      loop={false}
    />
  )
}
