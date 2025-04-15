// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsRak-IeDSzYxf331svATGspl3ZSa1_iM",
  authDomain: "arasu-fm-latest.firebaseapp.com",
  projectId: "arasu-fm-latest",
  storageBucket: "arasu-fm-latest.firebasestorage.app",
  messagingSenderId: "580670106943",
  appId: "1:580670106943:web:647957efdfea0750f3b78a",
  measurementId: "G-Y8R5CKVX6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);