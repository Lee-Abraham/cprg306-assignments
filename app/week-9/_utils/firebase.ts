// Part 2: Firebase code starts

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IkWWqPJvmRQMdTa7gNcfWdQfK8HuCrc",
  authDomain: "cprg306-assignments-dcec3.firebaseapp.com",
  projectId: "cprg306-assignments-dcec3",
  storageBucket: "cprg306-assignments-dcec3.firebasestorage.app",
  messagingSenderId: "183165276456",
  appId: "1:183165276456:web:3ba3696b7176efe0fd001d",
  measurementId: "G-E4HYHWYL8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Part 2: Firebase code ends


