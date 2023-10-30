import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHbsM6A8IGctPghWzUiZUQ7PY8J4EHT-A",
    authDomain: "wedding-4a05a.firebaseapp.com",
    projectId: "wedding-4a05a",
    storageBucket: "wedding-4a05a.appspot.com",
    messagingSenderId: "338400136694",
    appId: "1:338400136694:web:d016662fccf87e0cd70bd7"
  };

const firebaseApp = initializeApp({ firebaseConfig });npm install -g firebase-tools
const db = getFirestore(firebaseApp);

