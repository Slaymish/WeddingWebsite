import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCHbsM6A8IGctPghWzUiZUQ7PY8J4EHT-A',
  authDomain: 'wedding-4a05a.firebaseapp.com',
  projectId: 'wedding-4a05a',
  storageBucket: 'wedding-4a05a.appspot.com',
  messagingSenderId: '338400136694',
  appId: '1:338400136694:web:d016662fccf87e0cd70bd7'
}




const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()

const db = getFirestore()

export { auth, firebaseApp, db }
