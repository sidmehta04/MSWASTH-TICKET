import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqEYta8mbk2kmGSMpNUSvz3Etji8LkEuE",
  authDomain: "mswasth-reimbursement.firebaseapp.com",
  projectId: "mswasth-reimbursement",
  storageBucket: "mswasth-reimbursement.appspot.com",
  messagingSenderId: "719155230190",
  appId: "1:719155230190:web:b5989e1779a51b9be28aff",
  measurementId: "G-YT0GGE631Y",
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
