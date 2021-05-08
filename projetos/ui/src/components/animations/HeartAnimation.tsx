import { useLottie } from 'lottie-react'
import { useEffect, useRef, useState } from 'react'
import heartAnimation from './heartAnimation.json'

export interface HeartAnimationProps {
  checked: boolean
  onComplete: () => void
}

export function HeartAnimation({
  checked = false,
  onComplete,
}: HeartAnimationProps): JSX.Element {
  const [playing, setPlaying] = useState(false)

  const lottie = useLottie({
    animationData: heartAnimation,
    autoplay: false,
    loop: false,
    onClick: () => setPlaying(true),
    onComplete: () => {
      if (playing) {
        setPlaying(false)
        onComplete()
      }
    },
    style: { cursor: 'pointer', height: '150px', width: '150px' },
  })

  const lottieRef = useRef(lottie)

  useEffect(() => {
    if (!playing) return

    if (checked) {
      lottieRef.current.playSegments([49, 75], true)
    } else {
      lottieRef.current.playSegments([0, 49], true)
    }
  }, [playing, checked])

  useEffect(() => {
    if (checked) {
      lottieRef.current.playSegments([49, 50], true)
    } else {
      lottieRef.current.playSegments([0, 1], true)
    }
  }, [checked])

  return lottieRef.current.View
}
