// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7ccd3.firebaseapp.com",
  projectId: "mern-auth-7ccd3",
  storageBucket: "mern-auth-7ccd3.appspot.com",
  messagingSenderId: "419014166388",
  appId: "1:419014166388:web:3b07eac38b4b596b950e21",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
