import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

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

// Function to fetch employee IDs
async function fetchEmployeeIds() {
  try {
    const snapshot = await get(ref(db, "employeeIds"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => data[key].empid);
    } else {
      console.log("No employee IDs found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching employee IDs: ", error);
    return [];
  }
}

// Function to fetch partner names
async function fetchPartnerNames() {
  try {
    const snapshot = await get(ref(db, "partnerNames"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => data[key].partnerName);
    } else {
      console.log("No partner names found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching partner names: ", error);
    return [];
  }
}

// Fetch and store employee IDs and partner names
Promise.all([fetchEmployeeIds(), fetchPartnerNames()])
  .then(([employeeIds, partnerNames]) => {
    console.log("Employee IDs fetched:", employeeIds);
    console.log("Partner names fetched:", partnerNames);

    localStorage.setItem("dataemployeeids", JSON.stringify(employeeIds));
    localStorage.setItem("datapartnernames", JSON.stringify(partnerNames));
  })
  .catch((err) => {
    console.error("Failed to fetch data:", err);
  });
