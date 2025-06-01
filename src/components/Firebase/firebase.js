// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPqW05QKx8RxgTmXqo22NKDYDSTtbiQw4",
  authDomain: "iub-bank.firebaseapp.com",
  projectId: "iub-bank",
  storageBucket: "iub-bank.firebasestorage.app",
  messagingSenderId: "115434137609",
  appId: "1:115434137609:web:ed5f9a2423c219261470d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const db = getFirestore()

export default app;