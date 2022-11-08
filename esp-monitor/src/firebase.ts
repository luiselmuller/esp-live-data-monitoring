import  firebase from "firebase/app"
import "firebase/database"
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "esp32-monitor-2244b.firebaseapp.com",
  databaseURL: "https://esp32-monitor-2244b-default-rtdb.firebaseio.com",
  projectId: "esp32-monitor-2244b",
  storageBucket: "esp32-monitor-2244b.appspot.com",
  messagingSenderId: "280167063041",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-ER8PQC6BYT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

