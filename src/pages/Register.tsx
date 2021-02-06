import { Button, Container, FormControl, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import ListMember from '../components/ListMember'
import { AbsoluteFormHelperText, GradientButton, WhiteInput, WhiteInputLabel, WhiteTypography } from '../theme/extends'
import MemberModalPopup from '../components/MemberModalPopup'
import { useFormik } from 'formik'
import { CompetitionType, Team } from '../@types/Team'

interface CompetitionState {
  id: CompetitionType,
  name: string,
  isSelected: boolean
}

interface TeamInputProps {
  error: string | undefined
  name: string
  placeholder: string
  value: any
  handleChange: (e: React.ChangeEvent<any>) => void
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

const TeamMemberInput = React.memo(
  ({ error, handleChange, name, placeholder, value }: TeamInputProps) => {
    return (
      <FormControl fullWidth error={!!error}>
        <WhiteInputLabel htmlFor={`input-${name}`}>{placeholder}</WhiteInputLabel>
        <WhiteInput
          id={`input-${name}`}
          fullWidth
          name={name}
          value={value}
          onChange={handleChange}
        />
        <AbsoluteFormHelperText>{error}</AbsoluteFormHelperText>
      </FormControl>
    )
  }
)

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
    validateOnChange: false,
    validate: (values) => {
      const errors: any = {}
      if (!values.name) errors.name = "Tidak boleh kosong"
      if (!values.email) errors.email = "Tidak boleh kosong"
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = "Email tidak valid";
      if (!values.institute) errors.institute = "Tidak boleh kosong"
      if (!values.title) errors.title = "Tidak boleh kosong"
      if (!values.url_files) errors.url_files = "Tidak boleh kosong"

      return errors
    },
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
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="name"
                  value={formik.values.name}
                  placeholder="Name"
                  error={formik.errors.name}
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  placeholder="Email"
                  error={formik.errors.email}
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="institute"
                  value={formik.values.institute}
                  placeholder="Institute"
                  error={formik.errors.institute}
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="title"
                  value={formik.values.title}
                  placeholder="Judul"
                  error={formik.errors.title}
                />
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
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="url_files"
                  value={formik.values.url_files}
                  placeholder="Link"
                  error={formik.errors.url_files}
                />
              </div>
            </Grid>
          </Grid>
          <ListMember />
          <div style={{marginTop: '5rem', paddingBottom: '200px', display: 'flex'}}>
            <GradientButton type="submit" fullWidth style={{maxWidth: '440px', margin: '0 auto'}}>
              <WhiteTypography>Register</WhiteTypography>
            </GradientButton>
          </div>
      </form>
    </Container>
    </>
  )
}
