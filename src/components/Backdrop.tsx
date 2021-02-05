import React, { ReactElement } from 'react'

interface Props extends React.DOMAttributes<HTMLDivElement> {
  zIndex: number
}

export default function Backdrop({zIndex, onClick}: Props): ReactElement {
  return (
    <div
      style={{
        zIndex,
        position: 'fixed',
        backgroundColor: 'black',
        opacity: 0.5,
        height: '100vh',
        width: '100vw'
      }}
      onClick={onClick}
    />
  )
}
