import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { lecturerState } from '../store/lecturer'
import { StyledListLecturer } from '../theme/components/ListLecturer'
import LecturerCard from './LecturerCard'

export default function ListLecturer(): ReactElement {
  const lecturers = useRecoilValue(lecturerState)

  return (
    <StyledListLecturer>
      {lecturers.map(lecturer => (<LecturerCard lecturer={lecturer} key={lecturer.id} data-aos="fade-up"/>))}
    </StyledListLecturer>
  )
}
