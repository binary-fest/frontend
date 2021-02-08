import { Button, Container, FormControl, FormControlLabel, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import ListMember from '../components/ListMember'
import { AbsoluteFormHelperText, GradientButton, WhiteCheckbox, WhiteInput, WhiteInputLabel, WhiteTypography } from '../theme/extends'
import MemberModalPopup from '../components/MemberModalPopup'
import { useFormik } from 'formik'
import { CompetitionType, Team } from '../@types/Team'
import { useRecoilValue } from 'recoil'
import { membersRequestBodyState } from '../store/members'
import http from '../utils/http'
import Alert from '../components/Alert'

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
  aosDuration?: number
  testId?: string
}

const useStyles = makeStyles(({breakpoints}) => ({
  root: {
    paddingTop: '139px',
    '& .error-list-member': {
      color: '#f44336',
      textAlign: 'center',
      marginTop: '1rem',
      fontWeight: 'bold',
      fontSize: '20px'
    }
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
  },
  footer: {
    margin: '5rem auto 0 auto',
    paddingBottom: '200px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '440px',
    '& .label': {
      marginBottom: '1rem'
    }
  }
}))

interface RegisterFormik extends Team{
  membersError: string
  verify: string[]
}

const initialValueFormik: RegisterFormik = {
  name: '',
  email: '',
  institute: '',
  title: '',
  url_files: '',
  competition_type: 'iot',
  membersError: '',
  verify: []
}

const TeamMemberInput = React.memo(
  ({ error, handleChange, name, placeholder, value, aosDuration, testId }: TeamInputProps) => {
    return (
      <FormControl fullWidth error={!!error} data-aos-delay={aosDuration} data-aos="fade-up">
        <WhiteInputLabel htmlFor={`input-${name}`}>{placeholder}</WhiteInputLabel>
        <WhiteInput
          id={`input-${name}`}
          fullWidth
          name={name}
          value={value}
          onChange={handleChange}
          type="search"
          inputProps={{
            'data-testid': testId
          }}
        />
        <AbsoluteFormHelperText>{error}</AbsoluteFormHelperText>
      </FormControl>
    )
  }
)

export default function Register(): ReactElement {
  const membersRequestBody = useRecoilValue(membersRequestBodyState)
  const [isAlertShow, setIsAlertShow] = useState(false)
  const [request, setRequest] = useState({
    response: 0,
    message: ''
  })
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
      if (!membersRequestBody.length) errors.membersError = "Minimal harus memiliki 1 ketua"
      if (values.verify.length < 2) errors.verify = "Harap menyetujui 2 bidang diatas"

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

      const request = {
        team: teamData,
        members: membersRequestBody
      }

      const requestRegister = async () => {
        let res;
        setIsAlertShow(true)
        try {
          res = await http.post('/register', request)
          console.log(res)
        } catch (err) {
          console.log(err)
        }
      }

      requestRegister()
    }
  })

  const alertHandler = (state: boolean) => setIsAlertShow(state)

  const classes = useStyles()

  return (
    <>
    <Alert isShow={isAlertShow} handleShow={alertHandler}/>
    <MemberModalPopup />
      <Container className={classes.root}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit()
          }}
          autoComplete="off"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={5}>
              <WhiteTypography variant="h3" data-aos="fade-up">Pendaftaran Team</WhiteTypography>
              <div className={classes.teamForm}>
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="name"
                  value={formik.values.name}
                  placeholder="Name"
                  error={formik.errors.name}
                  aosDuration={500}
                  testId="input-name-team"
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  placeholder="Email"
                  error={formik.errors.email}
                  aosDuration={600}
                  testId="input-email-team"
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="institute"
                  value={formik.values.institute}
                  placeholder="Institute"
                  error={formik.errors.institute}
                  aosDuration={700}
                  testId="input-institute-team"
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="title"
                  value={formik.values.title}
                  placeholder="Judul"
                  error={formik.errors.title}
                  aosDuration={800}
                  testId="input-title-team"
                />
              </div>
            </Grid>
          
            <Grid item xs={12} md={6} lg={7} className={classes.competitionType} data-aos="fade-up">
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
                  testId="input-url-files-team"
                />
              </div>
            </Grid>
          </Grid>
          <ListMember />
          {formik.errors.membersError &&
            <Typography className="error-list-member">Error: {formik.errors.membersError}</Typography>
          }
          <div className={classes.footer}>
            <FormControlLabel
              data-aos="zoom-in"
              className="label"
              data-testid="verify-responsibility"
              control={
                <WhiteCheckbox
                  name="verify"
                  value="responsibilityVerify"
                  onChange={formik.handleChange}
                  color="default"
                />
              }
              label={
                <WhiteTypography>
                  Data yang anda inputkan merupakan data asli dan dapat di pertanggung jawabkan
                </WhiteTypography>
              }
            />
            <FormControlLabel
              data-aos="zoom-in"
              className="label"
              data-testid="verify-google-drive"
              control={
                <WhiteCheckbox
                  name="verify"
                  value="googleDriveVerify"
                  onChange={formik.handleChange}
                  color="default"
                />
              }
              label={
                <WhiteTypography>
                  Berkas yang ada di Google Drive tidak boleh di ubah selama menyetujui ini
                </WhiteTypography>
              }
            />
            {
              formik.errors.verify && (
                <WhiteInputLabel
                  className="label"
                  error={!!formik.errors.verify}
                >{formik.errors.verify}</WhiteInputLabel>
              )
            }
            <GradientButton
              type="submit"
              fullWidth
              style={{ margin: '0 auto' }}
              data-aos="zoom-in"
              data-testid="register-button"
            >
              <WhiteTypography>Register</WhiteTypography>
            </GradientButton>
          </div>
      </form>
    </Container>
    </>
  )
}
