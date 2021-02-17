import React from 'react'
import styled from 'styled-components'

const StyledBubbles = styled.svg`
  color: ${({ theme }) =>
    theme.schema === 'light'
      ? theme.colors.background.main.color
      : theme.colors.background.light.color};

  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
`

export function Bubbles(): JSX.Element {
  return (
    <StyledBubbles
      width="445"
      height="540"
      viewBox="0 0 445 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M523 403C523 547.422 405.922 668 261.5 668C117.078 668 0 550.922 0 406.5C0 347.094 19.8086 292.316 53.181 248.408C53.181 248.408 62.9974 255.108 69.5365 259C76.2081 262.97 87 268.5 87 268.5C87 268.5 95.937 272.313 104.5 274.735C112.5 276.998 122.5 279.5 122.5 279.5C122.5 279.5 137.279 334.18 175.94 380.5C220.177 433.5 272.5 448 272.5 448C272.5 448 327 474.316 403.5 460.405C473.308 447.71 523 403 523 403Z"
        fill="currentColor"
      />
      <path
        d="M542 220C542 320.516 460.516 402 360 402C281.324 402 219 361 188 280C274.5 266 361.5 166 311.622 44.5C327.027 40.263 343.249 38 360 38C460.516 38 542 119.484 542 220Z"
        fill="currentColor"
      />
      <circle cx="156" cy="113" r="113" fill="currentColor" />
    </StyledBubbles>
  )
}
