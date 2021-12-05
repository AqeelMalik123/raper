// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailPassword} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEecJ9-rN3KGfNCuUc1mW9JzXymHwpCcI",
  authDomain: "teamreport-36bc2.firebaseapp.com",
  projectId: "teamreport-36bc2",
  storageBucket: "teamreport-36bc2.appspot.com",
  messagingSenderId: "841843431651",
  appId: "1:841843431651:web:412f68bc241f778db9cdd6",
  measurementId: "G-NCRWLWWQKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
