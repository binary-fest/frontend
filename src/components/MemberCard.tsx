import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { MemberState } from '../@types/Member'
import membersState, { memberModalState } from '../store/members'
import { isParticipantModalShowAtom } from '../store/ui'

interface Props {
  member: MemberState
  idx?: number
}

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    display: 'flex',
    borderRadius: '5px',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px 23px',
    '& .member-name': {
      fontWeight: 'bold'
    },
    '& .member-bio': {
      textAlign: 'center',
      '& p:nth-child(2)': {
        fontStyle: 'italic',
        padding: '17px 0'
      }
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
    '& *': {
      color: 'white'
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
    '& *': {
      color: 'black'
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
  const [, setIsParticipantModalShow] = useRecoilState(isParticipantModalShowAtom)
  const classes = useStyles()

  const deleteMember = () => setMemberState(members => members.filter(data => data.id !== member.id))

  const openModal = () => {
    setMemberModalState(member)
    setIsParticipantModalShow(true)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={clsx(classes.root, member.isLeader ? classes.leaderCard : classes.memberCard)}>
        <div className="member-bio">
          <Typography className="member-name">{member.name}</Typography>
          <Typography>{member.email}</Typography>
          <Typography>{member.phone}</Typography>
        </div>
        <Typography variant="h3" style={{ marginTop: '1rem' }}>
          {member.isLeader ? 'Ketua' : `Anggota ${idx}` }
        </Typography>
        <div style={{marginTop: '1rem'}}>
          <Button 
            variant="contained" 
            color="secondary" 
            style={{ marginRight: '1rem' }}
            onClick={openModal}
          >Update</Button>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={deleteMember}
          >Delete</Button>
        </div>
      </div>
    </Grid>
  )
}
