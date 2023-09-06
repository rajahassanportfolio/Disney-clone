import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB577sFb3vDOVVF-MaGD7jPRtdPkIW5MYQ",
  authDomain: "disney-dfaf8.firebaseapp.com",
  projectId: "disney-dfaf8",
  storageBucket: "disney-dfaf8.appspot.com",
  messagingSenderId: "436492567712",
  appId: "1:436492567712:web:15477d93b9d3fedb3c35c5",
  measurementId: "G-R0HSFW6WC0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
