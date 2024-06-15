// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZoufl7a4IHE3icuDwS9qApzd08p9Cl8w",
  authDomain: "netflixgpt-bbf64.firebaseapp.com",
  projectId: "netflixgpt-bbf64",
  storageBucket: "netflixgpt-bbf64.appspot.com",
  messagingSenderId: "215559053618",
  appId: "1:215559053618:web:723b59fa6a5721f0ec772b",
  measurementId: "G-00VYRYFYQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();