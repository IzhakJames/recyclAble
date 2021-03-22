import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDItXXsDiuvckOpC6MylrNTQ8pNWnOT39E",
    authDomain: "recyclable-c4f65.firebaseapp.com",
    projectId: "recyclable-c4f65",
    storageBucket: "recyclable-c4f65.appspot.com",
    messagingSenderId: "555644306361",
    appId: "1:555644306361:web:80008796748fc2f14d2c68"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;