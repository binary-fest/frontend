import { Container, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import FixedSocialMedia from '../components/FixedSocialMedia'
import Navigation from '../components/Navigation'

interface StaticLayoutProps {
  children: any
}

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  decorationContainer: {
    display: 'none',
    position: 'fixed',
    overflowY: 'hidden',
    width: '17px',
    height: '100vh',
    top: '236px',
    left: '60px',
    [breakpoints.up('md')]: {
      display: 'flex',
      left: '96px'
    }
  },
  decoration1: {
    position: 'absolute',
  }
}))

export default function StaticLayout({children}: StaticLayoutProps): ReactElement {
  const classes = useStyles()

  return (
    <>
      <Navigation withLinks={true}/>
      <div className={classes.decorationContainer}>
        <img className={classes.decoration1} src="/decoration-1.svg" alt="decoration" />
      </div>
      <FixedSocialMedia />
      <Container>
        {children}
      </Container>
    </>
  )
}
