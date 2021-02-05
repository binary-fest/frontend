import { Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { MemberState } from '../@types/Member'
import membersState, { memberModalState } from '../store/members'
import { isMemberModalShowState } from '../store/ui'
import { GradientButton, WhiteButton } from '../theme/extends'

interface Props {
  member: MemberState
  idx?: number
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    display: 'flex',
    borderRadius: '5px',
    flexDirection: 'column',
    padding: '30px 23px',
    '& .member-icon': {
      width: '102px',
      height: '102px',
      margin: '0 auto 26px auto',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '& .member-name': {
      fontWeight: 'bold'
    },
    '& .member-bio': {
      textAlign: 'center',
    },
    '& .member-files': {
      marginTop: '39px',
      marginBottom: '36px',
      width: '100%',
    },
    '& .files': {
      marginTop: '11px',
      '& p a': {
        padding: '10px 18px',
        border: '1px solid black',
        marginBottom: '12px',
        borderRadius: '5px',
        display: 'flex',
        textDecoration: 'none',
        '& .check': {
          display: 'block',
          width: '17.6px',
          height: '13.4px',
          borderBottom: '1px solid black',
          borderLeft: '1px solid black',
          transform: 'rotate(-45deg)',
          marginLeft: 'auto'
        }
      }
    }
  },
  profilePicture: {
    height: '108px',
    width: '108px',
    backgroundColor: '#c4c4c4',
    borderRadius: '50%',
    marginBottom: '34px',
    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: 'inherit'
    }
  },
  leaderCard: {
    background: 'linear-gradient(124.15deg, #FF512F -3.94%, #DF2672 179.22%)',
    '& p': {
      color: 'white'
    },
    '& .member-icon': {
      backgroundColor: 'white',
    },
    '& .member-role': {
      color: 'white',
      margin: '1rem 0',
      textAlign: 'center'
    },
    '& .files': {
      '& p a': {
        border: '1px solid white',
        '& .check': {
          borderBottom: '1px solid white',
          borderLeft: '1px solid white',
        }
      }
    }
  },
  memberCard: {
    backgroundColor: 'white',
    '& .member-icon': {
      backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)'
    },
    '& .member-role': {
      backgroundImage: 'linear-gradient(140.7deg, #FF512F 12%, #DF2672 95.63%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent',
      margin: '1rem 0',
      textAlign: 'center'
    },
    '& .files': {
      '& p a': {
        border: '1px solid #ff512f',
        '& .check': {
          borderBottom: '1px solid #ff512f',
          borderLeft: '1px solid #ff512f',
        }
      }
    }
  },
}))

export default function MemberCard({ member, idx = 1 }: Props): ReactElement {
  const [, setMemberState] = useRecoilState(membersState)
  const [, setMemberModalState] = useRecoilState(memberModalState)
  const [, setIsMemberModalShowState] = useRecoilState(isMemberModalShowState)
  const classes = useStyles()

  const deleteMember = () => setMemberState(members => members.filter(data => data.id !== member.id))

  const openModal = () => {
    setMemberModalState(member)
    setIsMemberModalShowState(true)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={clsx(classes.root, member.isLeader ? classes.leaderCard : classes.memberCard)}>
        <div
          style={{
            position: "absolute",
            right: "23px",
            cursor: 'pointer'
          }}
          onClick={deleteMember}
        >
          <img
            src={member.isLeader ? "/delete-leader.svg" : "/delete-member.svg"}
            alt="close"
          />
        </div>
        <div className="member-icon">
          {
            member.gender === "pria" ?
              <img src={member.isLeader ? "/man-leader.svg" : "/man-member.svg"} alt="icon" /> :
              <img src={member.isLeader ? "/woman-leader.svg" : "/woman-member.svg"} alt="icon"/>
          }
        </div>
        <div className="member-bio">
          <Typography className="member-name">{member.name}</Typography>
          <Typography style={{fontSize: '14px'}}>({member.student_id})</Typography>
        </div>
        <div style={{margin: '27px 0 26px 0', textAlign: 'center'}}>
          <Typography style={{ marginBottom: '9px', fontStyle: 'italic'}}>{member.email}</Typography>
          <Typography>{member.phone}</Typography>
        </div>
        <Typography className="member-role" variant="h3">
          {member.isLeader ? 'Ketua' : `Anggota ${idx}` }
        </Typography>
        <div>
          {member.isLeader ? 
            (<WhiteButton onClick={openModal} fullWidth>Update</WhiteButton>) :
            (<GradientButton onClick={openModal} fullWidth style={{color: 'white'}}>Update</GradientButton>)
          }
        </div>
      </div>
    </Grid>
  )
}
