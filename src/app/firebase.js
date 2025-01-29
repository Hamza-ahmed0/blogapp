// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHKH7_IRrM0paRA6iwxv8rhyVZ5uG1cr0",
  authDomain: "blog-app-01-6fdd1.firebaseapp.com",
  projectId: "blog-app-01-6fdd1",
  storageBucket: "blog-app-01-6fdd1.firebasestorage.app",
  messagingSenderId: "889105644358",
  appId: "1:889105644358:web:cfce2f148b6c8d9f040347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export  {auth,db};