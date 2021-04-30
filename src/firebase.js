import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCAXyOzfp1VN5hDFrkq3cCCIT-nd61oZT8",
    authDomain: "clone-new-78169.firebaseapp.com",
    projectId: "clone-new-78169",
    storageBucket: "clone-new-78169.appspot.com",
    messagingSenderId: "390452909873",
    appId: "1:390452909873:web:14b81a8c1fcdd3e02a4210",
    measurementId: "G-HWRQLJ6NES"
  });

  const db = firebase.firestore();

  export { db };