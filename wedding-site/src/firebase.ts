import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import dotenv from 'dotenv'

dotenv.config()

if (!process.env.VUE_APP_FIREBASE_API_KEY) {
  throw new Error('VUE_APP_FIREBASE_API_KEY is not defined')
}

const apiKey = process.env.VUE_APP_FIREBASE_API_KEY as string;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "wedding-4a05a.firebaseapp.com",
  projectId: "wedding-4a05a",
  storageBucket: "wedding-4a05a.appspot.com",
  messagingSenderId: "338400136694",
  appId: "1:338400136694:web:d016662fccf87e0cd70bd7",
  measurementId: "G-ZDWHS7L6S1"
}

const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
const auth = getAuth()

const db = getFirestore()

const storage = getStorage()

export { auth, db, firebaseApp, storage };

