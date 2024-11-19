// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Agregar esta línea
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxIF2d_UTR3X84fg4DGNXgLjpe5hyG1Fw",
  authDomain: "proyecto-api-366217.firebaseapp.com",
  databaseURL: "https://proyecto-api-366217-default-rtdb.firebaseio.com",
  projectId: "proyecto-api-366217",
  storageBucket: "proyecto-api-366217.firebasestorage.app",
  messagingSenderId: "244743402983",
  appId: "1:244743402983:web:6fde228ef12f467457f942",
  measurementId: "G-72NZRPQ60Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
