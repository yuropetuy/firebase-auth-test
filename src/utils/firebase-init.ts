// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXkljV7sg_zn6Sb5ghog2LWdoJzhLFe0Q",
  authDomain: "personal-learning-134e9.firebaseapp.com",
  projectId: "personal-learning-134e9",
  storageBucket: "personal-learning-134e9.appspot.com",
  messagingSenderId: "508765162729",
  appId: "1:508765162729:web:5f673e44b234d9eabf7478",
  measurementId: "G-VB13N1V0VX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
