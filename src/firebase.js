import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCacBFectYHKrMzD7mulTkT1oCLqRM19lw",
  authDomain: "whastsapp-clone-56b27.firebaseapp.com",
  projectId: "whastsapp-clone-56b27",
  storageBucket: "whastsapp-clone-56b27.appspot.com",
  messagingSenderId: "532666891462",
  appId: "1:532666891462:web:578d8cff0578188b4d6bc7",
  measurementId: "G-TYMNYEBBPS"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth
const provider = new firebase.auth.GoogleAuthProvider()
GoogleAuthProvider()

export { auth, provider }
export default db
