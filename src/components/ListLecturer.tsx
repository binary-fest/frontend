import React, { ReactElement, useEffect, useState } from 'react'
import { LecturerState } from '../@types/Lecturer'
import LecturerCard from './LecturerCard'
import { ListLecturerContainer } from '../pages/Home/Home.styled'
import { fetchWebinarLecturer } from '../http/webinar'

export default function ListLecturer(): ReactElement {
  const [lecturers, setLecturers] = useState<LecturerState[]>([])

  useEffect(() => {
    fetchWebinarLecturer().then(data => setLecturers(data))
  }, [])

  return (
    <ListLecturerContainer>
      {lecturers.map(lecturer => (
        <LecturerCard lecturer={lecturer} key={lecturer.id} data-aos="fade-up"/>
      ))}
    </ListLecturerContainer>
  )
}
