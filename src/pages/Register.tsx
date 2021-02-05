import { Button, Container, FormControl, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import ListMember from '../components/ListMember'
import { GradientButton, WhiteInput, WhiteInputLabel, WhiteTypography } from '../theme/extends'
import MemberModalPopup from '../components/MemberModalPopup'

const useStyles = makeStyles(({breakpoints}) => ({
  root: {
    paddingTop: '139px'
  },
  teamForm: {
    '& > div': {
      marginTop: '29px'
    }
  },
  competitionType: {
    marginTop: '3rem',
    [breakpoints.up('md')]: {
      marginTop: '0'
    },
    '& button': {
      marginRight: '16px',
      marginTop: '29px'
    },
    '& .form-input-link': {
      marginTop: '29px',
      '& h3': {
        marginBottom: '1rem'
      }
    }
  },
  uploadFile: {
    marginTop: '36px'
  }
}))

export default function Register(): ReactElement {
  const [competitions, setCompetitions] = useState([
    {
      id: 'IOT',
      name: 'Internet of Things',
      isSelected: true,
    },
    {
      id: 'UIUX',
      name: 'UI / UX',
      isSelected: false,
    }
  ])

  const selectCompetition = (id: string) => {
    setCompetitions(
      competitions.map((comp) => ({ ...comp, isSelected: comp.id === id }))
    )
  }

  const classes = useStyles()

  return (
    <>
    <MemberModalPopup />
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={5}>
          <WhiteTypography variant="h3">Pendaftaran Team</WhiteTypography>
          <div className={classes.teamForm}>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-name-team">Nama Team</WhiteInputLabel>
              <WhiteInput id="input-name-team" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-email-team">Email ( Perwakilan )</WhiteInputLabel>
              <WhiteInput id="input-email-team" type="email" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-instansi-team">Instansi</WhiteInputLabel>
              <WhiteInput id="input-instansi-team" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-judul">Judul</WhiteInputLabel>
              <WhiteInput id="input-judul" fullWidth />
            </FormControl>
          </div>
        </Grid>
      
        <Grid item xs={12} md={6} lg={7} className={classes.competitionType}>
          <div>
            <WhiteTypography variant="h3">Jenis Perlombaan</WhiteTypography>
            {competitions.map((competition) => (
              competition.isSelected ? (
                <GradientButton
                  key={competition.id}
                  style={{ padding: '16px' }}
                  onClick={() => selectCompetition(competition.id)}
                >
                  <WhiteTypography>{competition.name}</WhiteTypography>
                </GradientButton>
              ) : (
                <Button
                  variant="contained"
                  key={competition.id}
                  style={{ padding: '16px' }}
                  onClick={() => selectCompetition(competition.id)}
                >
                  <Typography>{competition.name}</Typography>
                </Button>
              )
            ))}
          </div>
          <div className="form-input-link">
            <WhiteTypography variant="h3">Link Berkas</WhiteTypography>
            <FormControl fullWidth>
              <WhiteInputLabel htmlFor="input-judul">Link</WhiteInputLabel>
              <WhiteInput id="input-judul" fullWidth />
            </FormControl>
          </div>
        </Grid>
      </Grid>
      <ListMember />
    </Container>
    </>
  )
}
