import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyCHbsM6A8IGctPghWzUiZUQ7PY8J4EHT-A',
  authDomain: 'laniandfinlay.com',
  projectId: 'wedding-4a05a',
  storageBucket: 'wedding-4a05a.appspot.com',
  messagingSenderId: '338400136694',
  appId: '1:338400136694:web:d016662fccf87e0cd70bd7'
}

const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
const auth = getAuth()

const db = getFirestore()

const storage = getStorage()

export { auth, firebaseApp, db, storage }
