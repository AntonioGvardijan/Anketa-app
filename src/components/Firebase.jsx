import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAp1AYPcHtutFBs97p40NgMIoOxPiplZZA",
    authDomain: "anketa-ab597.firebaseapp.com",
    databaseURL: "https://anketa-ab597-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "anketa-ab597",
    storageBucket: "anketa-ab597.appspot.com",
    messagingSenderId: "414567699378",
    appId: "1:414567699378:web:c114b120ce35909ec98aab",
    measurementId: "G-W4PC8G760N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase