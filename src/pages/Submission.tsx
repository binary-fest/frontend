import { FormControl, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {
  AbsoluteFormHelperText,
  GradientButton,
  GradientTypography,
  StaticPageContentStyled,
  WhiteInput,
  WhiteInputLabel,
  WhiteTypography
} from '../theme/extends';
import { useLocation } from 'react-router-dom'

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
  const [key, setKey] = useState('')
  const [urlFiles, setUrlFiles] = useState('')
  const [keyErrorMessage, setKeyErrorMessage] = useState('')
  const [urlFilesErrorMessage, setUrlFilesErrorMessage] = useState('')
  const params = useLocation()
  const classes = useStyles()

  const inputKeyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyErrorMessage(!e.target.value ? 'Data tidak boleh kosong' : '')
    setKey(e.target.value)
  }
  
  const inputUrlFilesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlFilesErrorMessage(!e.target.value ? 'Data tidak boleh kosong' : '')
    setUrlFiles(e.target.value)
  }

  const submitHandler = () => {
    const request = {
      key, urlFiles
    }

    if (!request.key || !request.urlFiles) return
    console.log(request)
  }

  useEffect(() => {
    const queryString = new URLSearchParams(params.search).get('key') || ''
    setKey(queryString)
  }, [params.search])

  return (
    <StaticPageContentStyled>
      <main className={classes.container}>
        <WhiteTypography
          style={{ marginBottom: '38px' }}
          align="center"
          variant="h3"
          data-aos="fade-in"
          data-aos-delay="500"
        >Submission Team</WhiteTypography>
        <FormControl data-aos="fade-up" className={classes.input} error={!!keyErrorMessage}>
          <WhiteInputLabel>Key</WhiteInputLabel>
          <WhiteInput
            fullWidth
            type="search"
            value={key}
            onChange={inputKeyHandler}
          />
          <AbsoluteFormHelperText>{keyErrorMessage}</AbsoluteFormHelperText>
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
        <GradientButton fullWidth onClick={submitHandler}>
          <WhiteTypography>Submit Submission</WhiteTypography>
        </GradientButton>
      </main>
    </StaticPageContentStyled>
  )
}

export default SubmissionPage