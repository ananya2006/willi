import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDGxYZDWykPdjJ7u9IiEHNGcUVGJqALCpI",
    authDomain: "willi-2b1a9.firebaseapp.com",
    databaseURL: "https://willi-2b1a9.firebaseio.com",
    projectId: "willi-2b1a9",
    storageBucket: "willi-2b1a9.appspot.com",
    messagingSenderId: "366880091043",
    appId: "1:366880091043:web:fa2fac240febe0c2e28816"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()