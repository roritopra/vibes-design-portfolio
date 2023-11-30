import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyARyKx2we0gPiN8DUxA52FveJFawRzTqNM",
  authDomain: "vibes-design-portfolio.firebaseapp.com",
  projectId: "vibes-design-portfolio",
  storageBucket: "vibes-design-portfolio.appspot.com",
  messagingSenderId: "243228209663",
  appId: "1:243228209663:web:6156e6ca34e57e84fb37ca",
  measurementId: "G-QK3D1K83ZD",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);

export const database = getFirestore(app);
