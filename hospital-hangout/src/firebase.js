import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB0jqZ7lhd0fD6JoN32-vnXiLtZNfgZYSY",
  authDomain: "hacksc21.firebaseapp.com",
  projectId: "hacksc21",
  storageBucket: "hacksc21.appspot.com",
  messagingSenderId: "50565170408",
  appId: "1:50565170408:web:444db2c67cde421546f55d",
  measurementId: "G-KQW7N6CFSR"
});

export default firebase;