import { FormControl, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {
  AbsoluteFormHelperText,
  GradientButton,
  StaticPageContentStyled,
  WhiteInput,
  WhiteInputLabel,
  WhiteTypography
} from '../theme/extends';
import { Link, useLocation } from 'react-router-dom'

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

  const submitHandler = () => {
    const request = {
      key: token, urlFiles
    }

    if (!request.key || !request.urlFiles) return
    console.log(request)
  }

  useEffect(() => {
    const queryString = new URLSearchParams(params.search).get('token') || ''
    if (!queryString) {
      return setIsInvalidToken(true)
    }
    setToken(queryString)
    setIsInvalidToken(false)
  }, [params.search])

  return (
    <StaticPageContentStyled>
      <main className={classes.container}>
        {isInvalidToken && <div>Invalid Token</div>}
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
          </>
        )}
        {isInvalidToken ? (
          <GradientButton fullWidth onClick={submitHandler} data-aos="fade-in">
            <Link to="/" style={{textDecoration: 'none'}}>
              <WhiteTypography>Kembali ke beranda</WhiteTypography>
            </Link>
          </GradientButton>
        ) : (
          <GradientButton fullWidth onClick={submitHandler} data-aos="fade-in">
            <WhiteTypography>Submit Submission</WhiteTypography>
          </GradientButton>
        )}
      </main>
    </StaticPageContentStyled>
  )
}

export default SubmissionPage