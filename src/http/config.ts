import firebase from '../utils/firebase'

const getSubmissionClose = () => {
  return firebase
    .firestore()
    .collection('config')
    .doc('submission_close')
    .get()
    .then((res) => res.data())
}

export { getSubmissionClose }