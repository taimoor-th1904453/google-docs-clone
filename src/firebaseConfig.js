// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALlmW1zG9mSqtZcbE7TibkMA0oyrtbxJY",
  authDomain: "doc-clone-d8bd7.firebaseapp.com",
  projectId: "doc-clone-d8bd7",
  storageBucket: "doc-clone-d8bd7.appspot.com",
  messagingSenderId: "101710998101",
  appId: "1:101710998101:web:afb5ee905cc551ba64c2dc",
  measurementId: "G-P3MYHVJPEQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)