import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import useTitlePage from '../hooks/useTitlePage'

export default function Expo(): ReactElement {
  useTitlePage("Expo - BinaryFest")

  return (
    <div>
      <Typography style={{ color: 'white' }}>This is Expo</Typography>
    </div>
  )
}
