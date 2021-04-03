import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { Element, scroller } from 'react-scroll'
import CloudinaryImg from '../../components/CloudinaryImg'
import FooterPage from '../../components/FooterPage'
import useTitlePage from '../../hooks/useTitlePage'
import { Highlight, Arrows } from './Home.styled'
import MediaPartner from './MediaPartner'
import Sponsorship from './Sponsorship'
import TechExpo from './TechExpo'
import Webinar from './Webinar'

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
    },
  },
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
          <CloudinaryImg data-aos="fade-up" src="binary-fest-logo-text.svg" className="binary-fest-logo" alt="binary-fest"/>
          <Typography
            className="tagline"
            data-aos="fade-up"
          >"Future Technology to Reinforce 9th Sustainable Development"</Typography>
          <Highlight src="highlight.svg" alt="highlight"/>
          <Arrows onClick={scrollToFooter}>
            <span></span>
            <span></span>
            <span></span>
          </Arrows>
        </div>
      </div>
      <Element name="scroll-to-element">
        <Webinar />
      </Element>
      <TechExpo />
      <Sponsorship />
      <MediaPartner />
      <FooterPage />
    </>
  )
}
