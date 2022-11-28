import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_API,
    authDomain: import.meta.env.VITE_FIRESTORE_AUTH,
    databaseURL: import.meta.env.VITE_FIRESTORE_URL,
    projectId: import.meta.env.VITE_FIRESTORE_PID,
    storageBucket: import.meta.env.VITE_FIRESTORE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIRESTORE_SENDER_ID,
    appId: import.meta.env.VITE_FIRESTORE_APP_ID,
    measurementId: import.meta.env.VITE_FIRESTORE_MEASURE_ID
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;