// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4corMSEIqekDbEAlDSFYAM0O4yx1ERes",
  authDomain: "e-commerce-cdeed.firebaseapp.com",
  projectId: "e-commerce-cdeed",
  storageBucket: "e-commerce-cdeed.appspot.com",
  messagingSenderId: "410116151068",
  appId: "1:410116151068:web:47a6501906b8fd99de4cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);