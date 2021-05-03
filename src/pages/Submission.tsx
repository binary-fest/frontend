import { FormControl, FormControlLabel, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {
  AbsoluteFormHelperText,
  GradientButton,
  StaticPageContentStyled,
  WhiteCheckbox,
  WhiteInput,
  WhiteInputLabel,
  WhiteTypography
} from '../theme/extends';
import { Link, useLocation } from 'react-router-dom'
import Alert, { AlertStatus } from '../components/Alert';
import { verifyTokenSubmission, sendTokenSubmission } from '../http/team';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '448px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  input: {
    width: '100%',
    marginBottom: '38px'
  }
}))

const SubmissionPage = () => {
  const [token, setToken] = useState('')
  const [urlFiles, setUrlFiles] = useState('')
  const [tokenErrorMessage, setTokenErrorMessage] = useState('')
  const [urlFilesErrorMessage, setUrlFilesErrorMessage] = useState('')
  const [isInvalidToken, setIsInvalidToken] = useState(true)
  const [isVerifyResponsibility, setIsVerifyResponsibility] = useState(false)
  const [isVerifyGoogleDrive, setIsVerifyGoogleDrive] = useState(false)
  const [alertStatus, setAlertStatus] = useState<AlertStatus>({
    isShow: false,
    message: '',
    variant: 'wait'
  })
  const [isFetching, setIsFetching] = useState(true)
  const params = useLocation()
  const classes = useStyles()

  const inputTokenHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenErrorMessage(!e.target.value ? 'Data tidak boleh kosong' : '')
    setToken(e.target.value)
  }
  
  const inputUrlFilesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlFilesErrorMessage(!e.target.value ? 'Data tidak boleh kosong' : '')
    setUrlFiles(e.target.value)
  }

  const verifyResponsibilityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerifyResponsibility(!isVerifyResponsibility)
  }

  const verifyGoogleDriveHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerifyGoogleDrive(!isVerifyGoogleDrive)
  }

  const alertHandler = (state: boolean) => setAlertStatus({...alertStatus, isShow: state})

  const submitHandler = () => {
    const request = {
      key: token, urlFiles
    }

    if (!request.key || !request.urlFiles || !isVerifyGoogleDrive || !isVerifyResponsibility) {
      setAlertStatus({
        isShow: true,
        variant: 'error',
        message: 'Pengumpulan gagal, silahkan periksa formulir atau tunggu beberapa saat lagi'
      })
      return
    }
    sendTokenSubmission(token, urlFiles).then(() => {
      setAlertStatus({
        isShow: true,
        variant: 'success',
        message: 'Pengumpulan berhasil'
      })
    }).catch(() => {
      setAlertStatus({
        isShow: true,
        variant: 'error',
        message: 'Pengumpulan gagal, silahkan periksa token'
      })
    })

  }

  useEffect(() => {
    const queryString = new URLSearchParams(params.search).get('token') || ''
    if (!queryString) {
      setIsFetching(false)
      return setIsInvalidToken(true)
    }

    verifyTokenSubmission(queryString).then(() => {
      setToken(queryString)
      setIsInvalidToken(false)
    }).catch(() => {
      setIsInvalidToken(true)
    }).finally(() => {
      setIsFetching(false)
    })
  }, [params.search])

  return (
    <>
      <Alert
        isShow={alertStatus.isShow}
        handleShow={alertHandler}
        variant={alertStatus.variant}
        message={alertStatus.message}
      />
      <StaticPageContentStyled>
        <main className={classes.container}>
          {isFetching ? <></> : (
            <>
              <WhiteTypography
                style={{ marginBottom: '38px' }}
                align="center"
                variant="h3"
                data-aos="fade-in"
                data-aos-delay="500"
              >{isInvalidToken ? "Invalid Token" : "Submission Team"}</WhiteTypography>
              {isInvalidToken ? null : (
                <>
                  <FormControl data-aos="fade-up" className={classes.input} error={!!tokenErrorMessage}>
                    <WhiteInputLabel>Token</WhiteInputLabel>
                    <WhiteInput
                      fullWidth
                      type="search"
                      value={token}
                      onChange={inputTokenHandler}
                      disabled
                      style={{color: 'white'}}
                    />
                    <AbsoluteFormHelperText>{tokenErrorMessage}</AbsoluteFormHelperText>
                  </FormControl>
                  <FormControl data-aos="fade-up" className={classes.input} error={!!urlFilesErrorMessage}>
                    <WhiteInputLabel>Url Berkas</WhiteInputLabel>
                    <WhiteInput
                      fullWidth
                      type="search"
                      value={urlFiles}
                      onChange={inputUrlFilesHandler}
                    />
                    <AbsoluteFormHelperText>{urlFilesErrorMessage}</AbsoluteFormHelperText>
                  </FormControl>
                  <FormControlLabel
                    data-aos="zoom-in"
                    className="label"
                    data-testid="verify-responsibility"
                    control={
                      <WhiteCheckbox
                        name="verify"
                        value="responsibilityVerify"
                        color="default"
                        onChange={verifyResponsibilityHandler}
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
                    style={{marginBottom: '2rem'}}
                    control={
                      <WhiteCheckbox
                        name="verify"
                        value="googleDriveVerify"
                        color="default"
                        onChange={verifyGoogleDriveHandler}
                      />
                    }
                    label={
                      <WhiteTypography>
                        Berkas yang ada di Google Drive tidak boleh di ubah selama menyetujui ini
                      </WhiteTypography>
                    }
                  />
                </>
              )}
              {isInvalidToken ? (
                <GradientButton fullWidth data-aos="fade-in">
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <WhiteTypography>Kembali ke beranda</WhiteTypography>
                  </Link>
                </GradientButton>
              ) : (
                <GradientButton fullWidth onClick={submitHandler} data-aos="fade-in">
                  <WhiteTypography>Submit Submission</WhiteTypography>
                </GradientButton>
              )}
            </>
          )}
        </main>
      </StaticPageContentStyled>
    </>
  )
}

export default SubmissionPage