import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { navigationLinks } from '../store/links'
import { isNavigationResponsiveShowAtom } from '../store/ui'
import { isExternalUrl } from '../utils/validate'
import CloudinaryImg from './CloudinaryImg'

export interface NavigationDesktopProps {
  withLinks?: boolean
}

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    paddingTop: spacing(2),
    position: 'absolute',
    maxWidth: 'none',
    zIndex: 10,
    [breakpoints.up('md')]: {
      padding: '0 96px',
      paddingTop: spacing(2),
    }
  },
  hamburgerIcon: {
    cursor: 'pointer',
    [breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  listLink: {
    display: 'none',
    "& a, & div": {
      color: 'white',
      textDecoration: 'none'
    },
    width: '378px',
    [breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  containerLinkResponsive: {
    [breakpoints.up('sm')]: {
      position: 'absolute',
      left: "50%",
      transform: 'translateX(-50%)'
    }
  },
  decoration2: {
    display: 'none',
    position: 'absolute',
    right: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'block'
    },
    [breakpoints.up('md')]: {
      right: '66px'
    }
  },
  mobileIcon: {
    [breakpoints.up('md')]: {
      display: 'none'
    }
  },
  desktopIcon: {
    display: 'none',
    [breakpoints.up('md')]: {
      display: 'block'
    }
  },
  linkActive: {
    position: 'relative',
    '&:before': {
      content: "''",
      width: "100%",
      height: "1px",
      backgroundImage: 'linear-gradient(to top, #ff512f, #df2672)',
      position: "absolute",
      bottom: "-10px",
      padding: "0 0.5rem",
      left: "-0.5rem",
    },
  }
}))

export default function NavigationDesktop(props: NavigationDesktopProps): ReactElement {
  const router = useHistory()
  const [isNavigationResponsiveShow, setIsNavigationResponsiveShow] = useRecoilState(isNavigationResponsiveShowAtom)
  const listNavigationLink = useRecoilValue(navigationLinks)

  const toggleNavigationResponsive = () => setIsNavigationResponsiveShow(!isNavigationResponsiveShow)

  const classes = useStyles()

  return (
    <Container className={classes.root} data-aos="fade-down">
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Link to="/">
            <img src="https://res.cloudinary.com/binaryfest/image/upload/v1613227023/web/binary-fest-logo-mobile_ezr4ve.svg" alt="Binary Fest" className={classes.mobileIcon}/>
            <img src="https://res.cloudinary.com/binaryfest/image/upload/v1613227023/web/binary-fest-text-right_n0za1i.svg" alt="Binary Fest" className={classes.desktopIcon}/>
          </Link>
        </Grid>
        <Grid item className={classes.containerLinkResponsive}>
          <CloudinaryImg
            className={classes.hamburgerIcon}
            src="hamburger-icon.svg"
            alt="Binary Fest"
            onClick={toggleNavigationResponsive}
          />
          {props.withLinks &&
            <div className={classes.listLink}>
              {listNavigationLink.map(link => {
                return (
                  link.isOpen ?
                    !isExternalUrl(link.href) ?
                      <Link
                        key={link.id}
                        to={link.href}
                        className={router.location.pathname === link.href ? classes.linkActive : ''}
                      >
                        <Typography>{link.name}</Typography>
                      </Link> :
                      <a
                        key={link.id}
                        href={link.href}
                        className={router.location.pathname === link.href ? classes.linkActive : ''}
                        target='_blank'
                        rel="noreferrer"
                      >
                        <Typography>{link.name}</Typography>
                      </a>
                    :
                    <div key={link.id}>
                      <Typography>{link.name}</Typography>
                      <Typography variant="caption" align="center">Coming soon !</Typography>
                    </div>
                )
              })}
            </div>
          }
        </Grid>
      </Grid>
      {!props.withLinks &&
        <img src="/decoration-2.svg" alt="decoration-2" className={classes.decoration2} />
      }
    </Container>
  )
}
