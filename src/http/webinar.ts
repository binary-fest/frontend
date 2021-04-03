import firebase from '../utils/firebase'
import { LecturerState } from '../@types/Lecturer'

const fetchWebinarLecturer = () => {
  return firebase.firestore().collection('webinar').get().then(collection => {
    const result: LecturerState[] = []
    collection.docs.forEach((doc) => {
      result.push({
        ...(doc.data() as LecturerState),
        id: doc.id
      })
    })
  
    return result
  })
}

export { fetchWebinarLecturer }