import React, { ReactElement } from 'react'
import { LecturerState } from '../@types/Lecturer'
import { StyledLecturerCard, StyledLecturerCardProfilePict } from '../theme/components/LecturerCard'
import { WhiteTypography } from '../theme/extends'

interface LecturerCardProps {
  lecturer: LecturerState
}

export default function LecturerCard(props : LecturerCardProps): ReactElement {
  return (
    <StyledLecturerCard data-aos="fade-up">
      <StyledLecturerCardProfilePict>
        <img src={props.lecturer.profilePict} alt=""/>
      </StyledLecturerCardProfilePict>
      <WhiteTypography style={{fontWeight: 'bold', marginTop: '22px', marginBottom: '11px'}} align="center">
        {props.lecturer.name}
      </WhiteTypography>
      <WhiteTypography align="center">
        {props.lecturer.job}
      </WhiteTypography>
    </StyledLecturerCard>
  )
}
