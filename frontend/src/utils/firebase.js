
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-ai-868b6.firebaseapp.com",
  projectId: "interview-ai-868b6",
  storageBucket: "interview-ai-868b6.firebasestorage.app",
  messagingSenderId: "629340131055",
  appId: "1:629340131055:web:43603c0c6040ce7a95951a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}