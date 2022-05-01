// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8c-MdF_WN7W2N2B9-HWV3xwS-Jpip_e8",
  authDomain: "ooad-project-34ab8.firebaseapp.com",
  projectId: "ooad-project-34ab8",
  storageBucket: "ooad-project-34ab8.appspot.com",
  messagingSenderId: "1063961715851",
  appId: "1:1063961715851:web:8d5da6b4a3026d56cda08e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);