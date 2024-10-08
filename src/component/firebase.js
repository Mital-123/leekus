// Filename - firebase.js

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgRhzNuvgMEVasXpTNzUe1k1jG25PcZ84",
    authDomain: "loginnumber-7b54a.firebaseapp.com",
    projectId: "loginnumber-7b54a",
    storageBucket: "loginnumber-7b54a.appspot.com",
    messagingSenderId: "857800945273",
    appId: "1:857800945273:web:e84def9d6387bf084baea8",
    measurementId: "G-P7XVQ9XYVY"
  };

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
