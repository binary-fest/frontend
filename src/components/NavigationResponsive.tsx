import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { navigationLinks, socialMediaIcons } from '../store/links'
import { isNavigationResponsiveShowAtom } from '../store/ui'
import { isExternalUrl } from '../utils/validate'

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
    right: '0'
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
}))

export default function NavigationResponsive(props: NavigationResponsiveProps): ReactElement {
  const listNavigationLink = useRecoilValue(navigationLinks)
  const listSocialMedia = useRecoilValue(socialMediaIcons)
  const setIsNavigationShow = useSetRecoilState(isNavigationResponsiveShowAtom)
  
  const hideHandler = () => setIsNavigationShow(false)

  const classes = useStyles()

  return (
    <>
      <div className={clsx(classes.root)}>
        <Container className={classes.container}>
          <Grid container justify="space-between">
            <Grid item>
              {listNavigationLink.map((link) => {
                return (
                  link.isOpen ?
                    !isExternalUrl(link.href) ?
                      <Link
                        onClick={hideHandler}
                        key={link.id}
                        to={link.href}
                        className={classes.navigationLink}
                      >
                        <Typography>{link.name}</Typography>
                      </Link> :
                      <a
                        key={link.id}
                        href={link.href}
                        className={classes.navigationLink}
                        target='_blank'
                        rel="noreferrer"
                      >
                        <Typography>{link.name}</Typography>
                      </a>
                    :
                    <div key={link.id} className={classes.navigationLink}>
                      <Typography>{link.name}</Typography>
                      <Typography variant="caption" align="center">Coming soon !</Typography>
                    </div>
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
