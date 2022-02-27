// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbguMtJCniqL0G0C947jwxbbwGntFWPnk",
  authDomain: "p2p-services-937f4.firebaseapp.com",
  projectId: "p2p-services-937f4",
  storageBucket: "p2p-services-937f4.appspot.com",
  messagingSenderId: "206954706888",
  appId: "1:206954706888:web:987698ca942747535eb2fd",
  measurementId: "G-09SBLZ3J15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);