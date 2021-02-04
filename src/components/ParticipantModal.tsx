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
} from '@material-ui/core'
import React, { ReactElement } from 'react'
import { GradientButton } from '../theme/extends'
import { useFormik } from 'formik'

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

export default function ParticipantModal(): ReactElement {
  const formik = useFormik({
    initialValues: {
      name: '',
      nisn: '',
      email: '',
      phone: ''
    },
    onSubmit: (values, helpers) => {
      console.log('submitting')
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
            <FormControl fullWidth>
              <InputLabel htmlFor="input-name">Nama</InputLabel>
              <Input id="input-name" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-id">NISN / NIM</InputLabel>
              <Input id="input-id" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-email">Email</InputLabel>
              <Input id="input-email" type="email" fullWidth />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="input-whatsapp">Nomor Whatsapp</InputLabel>
              <Input id="input-whatsapp" type="number" fullWidth />
            </FormControl>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography>Jenis Kelamin</Typography>
                <RadioGroup className={classes.radioGroup}>
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
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Peran</Typography>
                <RadioGroup className={classes.radioGroup}>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction="column" className={classes.uploadContainer}>
              <Grid item>
                <Typography>Upload KTM / NISN</Typography>
                <input type="file" id="input-ktm" style={{display: 'none'}}/>
                <GradientButton>
                  <label htmlFor="input-ktm" className={classes.labelUpload}>
                    Pilih File
                  </label>
                </GradientButton>
                <Typography variant="caption" className="file-name">Tidak ada file dipilih</Typography>
              </Grid>
              <Grid item>
                <Typography>Upload Pas Foto 3x4</Typography>
                <input type="file" id="input-picture" style={{display: 'none'}}/>
                <GradientButton>
                  <label htmlFor="input-picture" className={classes.labelUpload}>
                    Pilih File
                  </label>
                </GradientButton>
                <Typography variant="caption" className="file-name">Tidak ada file dipilih</Typography>
              </Grid>
              <Grid item>
                <Typography>Bukti Follow IG @binaryfest.uty</Typography>
                <input type="file" id="input-screenshot" style={{display: 'none'}}/>
                <GradientButton>
                  <label htmlFor="input-screenshot" className={classes.labelUpload}>
                    Pilih File
                  </label>
                </GradientButton>
                <Typography variant="caption" className="file-name">Tidak ada file dipilih</Typography>
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
