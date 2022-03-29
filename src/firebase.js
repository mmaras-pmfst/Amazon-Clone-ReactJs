import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// var firebase = require('firebase/app');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBU_TZagEn6kpEvr2NkAE_3tMSZatP8vlM',
  authDomain: 'challenge-a5ed9.firebaseapp.com',
  projectId: 'challenge-a5ed9',
  storageBucket: 'challenge-a5ed9.appspot.com',
  messagingSenderId: '265912766546',
  appId: '1:265912766546:web:02f797dfa89db8c4accf8b',
  measurementId: 'G-6P5DW2JDCZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
