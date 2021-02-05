import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, {  ReactElement } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { indexedMemberState } from '../store/members'
import MemberCard from './MemberCard'
import { WhiteTypography } from '../theme/extends'
import { isParticipantModalShowAtom } from '../store/ui'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '36px',
    '& .title': {
      marginBottom: '10px'
    },
    '& .add-participant': {
      backgroundColor: 'rgba(229, 229, 229, 0.64)',
      display: 'flex',
      borderRadius: '5px',
      alignItems: 'center',
      flexDirection: 'column',
      height: '297px',
      justifyContent: 'center',
      border: '5px dashed #cbcbcb',
      cursor: 'pointer',
      '& p': {
        color: '#cbcbcb',
        fontWeight: 'bold',
        marginTop: '17px'
      }
    }
  }
}))

export default function ListMember(): ReactElement {
  const [, setIsParticipantModalShow] = useRecoilState(isParticipantModalShowAtom)
  const indexedMembers = useRecoilValue(indexedMemberState)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <WhiteTypography variant="h3" className="title">List Anggota</WhiteTypography>
      <WhiteTypography style={{
        fontSize: '12px',
        fontStyle: 'italic',
        marginBottom: '29px'
      }}>* Klik anggota untuk mengedit</WhiteTypography>
      <Grid container spacing={3} justify="center">
        {indexedMembers.map(member => <MemberCard member={member} key={member.id} idx={member.idx}/>)}
        {indexedMembers.length < 3 && (
          <Grid item xs={12} sm={6} md={4} onClick={() => setIsParticipantModalShow(true)}>
            <div className="add-participant">
              <img src="/add-participant.svg" alt="Add Participant"/>
              <Typography>Tambah Peserta</Typography>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  )
}
