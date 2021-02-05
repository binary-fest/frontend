import { makeStyles, Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { WhiteTypography } from '../theme/extends'

const useStyles = makeStyles(() => ({
  dropzone: {
    marginTop: '29px',
    height: '170px',
    backgroundColor: 'rgba(229, 229, 229, 0.64)',
    borderRadius: '5px',
    border: 'dashed 5px #cbcbcb',
    cursor: 'pointer',
    display: 'flex',
    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      '& p': {
        fontWeight: 'bold',
        color: '#cbcbcb',
        marginTop: '11px'
      }
    }
  }
}))

export default function UploadProposal(): ReactElement {
  const classes = useStyles()

  return (
    <>
      <WhiteTypography variant="h3">Upload Proposal</WhiteTypography>
      <div className={classes.dropzone}>
        <div className="content">
          <div>
            <img src="/add-proposal.svg" alt="Upload proposal" />
          </div>
          <Typography>Upload proposal disini</Typography>
        </div>
      </div>
    </>
  )
}
