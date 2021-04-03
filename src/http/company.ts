import { Company } from '../@types/Company'
import firebase from '../utils/firebase'

const getCompany = (collection: string) => {
  return firebase.firestore().collection(collection).get().then(collection => {
    const result: Company[] = []
    collection.docs.forEach((doc) => {
      result.push({
        ...(doc.data() as Company),
        id: doc.id
      })
    })
  
    return result
  })
}

const fetchSponsorship = () => {
  return getCompany('sponsorships')
}

const fetchMediaPartner = () => {
  return getCompany('media-partner')
}

export { fetchSponsorship, fetchMediaPartner }