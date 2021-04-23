import { makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import CloudinaryImg from '../../components/CloudinaryImg'
import { GradientButton, GradientTypography, WhiteTypography } from '../../theme/extends'

const useStyles = makeStyles(({breakpoints}) => ({
  root: {
    marginTop: '91px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      width: '270px'
    },
    [breakpoints.up('md')]: {   
      flexDirection: 'row',
      justifyContent: 'center',
      '& img': {
        maxWidth: "460px",
        maxHeight: "251px",
        width: "100%",
      },
    }
  },
  content: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '720px',
    '& h3': {
      textAlign: 'center'
    },
    '& p': {
      textAlign: 'center'
    },
    '& button': {
      color: 'white',
      marginTop: '16px'
    },
    [breakpoints.up('md')]: {
      marginLeft: '70px',
      alignItems: 'flex-start',
      maxWidth: '419.71px',
      '& h3': {
        textAlign: 'left',
      },
      '& p': {
        textAlign: 'left'
      },
    }
  }
}))

export default function TechExpo(): ReactElement {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <GradientTypography
        variant="h3" 
        style={{ fontSize: '36px', marginBottom: '24px' }} 
        align="center"
        data-aos="fade-in"
      >Tech Expo</GradientTypography>
      <section className={classes.wrapper}>
        <CloudinaryImg src="undraw_virtual_reality_xprpip.png" alt="Virtual reality" data-aos="fade-down"/>
        <section className={classes.content} data-aos="fade-up">
          <GradientTypography
            variant="h3" 
            style={{ fontSize: '18px', marginBottom: '12px' }}
          >Virtual Expo</GradientTypography>
          <WhiteTypography style={{lineHeight: '1.75'}}>
            Techno Expo merupakan serangkaian acara dari BinaryFest 2021 yang merupakan pameran teknologi berbasis virtual dengan harapan mampu menginspirasi anak-anak Indonesia untuk pada bidang teknologi. Pameran virtual ini menghadirkan beberapa karya dari mahasiswa UTY yang pastinya nggak kalah keren nih!!
          </WhiteTypography>
          <GradientButton>
            <a 
              href="https://expo.binaryfest.or.id/" 
              style={{ textDecoration: 'none' }}
              target='_blank'
              rel="noreferrer"
            >Play Now !</a>
          </GradientButton>
        </section>
      </section>
    </section>
  )
}
