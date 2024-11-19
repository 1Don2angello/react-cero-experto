// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClQ-jnsBO0mYCoVWC0ua3pMwUa39wxMjk",
  authDomain: "mini-proyec.firebaseapp.com",
  projectId: "mini-proyec",
  storageBucket: "mini-proyec.firebasestorage.app",
  messagingSenderId: "863070273400",
  appId: "1:863070273400:web:e322a43c0f169d2596528d",
  measurementId: "G-1VWGJLTDHY"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };