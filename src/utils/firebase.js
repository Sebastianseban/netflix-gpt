// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvCvpH2JYC8FF6u8tD2Z9H439tc7SpCHY",
  authDomain: "netflix-gpt-a8108.firebaseapp.com",
  projectId: "netflix-gpt-a8108",
  storageBucket: "netflix-gpt-a8108.firebasestorage.app",
  messagingSenderId: "419006744211",
  appId: "1:419006744211:web:31cd9e97d9fcb4b6f46f66",
  measurementId: "G-C542F0QMYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const auth = getAuth();