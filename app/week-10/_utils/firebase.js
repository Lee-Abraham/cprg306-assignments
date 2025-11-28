// Part 2: Firebase code starts

// Importing the functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8IkWWqPJvmRQMdTa7gNcfWdQfK8HuCrc",
  authDomain: "cprg306-assignments-dcec3.firebaseapp.com",
  projectId: "cprg306-assignments-dcec3",
  storageBucket: "cprg306-assignments-dcec3.firebasestorage.app",
  messagingSenderId: "183165276456",
  appId: "1:183165276456:web:3ba3696b7176efe0fd001d",
  measurementId: "G-E4HYHWYL8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Part 2: Firebase code ends
