// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDp-j5fYvraGOVIOs1XVTj7eJ9FprARXk",
  authDomain: "estoque-petshop.firebaseapp.com",
  projectId: "estoque-petshop",
  storageBucket: "estoque-petshop.firebasestorage.app",
  messagingSenderId: "614855133687",
  appId: "1:614855133687:web:36abdbc051a276e324c6f2",
  measurementId: "G-P405EY3KJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
