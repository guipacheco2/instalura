import React from 'react'

export function DangerouslySetInnerHTML({
  children,
}: {
  children: string
}): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: children }} />
}
