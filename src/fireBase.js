// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAs_QgxlfQ58sjwWPv4kCWEWr8LHvoY1k",
  authDomain: "auth-kristall.firebaseapp.com",
  projectId: "auth-kristall",
  storageBucket: "auth-kristall.firebasestorage.app",
  messagingSenderId: "318152683286",
  appId: "1:318152683286:web:db8aa43b30a8437bf52a37",
  measurementId: "G-24JKYCKTY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);