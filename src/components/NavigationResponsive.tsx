import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'

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
    right: "0",
    paddingTop: spacing(2)
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
  }
}))

export default function NavigationResponsive(props: NavigationResponsiveProps): ReactElement {
  const listNavigationLink = [{
    id: 1,
    name: 'Home',
    href: '/'
  },{
    id: 2,
    name: 'Home',
    href: '/'
  }, {
    id: 3,
    name: 'Home',
    href: '/'
  }, {
    id: 4,
    name: 'Home',
    href: '/'
    }]
  
  const hideHandler = () => {
    props.toggleHandler(false)
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <Container>
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
        </Container>
      </div>
      <div className={classes.backdrop} onClick={hideHandler} />
    </>
  )
}
