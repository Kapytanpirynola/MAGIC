// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB75xZ2T8O-aCPULneQRZZcUm_2cqGZSIw",
    authDomain: "tid51gera.firebaseapp.com",
    databaseURL: "https://tid51gera-default-rtdb.firebaseio.com",
    projectId: "tid51gera",
    storageBucket: "tid51gera.appspot.com",
    messagingSenderId: "918205004184",
    appId: "1:918205004184:web:4467f3c563860c2f3a53ed",
    measurementId: "G-JDWPVGKSN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
