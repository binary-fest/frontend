import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { navigationLinks } from '../store/links'

interface NavigationResponsiveProps {
  toggleHandler: (status: boolean) => void
}

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    backgroundColor: 'white',
    height: '100vh',
    position: 'fixed',
    zIndex: 10,
    width: "80%",
    top: "0",
    right: "0"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: spacing(2),
    paddingBottom: spacing(2)
  },
  navigationLink: {
    marginBottom: spacing(4),
    cursor: 'pointer'
  },
  closeIcon: {
    cursor: 'pointer'
  },
  backdrop: {
    backgroundColor: 'black',
    opacity: 0.5,
    width: '100%',
    height: '100%',
    zIndex: 5,
    position: 'fixed',
    top: 0,
    left: 0
  },
  contactContainer: {
    width: '174px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default function NavigationResponsive(props: NavigationResponsiveProps): ReactElement {
  const listNavigationLink = useRecoilValue(navigationLinks)
  
  const contactLink = [{
    name: 'Instagram',
    url: '/',
    svgUrl: '/instagram-icon.svg'
  }, {
    name: 'Telegram',
    url: '/',
    svgUrl: '/telegram-icon.svg'
  }, {
    name: 'Youtube',
    url: '/',
    svgUrl: '/youtube-icon.svg'
  }]
  
  const hideHandler = () => {
    props.toggleHandler(false)
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container justify="space-between">
            <Grid item>
              {listNavigationLink.map((link) => {
                return (
                  <Typography key={link.id} className={classes.navigationLink}>{link.name}</Typography>
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
              {contactLink.map(contact => {
                return (
                  <a key={contact.name} href={contact.url} target="_blank" rel="noreferrer">
                    <img src={contact.svgUrl} alt={contact.name} />
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
