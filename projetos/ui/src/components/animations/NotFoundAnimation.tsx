import Lottie from 'lottie-react'
import React from 'react'
import notFoundAnimation from './notFoundAnimation.json'

export function NotFoundAnimation(): JSX.Element {
  return (
    <Lottie
      style={{ height: '300px', width: '300px' }}
      animationData={notFoundAnimation}
      autoplay
      loop
    />
  )
}
