// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCiQOysmX0_Gzy0pCHCH3JPy02aQL8UxtA",
  authDomain: "prepwise-43a74.firebaseapp.com",
  projectId: "prepwise-43a74",
  storageBucket: "prepwise-43a74.firebasestorage.app",
  messagingSenderId: "577118152261",
  appId: "1:577118152261:web:0edc194052c77494ce652c",
  measurementId: "G-30ZDWS0VR2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;