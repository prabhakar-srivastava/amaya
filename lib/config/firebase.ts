// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6NP_jF2svYTWYgwVhbd6Kpg2SUC2qdpA",
  authDomain: "amayamoda-3c461.firebaseapp.com",
  projectId: "amayamoda-3c461",
  storageBucket: "amayamoda-3c461.firebasestorage.app",
  messagingSenderId: "554410785047",
  appId: "1:554410785047:web:fa2c68e80b9e360a825f52",
  measurementId: "G-6GY75KT4QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
export default app;