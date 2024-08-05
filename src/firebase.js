// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZ5B8yJ4cmy-Ki6L5Z9_sdBr90uForOYQ",
  authDomain: "fireflutter-54368.firebaseapp.com",
  databaseURL: "https://fireflutter-54368-default-rtdb.firebaseio.com",
  projectId: "fireflutter-54368",
  storageBucket: "fireflutter-54368.appspot.com",
  messagingSenderId: "568704340221",
  appId: "1:568704340221:web:3defe821b125154b7cae94",
  measurementId: "G-Y3S1B35VJ1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };
