import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeZT8E5HF30CKD5r8UCT_ofsJWTVCURM0",
    authDomain: "portfolio-9688c.firebaseapp.com",
    databaseURL: "https://portfolio-9688c.firebaseio.com",
    projectId: "portfolio-9688c",
    storageBucket: "portfolio-9688c.appspot.com",
    messagingSenderId: "1077923519977",
    appId: "1:1077923519977:web:d18625b3af3b012f17ff78",
    measurementId: "G-6B8TVFWRC8"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();


export default db;