import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDL72ZbLJV0VA11F6NUajNij7wfxKeF4Bo',
  authDomain: 'gcp-api-expert.firebaseapp.com',
  projectId: 'gcp-api-expert',
  storageBucket: 'gcp-api-expert.appspot.com',
  messagingSenderId: '588655134458',
  appId: '1:588655134458:web:9d799195b4042093b2ab43',
}

firebase.initializeApp(firebaseConfig)

export default firebase
