// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAppS-8NeQE7gS5sSJZycnpt8YoqKLevAE",
  authDomain: "tca-app-c2270.firebaseapp.com",
  projectId: "tca-app-c2270",
  storageBucket: "tca-app-c2270.appspot.com",
  messagingSenderId: "492505004732",
  appId: "1:492505004732:web:28d26d39af63b0a6156eb9",
  measurementId: "G-WRLWYHYFH5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

