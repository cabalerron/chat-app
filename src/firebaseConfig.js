// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8V8iv9xoxikXkApRBP6yQ5qGt7ubdkMQ",
    authDomain: "chat-app-898de.firebaseapp.com",
    databaseURL: "https://chat-app-898de-default-rtdb.firebaseio.com",
    projectId: "chat-app-898de",
    storageBucket: "chat-app-898de.appspot.com",
    messagingSenderId: "458408278637",
    appId: "1:458408278637:web:f23f88643ff89eae039d64",
    measurementId: "G-7ZPDP0WP8Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };