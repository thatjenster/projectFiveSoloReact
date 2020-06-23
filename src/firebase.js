import firebase from 'firebase/app';
import 'firebase/database';  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDWQJYVT5hp_-c-5lsT9C347Hlju5ihl1c",
    authDomain: "travel-memories-bdc4e.firebaseapp.com",
    databaseURL: "https://travel-memories-bdc4e.firebaseio.com",
    projectId: "travel-memories-bdc4e",
    storageBucket: "travel-memories-bdc4e.appspot.com",
    messagingSenderId: "292457573659",
    appId: "1:292457573659:web:f0339f888072fef36b77be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;