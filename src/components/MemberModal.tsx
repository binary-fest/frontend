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
import React, { ReactElement } from 'react'
import { AbsoluteFormHelperText, GradientButton } from '../theme/extends'
import { useFormik } from 'formik'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import membersState, { initialMemberModal, leaderAtom, memberModalState } from '../store/members'
import { isMemberModalShowState } from '../store/ui'
import { MemberFormik, MemberState } from '../@types/Member'
import { validateEmail } from '../utils/validate'

interface MemberInputProps {
  error: string | undefined
  name: string
  placeholder: string
  value: any
  handleChange: (e: React.ChangeEvent<any>) => void
  testId?: string
}

const useStyles = makeStyles(({breakpoints}) => ({
  container: {
    position: 'fixed',
    zIndex: 10000,
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: '650px',
    '& .close-button': {
      position: 'absolute',
      right: '3rem',
      top: '2.5rem',
      cursor: 'pointer'
    }
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

const MemberInput = React.memo(
  ({ error, handleChange, name, placeholder, value, testId }: MemberInputProps) =>
  {
    return (
      <FormControl fullWidth error={!!error}>
        <InputLabel htmlFor={`input-${name}`}>{placeholder}</InputLabel>
        <Input
          id={`input-${name}`}
          fullWidth
          name={name}
          value={value}
          onChange={handleChange}
          inputProps={{
            'data-testid': testId
          }}
        />
        <AbsoluteFormHelperText>{error}</AbsoluteFormHelperText>
      </FormControl>
    )
  }
)

export default function MemberModal(): ReactElement {
  const [memberModal, setMemberModalState] = useRecoilState(memberModalState)
  const setMembersAtom = useSetRecoilState(membersState)
  const leader = useRecoilValue(leaderAtom)
  const setIsMemberModalShowState = useSetRecoilState(isMemberModalShowState)

  const formik = useFormik<MemberFormik>({
    initialValues: {
      name: memberModal.name,
      student_id: memberModal.student_id,
      email: memberModal.email,
      phone: memberModal.phone,
      gender: memberModal.gender,
      role: memberModal.isLeader ? 'ketua' : 'anggota',
    },
    validateOnChange: false,
    validate: (values) => {
      const errors: any = {}
      const checkEmail = validateEmail(values.email)
      if (!values.name) errors.name = "Tidak boleh kosong"
      if (!values.student_id) errors.student_id = "Tidak boleh kosong"
      if (!values.email) errors.email = "Tidak boleh kosong"
      if (!checkEmail.isValid) errors.email = checkEmail.message
      if (!values.phone) errors.phone = "Tidak boleh kosong"
      if (!values.gender) errors.gender = "Pilih salah satu"
      if (!values.role) errors.role = "Pilih salah satu"

      return errors
    },
    onSubmit: (values, helpers) => {
      const memberData: MemberState = {
        id: (new Date().getTime()).toString(),
        name: values.name,
        student_id: values.student_id,
        email: values.email,
        phone: values.phone,
        gender: values.gender,
        isLeader: values.role === 'ketua',
      }

      if (memberModal.id !== '') {
        setMembersAtom((members) => {
          const newMember = members.map((member) => {
            if (member.id !== memberModal.id) return member

            memberData.id = memberModal.id
            return memberData
          })

          return newMember
        })
        setMemberModalState(initialMemberModal)
        setIsMemberModalShowState(false)
        return
      }
      

      setMembersAtom((currVal) => [...currVal, memberData])
      setIsMemberModalShowState(false)
    }
  })

  const closeModal = () => {
    setMemberModalState(initialMemberModal)
    setIsMemberModalShowState(false)
  }

  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <form
        className={classes.root}
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}
        autoComplete="off"
      >
        <div className="close-button" onClick={closeModal}>
          <img src="/delete-member.svg" alt="close"/>
        </div>
        <Typography variant="h3" data-testid="title-MemberModal">
          {memberModal.id !== '' ? 'Update Anggota' : 'Tambah Anggota'}
        </Typography>
        <Grid container spacing={4}>
          <Grid item className={classes.formArea}>
            <MemberInput
              handleChange={formik.handleChange}
              error={formik.errors.name}
              value={formik.values.name}
              name="name"
              placeholder="Nama"
              testId="input-name-member"
            />
            <MemberInput
              handleChange={formik.handleChange}
              error={formik.errors.student_id}
              value={formik.values.student_id}
              name="student_id"
              placeholder="NISN / NIM"
              testId="input-student-id-member"
            />
            <MemberInput
              handleChange={formik.handleChange}
              error={formik.errors.email}
              value={formik.values.email}
              name="email"
              placeholder="Email"
              testId="input-email-member"
            />
            <MemberInput
              handleChange={formik.handleChange}
              error={formik.errors.phone}
              value={formik.values.phone}
              name="phone"
              placeholder="Nomor Whatsapp"
              testId="input-whatsapp-member"
            />
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography>Jenis Kelamin</Typography>
                <RadioGroup
                  className={classes.radioGroup}
                  onChange={formik.handleChange}
                  name="gender"
                  defaultValue={formik.initialValues.gender}
                >
                  <FormControlLabel
                    value="pria"
                    control={<Radio color="primary" />}
                    label="Pria"
                    data-testid="gender-man"
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
                <RadioGroup
                  className={classes.radioGroup}
                  onChange={formik.handleChange}
                  name="role"
                  defaultValue={formik.initialValues.role}
                >
                  <FormControlLabel
                    value="anggota"
                    control={<Radio color="primary" />}
                    label="Anggota"
                  />
                  <FormControlLabel
                    value="ketua"
                    disabled={formik.initialValues.role === "ketua" ? false : !!leader}
                    control={<Radio color="primary" />}
                    label="Ketua"
                    data-testid="role-leader"
                  />
                </RadioGroup>
                <FormHelperText error={!!formik.errors.role}>{formik.errors.role}</FormHelperText> 
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            
          </Grid>
        </Grid>
      
        <div className={classes.addParticipantButton}>
          <GradientButton type="submit" data-testid="add-member-button">
            {memberModal.id !== '' ? 'Update Anggota' : 'Tambah Anggota'}
          </GradientButton>
        </div>
      </form>
    </Container>
  )
}
