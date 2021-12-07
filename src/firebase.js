// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, 
  createUserWithEmailAndPassword ,
   GoogleAuthProvider,
   signInWithPopup, 
   onAuthStateChanged,
   signOut} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn53KIyEKMO9PD385fNo9-4HbfMX_ljsk",
  authDomain: "disneyclone-2c1f3.firebaseapp.com",
  projectId: "disneyclone-2c1f3",
  storageBucket: "disneyclone-2c1f3.appspot.com",
  messagingSenderId: "733828718710",
  appId: "1:733828718710:web:6bd5ca2d9ec072176c3f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
//const storage = firebase.storage();

export { auth, provider, signInWithPopup , signOut, onAuthStateChanged};
export default db;