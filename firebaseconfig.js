import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  apiKey: "AIzaSyA0OIPqPpYcLyyBAci9UWx-95QIVtwtRik",
  authDomain: "mswasth-21df5.firebaseapp.com",
  databaseURL: "https://mswasth-21df5-default-rtdb.firebaseio.com",
  projectId: "mswasth-21df5",
  storageBucket: "mswasth-21df5.appspot.com",
  messagingSenderId: "281245658334",
  appId: "1:281245658334:web:7a4443d4f4821e00f8e64f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
console.log("firebase config done");
console.log(db);