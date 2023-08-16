import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkBBwGCxcPS1qMhHLf3r_SKHw0qu77J2A",
  authDomain: "polyuganda.firebaseapp.com",
  projectId: "polyuganda",
  storageBucket: "polyuganda.appspot.com",
  messagingSenderId: "381760321623", 
  appId: "1:381760321623:web:ef78b8fba573e245be0b12",
  measurementId: "G-DY7ZLRGGXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Store = getFirestore(app)

export {
    Store
}