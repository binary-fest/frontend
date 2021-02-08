import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, {  ReactElement } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { indexedMemberState } from '../store/members'
import MemberCard from './MemberCard'
import { WhiteTypography } from '../theme/extends'
import { isMemberModalShowState } from '../store/ui'
import { IndexedMemberState } from '../@types/Member'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

const MembersComponent = React.memo((props: { members: IndexedMemberState[] }) => {
  return (
    <TransitionGroup component={null}>
      {props.members.map(member => (
        <CSSTransition key={member.id} classNames="animate-MemberCard" unmountOnExit timeout={750}>
          <MemberCard member={member} key={member.id} idx={member.idx} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
})

export default React.memo(function ListMember(): ReactElement {
  const setIsMemberModalShowState = useSetRecoilState(isMemberModalShowState)
  const indexedMembers = useRecoilValue(indexedMemberState)
  const classes = useStyles()

  const showMemberModalHandler = () => setIsMemberModalShowState(true)

  return (
    <div className={classes.root}>
      <WhiteTypography variant="h3" className="title" data-aos="fade-up">List Anggota</WhiteTypography>
      <WhiteTypography data-aos="fade-up" data-aos-delay="250" style={{
        fontSize: '12px',
        fontStyle: 'italic',
        marginBottom: '29px'
      }}>* Klik anggota untuk mengedit</WhiteTypography>
      <Grid container spacing={3} justify="center">
        <MembersComponent members={indexedMembers}/>
        {indexedMembers.length < 3 && (
          <Grid item xs={12} sm={6} md={4} onClick={showMemberModalHandler} data-testid="show-MemberModal">
            <div className="add-participant" data-aos="zoom-in">
              <img src="/add-participant.svg" alt="Add Participant"/>
              <Typography>Tambah Peserta</Typography>
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  )
})
