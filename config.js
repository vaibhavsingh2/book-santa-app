import * as firebase from 'firebase';
require ('firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBuKwG2XsElX92-hhKtsw2NaosiPSaqzyQ",
    authDomain: "book-santa-6a2fb.firebaseapp.com",
    databaseURL: "https://book-santa-6a2fb.firebaseio.com",
    projectId: "book-santa-6a2fb",
    storageBucket: "book-santa-6a2fb.appspot.com",
    messagingSenderId: "156988132898",
    appId: "1:156988132898:web:7e11e6dd141634bc51447b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();