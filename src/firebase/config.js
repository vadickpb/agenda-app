// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9M6rU3A-gcObTUNv2x3BsmqjTSTHF5Ak",
  authDomain: "react-cursos-a0ec5.firebaseapp.com",
  projectId: "react-cursos-a0ec5",
  storageBucket: "react-cursos-a0ec5.appspot.com",
  messagingSenderId: "152912425812",
  appId: "1:152912425812:web:cfb2a619f8278b26e94ec1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)
