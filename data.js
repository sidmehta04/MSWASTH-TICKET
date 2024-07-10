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

async function fetchEmployeeIds() {
  try {
    const snapshot = await get(ref(db, 'employeeIds'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataemployeeIds = Object.keys(data).map(key => data[key].empid);
      return dataemployeeIds;
    } else {
      console.log("No employee IDs found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching employee IDs: ", error);
    return [];
  }
}

// Call fetchEmployeeIds to fetch and store employee IDs
let dataemployeeIds = [];
fetchEmployeeIds().then(ids => {
  dataemployeeIds = ids;
    console.log("Employee IDs fetched:");
  console.log(dataemployeeIds);
  localStorage.setItem('dataemployeeids', JSON.stringify(dataemployeeIds));
}).catch(err => {
  console.error("Failed to fetch employee IDs:", err);
});




