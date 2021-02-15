import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import useTitlePage from '../hooks/useTitlePage'
import { scroller } from 'react-scroll'
import { Highlight } from './Home/Home.styled'

const useStyles = makeStyles(({breakpoints, spacing}) => ({
  hero: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& .hero-content': {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& *': {
        textAlign: 'center'
      },
      '& .binary-fest-logo': {
        maxWidth: '539px',
        width: '100%'
      },
      '& .heading': {
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '45px',
        [breakpoints.up('md')]: {
          fontSize: '36px',
          maxWidth: '600px'
        }
      },
      '& .coming-soon': {
        fontSize: '50px',
        color: '#CBCBCB',
        margin: '21px 0'
      },
      '& .tagline': {
        color: '#FFFFFF',
        fontSize: '18px',
        lineHeight: '36px',
        position: 'relative',
        zIndex: 2,
        marginTop: '19.3px',
        [breakpoints.up('sm')]: {
          width: '388px'
        }
      },
      '& .detail-remain': {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '24px',
        [breakpoints.up('md')]: {
          fontSize: '72px',
        }
      },
      '& .detail-text': {
        fontWeight: 'bold',
        fontSize: '14px',
        [breakpoints.up('md')]: {
          fontSize: '18px',
        }
      },
      '& .detail-container': {
        maxWidth: '317px',
        margin: '0 auto',
        marginTop: spacing(2),
        [breakpoints.up('md')]: {
          maxWidth: '535px',
          '& div': {
            width: '95px'
          }
        },
      }
    },
  },
  footer: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '20px 20px 0 0',
    padding: '42px 36px',
    marginTop: '79px',
    '& h3': {
      color: 'white'
    },
    [breakpoints.up('sm')]: {
      padding: '21px 36px',
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: '500px',
      width: '100%'
    },
    [breakpoints.up('md')]: {
      padding: '21px 36px',
      maxWidth: '671px',
    },
    '& .footer-links': {
      [breakpoints.up('sm')]: {
        flexDirection: 'row',
        maxWidth: '366px',
        justifyContent: 'space-between',
        margin: '0 auto'
      }
    },
    '& .footer-link': {
      color: 'white',
      textDecoration: 'none',
      marginTop: '56px',
      display: 'block',
      [breakpoints.up('sm')]: {
        marginTop: '24px'
      }
    },
    '& .footer-credit': {
      '& .footer-link': {
        marginTop: '28px',
      },
    },
    '& .footer-separator': {
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, 0.17)',
      width: '100%',
      marginTop: '28px',
    },
    '& .footer-credit, & .footer-separator': {
      [breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  },
  loadingText: {
    display: 'none',
    position: 'absolute',
    right: '70px',
    bottom: '15px',
    '& span': {
      fontWeight: 'bold',
      fontSize: '24px',
      fontStyle: 'italic'
    },
    [breakpoints.up('lg')]: {
      display: 'flex',
    }
  },
  animateLoadingText: {
    color: 'rgba(0, 0, 0, 0.0)',
    position: 'relative',
    '-webkit-text-stroke': '0.05vw white',
    animation: '$opacity 1s linear infinite alternate',
    '&::before': {
      animation: '$loading 6s linear infinite',
      content: 'attr(data-text)',
      fontFamily: "'Montserrat', sans-serif",
      '-webkit-text-stroke': '0.05vw white',
      position: 'absolute',
      width: '100%',
      color: 'white',
      overflowX: 'hidden',
    }
  },
  arrows: {
    position: 'relative',
    top: '50px',
    [breakpoints.up('sm')]: {
      display: 'none'
    },
    '& span': {
      width: '27px',
      height: '27px',
      borderBottom: '1px solid #fff',
      borderRight: '1px solid #fff',
      transform: 'rotate(45deg)',
      display: 'block',
      animation: '$arrows 1s linear infinite',
      margin: '0 auto',
      '&:nth-child(2)': {
        animationDelay: '0.2s'
      },
      '&:nth-child(3)': {
        animationDelay: '0.4s'
      }
    }
  },
  "@keyframes loading": {
    "0%": {
      width: '0%'
    },
    "100%": {
      width: '100%'
    }
  },
  "@keyframes opacity": {
    "0%": {
      opacity: 0.5
    },
    "100%": {
      opacity: 1
    }
  },
  '@keyframes arrows': {
    '0%': {
      opacity: 0,
      transform: 'rotate(45deg) translate(-27px, -27px)'
    },
    '50%': {
      opacity: 1
    },
    '100%': {
      opacity: 0,
      transform: 'rotate(45deg) translate(27px, 27px)'
    },
  }
}))

export default function Home(): ReactElement {
  useTitlePage("BinaryFest 2021")

  const scrollToFooter = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 500,
      delay: 0,
      smooth: 'linear'
    })
  }

  const classes = useStyles()

  return (
    <>
      <div className={classes.hero}>
        <div className="hero-content">
          <img data-aos="fade-up" src="/binary-fest-logo-text.svg" className="binary-fest-logo" alt="binary-fest"/>
          <Typography
            className="tagline"
            data-aos="fade-up"
          >"Future Technology to Reinforce 9th Sustainable Development"</Typography>
          <Highlight src="/highlight.svg"/>
          <div onClick={scrollToFooter}>
            <div className={classes.arrows}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
