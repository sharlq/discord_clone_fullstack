import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAyzMCI9zcpbBk8ZWMQSfhp1QvRIEOC4Cg",
    authDomain: "discord-clone-135a2.firebaseapp.com",
    projectId: "discord-clone-135a2",
    storageBucket: "discord-clone-135a2.appspot.com",
    messagingSenderId: "71433138017",
    appId: "1:71433138017:web:c8f51db0be3e3b6a119f20",
    measurementId: "G-NJRGD3GZ3K"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db