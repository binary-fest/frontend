import { Button, Container, FormControl, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import ListMember from '../components/ListMember'
import { GradientButton, WhiteInput, WhiteInputLabel, WhiteTypography } from '../theme/extends'
import MemberModalPopup from '../components/MemberModalPopup'
import { useFormik } from 'formik'
import { CompetitionType, Team } from '../@types/Team'

interface CompetitionState {
  id: CompetitionType,
  name: string,
  isSelected: boolean
}

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

const initialValueFormik: Team = {
  name: '',
  email: '',
  institute: '',
  title: '',
  url_files: '',
  competition_type: 'iot'
}

export default function Register(): ReactElement {
  const [competitions, setCompetitions] = useState<CompetitionState[]>([
    {
      id: 'iot',
      name: 'Internet of Things',
      isSelected: true,
    },
    {
      id: 'uiux',
      name: 'UI / UX',
      isSelected: false,
    }
  ])

  const selectCompetitionHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = e.currentTarget.dataset.competition
    setCompetitions(
      competitions.map((comp) => ({ ...comp, isSelected: comp.id === id }))
    )
  }

  const formik = useFormik({
    initialValues: { ...initialValueFormik },
    onSubmit: (values) => {
      const [selectedCompetition] = competitions.filter(comp => comp.isSelected)

      const teamData: Team = {
        name: values.name,
        email: values.email,
        institute: values.institute,
        title: values.title,
        competition_type: selectedCompetition.id,
        url_files: values.url_files
      }
      alert(JSON.stringify(teamData, undefined, 2))
    }
  })

  const classes = useStyles()

  return (
    <>
    <MemberModalPopup />
      <Container className={classes.root}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={5}>
              <WhiteTypography variant="h3">Pendaftaran Team</WhiteTypography>
              <div className={classes.teamForm}>
                <FormControl fullWidth>
                  <WhiteInputLabel htmlFor="input-name-team">Nama Team</WhiteInputLabel>
                  <WhiteInput
                    id="input-name-team"
                    fullWidth
                    onChange={formik.handleChange}
                    name="name"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <WhiteInputLabel htmlFor="input-email-team">Email ( Perwakilan )</WhiteInputLabel>
                  <WhiteInput
                    id="input-email-team"
                    type="email"
                    fullWidth
                    onChange={formik.handleChange}
                    name="email"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <WhiteInputLabel htmlFor="input-instansi-team">Instansi</WhiteInputLabel>
                  <WhiteInput
                    id="input-instansi-team"
                    fullWidth
                    onChange={formik.handleChange}
                    name="institute"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <WhiteInputLabel htmlFor="input-judul">Judul</WhiteInputLabel>
                  <WhiteInput
                    id="input-judul"
                    fullWidth
                    onChange={formik.handleChange}
                    name="title"
                  />
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
                      data-competition={competition.id}
                      onClick={selectCompetitionHandler}
                    >
                      <WhiteTypography>{competition.name}</WhiteTypography>
                    </GradientButton>
                  ) : (
                    <Button
                      variant="contained"
                      key={competition.id}
                      style={{ padding: '16px' }}
                      data-competition={competition.id}
                      onClick={selectCompetitionHandler}
                    >
                      <Typography>{competition.name}</Typography>
                    </Button>
                  )
                ))}
              </div>
              <div className="form-input-link">
                <WhiteTypography variant="h3">Link Berkas</WhiteTypography>
                <FormControl fullWidth>
                  <WhiteInputLabel htmlFor="input-link">Link</WhiteInputLabel>
                  <WhiteInput id="input-link" fullWidth onChange={formik.handleChange} name="url_files"/>
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <ListMember />
          <GradientButton type="submit">Register</GradientButton>
      </form>
    </Container>
    </>
  )
}
