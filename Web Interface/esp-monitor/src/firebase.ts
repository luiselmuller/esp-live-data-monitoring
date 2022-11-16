import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_API,
    authDomain: "esp32-monitor-2244b.firebaseapp.com",
    databaseURL: "https://esp32-monitor-2244b-default-rtdb.firebaseio.com",
    projectId: "esp32-monitor-2244b",
    storageBucket: "esp32-monitor-2244b.appspot.com",
    messagingSenderId: "280167063041",
    appId: "1:280167063041:web:83c702f2d2df8ef88b2a00",
    measurementId: "G-ER8PQC6BYT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;