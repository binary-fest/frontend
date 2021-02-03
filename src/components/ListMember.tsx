import { Grid, makeStyles } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import membersAtom from '../store/members'
import MemberCard from './MemberCard'
import { WhiteTypography } from '../theme/extends'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '36px',
    '& .title': {
      marginBottom: '10px'
    }
  }
}))

export default function ListMember(): ReactElement {
  const members = useRecoilValue(membersAtom)
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
        {members.map(member => <MemberCard member={member} key={member.name}/>)}
      </Grid>
    </div>
  )
}
