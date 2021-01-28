import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { navigationLinks, socialMediaIcons } from '../store/links'
import { isNavigationResponsiveShowAtom } from '../store/ui'

interface NavigationResponsiveProps {
  toggleHandler?: (status: boolean) => void
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: 'white',
    height: '100vh',
    position: 'fixed',
    zIndex: 1000,
    width: "80%",
    top: "0",
  },
  showNav: {
    right: '0',
    animation: '$showNav .5s linear alternate',
  },
  hideNav: {
    animation: '$hideNav .5s linear alternate',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  navigationLink: {
    marginBottom: spacing(4),
    cursor: 'pointer',
    display: 'block',
    color: '#2F2F2F',
    textDecoration: 'none'
  },
  closeIcon: {
    cursor: 'pointer'
  },
  backdrop: {
    backgroundColor: 'black',
    opacity: 0.5,
    width: '100%',
    height: '100vh',
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0
  },
  contactContainer: {
    width: '174px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  '@keyframes showNav': {
    '0%': {
      right: '-100%'
    },
    '100%': {
      right: '0'
    }
  },
  '@keyframes hideNav': {
    '0%': {
      right: '0'
    },
    '100%': {
      right: '-100%'
    }
  }
}))

export default function NavigationResponsive(props: NavigationResponsiveProps): ReactElement {
  const listNavigationLink = useRecoilValue(navigationLinks)
  const listSocialMedia = useRecoilValue(socialMediaIcons)
  const [isNavigationShow, setIsNavigationShow] = useRecoilState(isNavigationResponsiveShowAtom)
  const [animationRoot, setAnimationRoot] = useState(isNavigationShow)
  
  const hideHandler = () => {
    setTimeout(() => {
      setIsNavigationShow(false)
    }, 500)
    setAnimationRoot(false)
  }

  const classes = useStyles()

  return (
    <>
      <div className={clsx(classes.root, animationRoot ? classes.showNav : classes.hideNav)}>
        <Container className={classes.container}>
          <Grid container justify="space-between">
            <Grid item>
              <Link
                onClick={hideHandler}
                to="/"
                className={classes.navigationLink}
              >
                <Typography>Homepage</Typography>
              </Link>
              {listNavigationLink.map((link) => {
                return (
                  <Link
                    onClick={hideHandler}
                    key={link.id}
                    to={link.href}
                    className={classes.navigationLink}
                  >
                    <Typography>{link.name}</Typography>
                  </Link>
                )
              })}
            </Grid>
            <Grid item>
              <img
                src="/close-navigation.svg"
                alt="Close navigation"
                onClick={hideHandler}
                className={classes.closeIcon}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item className={classes.contactContainer}>
              {listSocialMedia.map(contact => {
                return (
                  <a key={contact.name} href={contact.href} target="_blank" rel="noreferrer">
                    <img src={contact.gradientSvgFile} alt={contact.name} />
                  </a>
                )
              })}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.backdrop} onClick={hideHandler} />
    </>
  )
}
