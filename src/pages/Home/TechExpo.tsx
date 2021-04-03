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
      maxWidth: "460px",
      maxHeight: "251px",
    },
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center'
    }
  },
  content: {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '419.71px',
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
        <CloudinaryImg src="undraw_virtual_reality_xprpip.png" alt="Virtual reality" />
        <section className={classes.content}>
          <GradientTypography
            variant="h3" 
            style={{ fontSize: '18px', marginBottom: '12px' }}
          >3D Virtual Expo</GradientTypography>
          <WhiteTypography style={{lineHeight: '1.75'}}>
            Techno Expo merupakan serangkaian acara yang diadakan oleh BinaryFest 2021, yaitu pameran teknologi berbasis virtual yang diharapkan mampu menginspirasi mahasiswa untuk memiliki ide terkait teknologi, seperti beberapa karya yang sudah dipamerkan. Pameran virtual ini menghadirkan beberapa karya dari mahasiswa UTY sendiri baik independent, berbentuk UKM maupun HMJ.
          </WhiteTypography>
          <GradientButton>Play Now !</GradientButton>
        </section>
      </section>
    </section>
  )
}
