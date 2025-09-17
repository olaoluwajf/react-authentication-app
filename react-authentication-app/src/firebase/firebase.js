// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJYN_1iv9hp6yPVkIBOmcyOKi0o_bU_XI",
  authDomain: "authentication-91426.firebaseapp.com",
  projectId: "authentication-91426",
  storageBucket: "authentication-91426.firebasestorage.app",
  messagingSenderId: "446357982184",
  appId: "1:446357982184:web:4eccfde37be54fd4c5b25d",
  measurementId: "G-8N7XDSWKFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, app };