// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvqPIWsQm8C4GcG9zMFZ-4568Dunfc5JY",
  authDomain: "your-book-f2c29.firebaseapp.com",
  projectId: "your-book-f2c29",
  storageBucket: "your-book-f2c29.appspot.com",
  messagingSenderId: "147726156319",
  appId: "1:147726156319:web:150f52ccc83d34b95e8b2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
