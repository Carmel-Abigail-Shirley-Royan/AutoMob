// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQRHVabqev_IWXrb5OgJhXL72E4ixCehg",
  authDomain: "auto-mob-1f947.firebaseapp.com",
  projectId: "auto-mob-1f947",
  storageBucket: "auto-mob-1f947.firebasestorage.app",
  messagingSenderId: "310612927454",
  appId: "1:310612927454:web:9cdbabe0b34ea7a997f34f",
  measurementId: "G-3X3QGK6L4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
