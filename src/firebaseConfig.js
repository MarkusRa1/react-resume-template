// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACe6K2K67TmLyWWDTQtCPFruQHxPYNE6A",
  authDomain: "helloworld-e3c5d.firebaseapp.com",
  databaseURL: "https://helloworld-e3c5d.firebaseio.com",
  projectId: "helloworld-e3c5d",
  storageBucket: "helloworld-e3c5d.appspot.com",
  messagingSenderId: "109105659915",
  appId: "1:109105659915:web:d11f9bf607ada272e1470e",
  measurementId: "G-91SYMQVYX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);