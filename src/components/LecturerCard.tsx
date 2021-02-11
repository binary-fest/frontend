import React, { ReactElement } from 'react'
import { LecturerState } from '../@types/Lecturer'
import { WhiteTypography } from '../theme/extends'

interface LecturerCardProps {
  lecturer: LecturerState
}

export default function LecturerCard(props : LecturerCardProps): ReactElement {
  return (
    <div>
      <WhiteTypography>
        {props.lecturer.name}
      </WhiteTypography>
    </div>
  )
}
