// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5mb7AaVOMeYxLK1X5CybzTpWnYKY7j3M",
  authDomain: "netflix-clone-668b8.firebaseapp.com",
  projectId: "netflix-clone-668b8",
  storageBucket: "netflix-clone-668b8.appspot.com",
  messagingSenderId: "210398332164",
  appId: "1:210398332164:web:af097fbb213d4ccd7abc51",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
