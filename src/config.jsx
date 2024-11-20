// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWTfkWTnTB-NlTCRpyv5618wra0czMfXM",
    authDomain: "wordle-website.firebaseapp.com",
    projectId: "wordle-website",
    storageBucket: "wordle-website.firebasestorage.app",
    messagingSenderId: "473282527356",
    appId: "1:473282527356:web:acd41c2e849bd4a95d09f9",
    measurementId: "G-E66K6KMJ8F"
};

// Initialize Firebase
const firebase_connection = initializeApp(firebaseConfig);

export default firebase_connection;