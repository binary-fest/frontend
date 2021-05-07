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
import Alert, { AlertStatus } from '../components/Alert'
import { validateEmail, validateSubmissionOpen } from '../utils/validate'
import { useEffect } from 'react'
import { fetchCompetitions } from '../http/competition'
import ErrorPage from './404'
import { Competition } from '../@types/Competition'
import { useHistory } from 'react-router'

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

const useStyles = makeStyles(({ breakpoints }) => ({
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
  },
  guideLink: {
    color: 'white'
  },
  listGuideLink: {
    marginTop: '29px',
    '& li': {
      marginTop: '0.5rem',
      paddingLeft: '1rem',
      position: 'relative',
      '&:before': {
        content: "'• '",
        color: "white",
        fontWeight: "bold",
        width: "1em",
        marginRight: '1rem',
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)'
      }
    }
  }
}))

interface RegisterFormik extends Team{
  membersError: string
  verify: string[]
  url_files: ''
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
  const [loading, setLoading] = useState({
    isFetching: true,
    isPageOpen: false
  })
  const [pickCompetitions, setPickCompetitions] = useState<CompetitionState[]>([])
  const [alertStatus, setAlertStatus] = useState<AlertStatus>({
    isShow: false,
    message: '',
    variant: 'wait'
  })
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const history = useHistory()

  const selectCompetitionHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = e.currentTarget.dataset.competition
    setPickCompetitions(
      pickCompetitions.map((comp) => ({ ...comp, isSelected: comp.id === id }))
    )
  }

  const formik = useFormik({
    initialValues: { ...initialValueFormik },
    validateOnChange: false,
    validate: (values) => {
      const errors: any = {}
      const checkEmail = validateEmail(values.email)
      if (!values.name) errors.name = "Tidak boleh kosong"
      if (!values.email) errors.email = "Tidak boleh kosong"
      if (!checkEmail.isValid) errors.email = checkEmail.message
      if (!values.institute) errors.institute = "Tidak boleh kosong"
      if (!values.title) errors.title = "Tidak boleh kosong"
      if (!values.url_files) errors.url_files = "Tidak boleh kosong"
      if (!membersRequestBody.length) errors.membersError = "Minimal harus memiliki 1 ketua"
      if (values.verify.length < 2) errors.verify = "Harap menyetujui 2 bidang diatas"

      return errors
    },
    onSubmit: async (values) => {
      const [selectedCompetition] = pickCompetitions.filter(comp => comp.isSelected)

      const teamData: Team = {
        name: values.name,
        email: values.email,
        institute: values.institute,
        title: values.title,
        competition_type: selectedCompetition.id,
      }

      const request = {
        team: teamData,
        members: membersRequestBody,
        submission: {
          submission_type: "1",
          url_files: values.url_files
        }
      }

      setAlertStatus({
        isShow: true,
        variant: 'wait',
        message: ''
      })

      const requestRegister = async () => {
        try {
          await http.post('/competition/register', request)
          setAlertStatus({
            isShow: true,
            variant: 'success',
            message: ''
          })
        } catch (err) {
          setAlertStatus({
            isShow: true,
            variant: 'error',
            message: err.response.data.message || ''
          })
        }
      }

      requestRegister()
    }
  })

  const alertHandler = (state: boolean) => setAlertStatus({...alertStatus, isShow: state})

  const classes = useStyles()

  useEffect(() => {
    validateSubmissionOpen().then((status) => {
      status && history.push('/')

      if (!status) {
        fetchCompetitions().then(data => {
          setLoading({
            isFetching: false,
            isPageOpen: data.some(competition => competition.isOpen)
          })
    
          const newCompetitions = data.filter(competition => competition.isOpen)
          const selectCompetitions: CompetitionState[] = newCompetitions
            .map((competition, idx) => {
              return {
                id: competition.code,
                name: competition.title,
                isSelected: idx === 0,
              }
            })
          
          setCompetitions(newCompetitions)
          setPickCompetitions(selectCompetitions)
        })
      }
    })
  }, [history])

  if (loading.isFetching) return <></>

  if (!loading.isPageOpen)
    return <ErrorPage title="</>" caption="Halaman sedang dalam proses pengembangan" />

  return (
    <>
      <Alert
        isShow={alertStatus.isShow}
        handleShow={alertHandler}
        variant={alertStatus.variant}
        message={alertStatus.message}
      />
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
              <div style={{marginBottom: '29px'}}>
                <WhiteTypography variant="h3" data-aos="fade-up">Petunjuk Pendaftaran</WhiteTypography>
                <ul className={classes.listGuideLink} data-aos="fade-up">
                  {competitions.map(competition => {
                    return (
                      <li>
                        <a href={competition.technicalGuideUrl} className={classes.guideLink} target="_blank" rel="noreferrer">
                          <Typography>{competition.title}</Typography>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <WhiteTypography variant="h3" data-aos="fade-up">Pendaftaran Team</WhiteTypography>
              <div className={classes.teamForm}>
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="name"
                  value={formik.values.name}
                  placeholder="Nama Team"
                  error={formik.errors.name}
                  aosDuration={500}
                  testId="input-name-team"
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="email"
                  value={formik.values.email}
                  placeholder="Email Team"
                  error={formik.errors.email}
                  aosDuration={600}
                  testId="input-email-team"
                />
                <TeamMemberInput
                  handleChange={formik.handleChange}
                  name="institute"
                  value={formik.values.institute}
                  placeholder="Insitut"
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
                {pickCompetitions.map((competition) => (
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
