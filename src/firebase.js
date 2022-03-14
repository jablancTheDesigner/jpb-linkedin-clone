// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCozzk9Dn250uiCrMNLgu4pqo2bmtN2TJY",
  authDomain: "linkedin-clone-6fc78.firebaseapp.com",
  projectId: "linkedin-clone-6fc78",
  storageBucket: "linkedin-clone-6fc78.appspot.com",
  messagingSenderId: "791752442900",
  appId: "1:791752442900:web:d81415e1ab3a18924f5301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
