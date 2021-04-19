import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5Ru8tQWZJX8O16UxcR5_eWtc_x4jWRkU",
  authDomain: "binaryfest-resources.firebaseapp.com",
  projectId: "binaryfest-resources",
  storageBucket: "binaryfest-resources.appspot.com",
  messagingSenderId: "710699058965",
  appId: "1:710699058965:web:c7a60dc279e7e5b85bcb1c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase