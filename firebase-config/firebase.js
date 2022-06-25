import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBSwBZrEPVA8K2sm8QNIxj1gv3S7AHHcA8",
  authDomain: "abcd-3aeec.firebaseapp.com",
  projectId: "abcd-3aeec",
  storageBucket: "abcd-3aeec.appspot.com",
  messagingSenderId: "1091963290495",
  appId: "1:1091963290495:web:ff2d2584be779d4a54104a",
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };
