import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBQn0TnbUCW50LfDct56Syg0M3U4ejyePE",
    authDomain: "facebook-clone-4a20c.firebaseapp.com",
    projectId: "facebook-clone-4a20c",
    storageBucket: "facebook-clone-4a20c.appspot.com",
    messagingSenderId: "699437132372",
    appId: "1:699437132372:web:133f692e0d3a89c5631bc1",
    measurementId: "G-QN930SQRRY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth , provider}
export default db