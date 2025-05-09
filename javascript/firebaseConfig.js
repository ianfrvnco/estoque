import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "estoque-petshop.firebaseapp.com",
  databaseURL: "https://estoque-petshop-default-rtdb.firebaseio.com",
  projectId: "estoque-petshop",
  storageBucket: "estoque-petshop.firebasestorage.app",
  messagingSenderId: "614855133687",
  appId: "1:614855133687:web:36abdbc051a276e324c6f2",
  measurementId: "G-P405EY3KJC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
