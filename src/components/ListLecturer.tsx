import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { lecturerState } from '../store/lecturer'
import LecturerCard from './LecturerCard'

export default function ListLecturer(): ReactElement {
  const lecturers = useRecoilValue(lecturerState)

  return (
    <div>
      {lecturers.map(lecturer => (<LecturerCard lecturer={lecturer}/>))}
    </div>
  )
}
