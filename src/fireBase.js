import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAs_QgxlfQ58sjwWPv4kCWEWr8LHvoY1k",
  authDomain: "auth-kristall.firebaseapp.com",
  projectId: "auth-kristall",
  storageBucket: "auth-kristall.firebasestorage.app",
  messagingSenderId: "318152683286",
  appId: "1:318152683286:web:db8aa43b30a8437bf52a37",
  measurementId: "G-24JKYCKTY4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
