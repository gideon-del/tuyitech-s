// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY,
  authDomain: "tuyitech-3f023.firebaseapp.com",
  projectId: "tuyitech-3f023",
  storageBucket: "tuyitech-3f023.appspot.com",
  messagingSenderId: "77002768976",
  appId: "1:77002768976:web:4ed926b466addd89e8c755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app