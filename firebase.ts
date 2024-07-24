// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics"
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAU46amvAlIvKgDMRBb6T7MD2zkkC-Rjk",
  authDomain: "link-sharing-app-e30aa.firebaseapp.com",
  projectId: "link-sharing-app-e30aa",
  storageBucket: "link-sharing-app-e30aa.appspot.com",
  messagingSenderId: "274581942783",
  appId: "1:274581942783:web:06e0aa9fbadd1bc2d737ca",
  measurementId: "G-1SFZ90LLQS",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app)
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

