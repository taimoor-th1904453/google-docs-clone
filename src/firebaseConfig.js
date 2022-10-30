// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// import { collection, addDoc, where, query, getDocs} from "firebase/firestore"
// import "firebase/compat/auth";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
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
// firebase.initializeApp(firebaseConfig);

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// provider.addScope('profile');
// provider.addScope('email');

// export const auth = firebase.auth();
// export default firebase;

// export const signInWithGoogle = async () => {
//   try {
//     const res = await auth.signInWithPopup(provider);
//     const user = res.user;
//     const userRef = collection(database, "users");
//     const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
//     if (result.empty) {
//       await addDoc(collection(database, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     alert(err.message);
//   }
// };

