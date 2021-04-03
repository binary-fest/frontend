import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Competition } from '../@types/Competition';
import CloudinaryImg from '../components/CloudinaryImg';
import FooterPage from '../components/FooterPage';
import LinkScroll from '../components/LinkScroll';
import useTitlePage from '../hooks/useTitlePage';
import { fetchCompetitions } from '../http/competition';
import { GradientButton, GradientTypography, StaticPageContentStyled } from '../theme/extends';

const useStyles = makeStyles(({spacing, breakpoints}) => ({
  heading: {
    fontSize: '36px',
    fontWeight: 'bold'
  },
  listCompetition: {
    color: 'white',
    marginBottom: '-67px',
    '& .competition-item': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: spacing(5),
      marginBottom: '67px',
      alignItems: 'center',
      [breakpoints.up('md')]: {
        width: '364px',
      },
      '& .competition-content': {
        marginTop: spacing(3),
        marginBottom: spacing(3),
      },
      '& h1': {
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: spacing(2)
      },
      '& .competition-image': {
        width: '100%',
        maxWidth: '243px',
        borderRadius: '0 20px 0 20px',
        height: '181px'
      },
      '& .download-icon': {
        marginRight: spacing(2)
      },
      '& *': {
        textAlign: 'center'
      }
    }
  },
  reoffer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '210px 0',
    '& h1': {
      fontSize: '70px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '27px'
    }
  }
}))

export default function CompetitionPage(): ReactElement {
  useTitlePage("Competition - BinaryFest")
  const [competitions, setCompetitions] = useState<Competition[]>([])

  const classes = useStyles()

  useEffect(() => {
    fetchCompetitions().then(data => {
      setCompetitions(data)
    })
  }, [])
  
  return (
    <StaticPageContentStyled>
      <GradientTypography className={classes.heading} align="center">Kompetisi</GradientTypography>
      <Grid container className={classes.listCompetition} justify="space-between">
        {competitions.map((competition, index) => {
          return (
            <Grid
              item
              key={competition.title}
              className="competition-item"
              data-aos="fade-up"
              data-aos-delay={index * 500}
            >
              <CloudinaryImg
                src={competition.imageUrl}
                alt={competition.title}
                className="competition-image"
              />
              <div className="competition-content">
                <Typography variant="h1">{competition.title}</Typography>
                <Typography style={{lineHeight: '1.75rem'}}>{competition.description}</Typography>
              </div>
              <div style={{marginTop: 'auto'}}>
                <GradientButton variant='contained' color="primary" disabled={!competition.isOpen}>
                  <a
                    href={competition.guideBookUrl}
                    style={{ textDecoration: 'none', display: 'flex' }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/download-icon.svg" alt="Download guide book" className="download-icon"/>
                    Download Guide Book
                  </a>
                </GradientButton>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <div className={classes.reoffer} data-aos="zoom-in">
        <Typography variant="h1" align="center">Are you ready ?</Typography>
        <div>  
          <GradientButton
            variant='contained'
            color="primary"
            disabled={!competitions.some(competition => competition.isOpen)}
          >
            <LinkScroll to="/register" style={{ textDecoration: 'none' }}>
              Registrasi Kompetisi
            </LinkScroll>
          </GradientButton>
        </div>
      </div>
      <FooterPage />
    </StaticPageContentStyled>
  )
}
