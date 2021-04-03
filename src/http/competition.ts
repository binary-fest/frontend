import { Competition } from '../@types/Competition'
import firebase from '../utils/firebase'

const fetchCompetitions = () => {
  return firebase.firestore().collection('competitions').get().then(collection => {
    const result: Competition[] = []
    collection.docs.forEach((doc) => {
      result.push((doc.data() as Competition))
    })
  
    return result
  })
}

export { fetchCompetitions }