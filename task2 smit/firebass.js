import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {signInWithPopup, getAuth,createUserWithEmailAndPassword,onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword,signOut,  GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {updateDoc,getDoc,doc, deleteDoc,getDocs , getFirestore,addDoc, collection  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";








const firebaseConfig = {
  apiKey: "AIzaSyACxAp9jbe2MzmzUE3i6LF9b3oBZ3UgJA0",
  authDomain: "smit-batch-11-211a1.firebaseapp.com",
  projectId: "smit-batch-11-211a1",
  storageBucket: "smit-batch-11-211a1.appspot.com",
  messagingSenderId: "896073091042",
  appId: "1:896073091042:web:51aa8f98501e8f88f15bbb",
  measurementId: "G-6HD6PDM31V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export{updateDoc,getDoc,doc, deleteDoc,getDocs ,addDoc, collection, db, auth, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword,signOut, GoogleAuthProvider, signInWithPopup}
    