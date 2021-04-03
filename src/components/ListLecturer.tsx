import React, { ReactElement, useEffect, useState } from 'react'
import { LecturerState } from '../@types/Lecturer'
import { StyledListLecturer } from '../theme/components/ListLecturer'
import LecturerCard from './LecturerCard'
import { fetchWebinarLecturer } from '../http/webinar'

export default function ListLecturer(): ReactElement {
  const [lecturers, setLecturers] = useState<LecturerState[]>([])

  useEffect(() => {
    fetchWebinarLecturer().then(data => setLecturers(data))
  }, [])

  return (
    <StyledListLecturer>
      {lecturers.map(lecturer => (
        <LecturerCard lecturer={lecturer} key={lecturer.id} data-aos="fade-up"/>
      ))}
    </StyledListLecturer>
  )
}
