import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6I8tPRX0DtHFSxZvqLcQ9Dh1vuhZ0MJY",
  authDomain: "whatsapp-clone-b8984.firebaseapp.com",
  projectId: "whatsapp-clone-b8984",
  storageBucket: "whatsapp-clone-b8984.appspot.com",
  messagingSenderId: "667202289531",
  appId: "1:667202289531:web:9b84c34a53791d241987de",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };