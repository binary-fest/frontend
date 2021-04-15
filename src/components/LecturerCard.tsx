import React, { ReactElement } from 'react'
import { LecturerState } from '../@types/Lecturer'
import { WhiteTypography } from '../theme/extends'
import { LecturerCardWrapper, LecturerCardPict } from '../pages/Home/Home.styled'

interface LecturerCardProps {
  lecturer: LecturerState
}

export default function LecturerCard(props : LecturerCardProps): ReactElement {
  return (
    <LecturerCardWrapper data-aos="fade-up">
      <LecturerCardPict>
        <img src={props.lecturer.profilePict} alt=""/>
      </LecturerCardPict>
      <WhiteTypography style={{fontWeight: 'bold', marginTop: '22px', marginBottom: '11px'}} align="center">
        {props.lecturer.name}
      </WhiteTypography>
      <WhiteTypography align="center">
        {props.lecturer.job}
      </WhiteTypography>
    </LecturerCardWrapper>
  )
}
