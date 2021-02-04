import {
  makeStyles,
  Typography,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { AbsoluteFormHelperText, GradientButton } from '../theme/extends'
import { useFormik } from 'formik'
import { useRecoilState } from 'recoil'
import membersAtom, { Member } from '../store/members'
import { isParticipantModalShowAtom } from '../store/ui'
import { FileUploadState } from '../@types/FileUpload'
import UploadButtonArea from './UploadButtonArea'

interface ParticipantInputProps {
  error: string | undefined
  name: string
  placeholder: string
  handleChange: (e: React.ChangeEvent<any>) => void
}

const fileUploadInititalState: FileUploadState = {
  fileName: '',
  base64: '',
  size: 0,
  error: ''
}

const useStyles = makeStyles(({breakpoints}) => ({
  container: {
    position: 'fixed',
    zIndex: 10000,
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2rem',
    maxHeight: '90vh',
    overflowY: 'auto',
    '& h3': {
      marginBottom: '31px'
    }
  },
  formArea: {
    '& > div:not(:last-child)': {
      marginBottom: '38px'
    }
  },
  radioGroup: {
    flexDirection: 'row'
  },
  labelUpload: {
    color: 'white',
    cursor: 'pointer'
  },
  uploadContainer: {
    '& > div': {
      marginBottom: '1rem',
      '& p': {
        marginBottom: '.5rem'
      },
      '& .file-name': {
        marginLeft: '1rem'
      }
    }
  },
  addParticipantButton: {
    marginTop: '3rem',
    [breakpoints.up('sm')]: {
      marginTop: '1rem'
    },
    [breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
    '& button': {
      color: 'white',
      width: '100%'
    },
  }
}))

const ParticipantInput = ({ error, handleChange, name, placeholder }: ParticipantInputProps) => {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel htmlFor={`input-${name}`}>{placeholder}</InputLabel>
      <Input
        id={`input-${name}`}
        fullWidth
        name={name}
        onChange={handleChange}
      />
      <AbsoluteFormHelperText>{error}</AbsoluteFormHelperText>
    </FormControl>
  )
}

export default function ParticipantModal(): ReactElement {
  const [, setMembersAtom] = useRecoilState(membersAtom)
  const [, setIsParticipantModalShow] = useRecoilState(isParticipantModalShowAtom)
  const [pictureProfile, setPictureProfile] = useState<FileUploadState>(fileUploadInititalState)
  const [cardProfile, setCardProfile] = useState<FileUploadState>(fileUploadInititalState)
  const [screenshotFile, setScreenshotFile] = useState<FileUploadState>(fileUploadInititalState)

  const formik = useFormik({
    initialValues: {
      name: '',
      nim: '',
      email: '',
      phone: '',
      gender: '',
      role: '',
      pictureFile: ''
    },
    validateOnChange: false,
    validate: (values) => {
      const errors: any = {}
      if (!values.name) errors.name = "Tidak boleh kosong"
      if (!values.nim) errors.nim = "Tidak boleh kosong"
      if (!values.email) errors.email = "Tidak boleh kosong"
      if (!values.phone) errors.phone = "Tidak boleh kosong"
      if (!values.gender) errors.gender = "Pilih salah satu"
      if (!values.role) errors.role = "Pilih salah satu"

      if (!pictureProfile.fileName) {
        setPictureProfile((curr) => ({ ...curr, error: 'File tidak boleh kosong' }))
        errors.upload = ''
      }
      if (!cardProfile.fileName) {
        setCardProfile((curr) => ({ ...curr, error: 'File tidak boleh kosong' }))
        errors.upload = ''
      }
      if (!screenshotFile.fileName) {
        setScreenshotFile((curr) => ({ ...curr, error: 'File tidak boleh kosong' }))
        errors.upload = ''
      }

      return errors
    },
    onSubmit: (values, helpers) => {
      const memberData: Member = {
        name: values.name,
        nim: values.nim,
        email: values.email,
        phone: values.phone,
        gender: values.gender as "pria" | "wanita",
        isAdmin: values.role === 'Ketua',
        pictureFile: {
          base64: pictureProfile.base64,
          fileName: pictureProfile.fileName,
          size: pictureProfile.size
        },
        profileCardFile: {
          base64: cardProfile.base64,
          fileName: cardProfile.fileName,
          size: cardProfile.size
        },
        screenshotFile: {
          base64: screenshotFile.base64,
          fileName: screenshotFile.fileName,
          size: screenshotFile.size
        }
      }

      setMembersAtom((currVal) => {
        const resetVal = currVal.map(val => ({ ...val, isAdmin: false }))
        return [...resetVal, memberData]
      })
      setIsParticipantModalShow(false)
    }
  })

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <form
        className={classes.root}
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
      >
        <Typography variant="h3">Tambah Peserta</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className={classes.formArea}>
            <ParticipantInput
              handleChange={formik.handleChange}
              error={formik.errors.name}
              name="name"
              placeholder="Nama"
            />
            <ParticipantInput
              handleChange={formik.handleChange}
              error={formik.errors.nim}
              name="nim"
              placeholder="NISN / NIM"
            />
            <ParticipantInput
              handleChange={formik.handleChange}
              error={formik.errors.email}
              name="email"
              placeholder="Email"
            />
            <ParticipantInput
              handleChange={formik.handleChange}
              error={formik.errors.phone}
              name="phone"
              placeholder="Nomor Whatsapp"
            />
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography>Jenis Kelamin</Typography>
                <RadioGroup className={classes.radioGroup} onChange={formik.handleChange} name="gender">
                  <FormControlLabel
                    value="pria"
                    control={<Radio color="primary" />}
                    label="Pria"
                  />
                  <FormControlLabel
                    value="wanita"
                    control={<Radio color="primary" />}
                    label="Wanita"
                  />
                </RadioGroup> 
                <FormHelperText error={!!formik.errors.gender}>{formik.errors.gender}</FormHelperText> 
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Peran</Typography>
                <RadioGroup className={classes.radioGroup} onChange={formik.handleChange} name="role">
                  <FormControlLabel
                    value="Ketua"
                    control={<Radio color="primary" />}
                    label="Ketua"
                  />
                  <FormControlLabel
                    value="Anggota"
                    control={<Radio color="primary" />}
                    label="Anggota"
                  />
                </RadioGroup>
                <FormHelperText error={!!formik.errors.role}>{formik.errors.role}</FormHelperText> 
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column" className={classes.uploadContainer}>
              <Grid item>
                <Typography>Upload KTM / NISN</Typography>
                <UploadButtonArea
                  id="input-ktm"
                  onUpload={(fileInfo) => setCardProfile(fileInfo)}
                  max={2097152}
                  state={cardProfile}
                />
              </Grid>
              <Grid item>
                <Typography>Upload Pas Foto 3x4</Typography>
                <UploadButtonArea
                  id="input-picture"
                  onUpload={(fileInfo) => setPictureProfile(fileInfo)}
                  max={2097152}
                  state={pictureProfile}
                />
              </Grid>
              <Grid item>
                <Typography>Bukti Follow IG @binaryfest.uty</Typography>
                <UploadButtonArea
                  id="input-screenshot"
                  onUpload={(fileInfo) => setScreenshotFile(fileInfo)}
                  max={1048576}
                  state={screenshotFile}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
        <div className={classes.addParticipantButton}>
          <GradientButton type="submit">Tambah Peserta</GradientButton>
        </div>
      </form>
    </Container>
  )
}
