// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzbETVGxF9CCNo93QuFtak64Em0PvB24k",
  authDomain: "user-email-password-auth-1c820.firebaseapp.com",
  projectId: "user-email-password-auth-1c820",
  storageBucket: "user-email-password-auth-1c820.appspot.com",
  messagingSenderId: "314320205825",
  appId: "1:314320205825:web:99c2026ebb9329a9066800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth