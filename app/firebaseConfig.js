// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcYWxJght8hs1JtDgTMzTn8xwdZH_Uh9E",
  authDomain: "hexalogic-a87d1.firebaseapp.com",
  projectId: "hexalogic-a87d1",
  storageBucket: "hexalogic-a87d1.firebasestorage.app",
  messagingSenderId: "619593070248",
  appId: "1:619593070248:web:1898e180ea9b581349f49d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
