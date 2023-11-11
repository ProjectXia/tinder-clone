// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyf1LyIM9Y2P6eskC8EvZwW3xliU1KzY",
  authDomain: "tinder-clone-2d75b.firebaseapp.com",
  projectId: "tinder-clone-2d75b",
  storageBucket: "tinder-clone-2d75b.appspot.com",
  messagingSenderId: "841034415535",
  appId: "1:841034415535:web:fe1fd2dbb4707d46d2835a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
