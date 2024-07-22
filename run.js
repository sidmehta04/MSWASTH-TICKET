// // Import the necessary Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBqEYta8mbk2kmGSMpNUSvz3Etji8LkEuE",
//     authDomain: "mswasth-reimbursement.firebaseapp.com",
//     projectId: "mswasth-reimbursement",
//     storageBucket: "mswasth-reimbursement.appspot.com",
//     messagingSenderId: "719155230190",
//     appId: "1:719155230190:web:b5989e1779a51b9be28aff",
//     measurementId: "G-YT0GGE631Y",
//     databaseURL: "https://mswasth-reimbursement-default-rtdb.firebaseio.com" // Add this line
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// // Get a reference to the database service
// const db = getDatabase(firebaseApp);

// // Array of employee IDs
// const employeeIds = [
//     "MS00147", "MS00148", "MS00149", "MS01699", "MS01514", "MS00233", "MSO1507", "MS01568", "MS01525",
//     // ... (rest of the employee IDs)
// ];

// // Function to add employee IDs to Firebase Realtime Database
// async function addEmployeeIdsToDatabase() {
//     for (const employeeId of employeeIds) {
//         try {
//             await set(ref(db, `employeeIds/${employeeId}`), {
//                 empid: employeeId
//             });
//             console.log(`Employee ID ${employeeId} added to the database`);
//         } catch (error) {
//             console.error(`Error adding employee ID ${employeeId}: `, error);
//         }
//     }
// }

// // Call the function to add employee IDs to the database
// addEmployeeIdsToDatabase();

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getDatabase, ref as dbRef, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBqEYta8mbk2kmGSMpNUSvz3Etji8LkEuE",
//     authDomain: "mswasth-reimbursement.firebaseapp.com",
//     projectId: "mswasth-reimbursement",
//     storageBucket: "mswasth-reimbursement.appspot.com",
//     messagingSenderId: "719155230190",
//     appId: "1:719155230190:web:b5989e1779a51b9be28aff",
//     measurementId: "G-YT0GGE631Y"
//   };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getDatabase(firebaseApp);

// // Function to add partner names to Firestore
// function addPartnerNamesToFirestore() {
//   const partnerNames = [
//     "Cashpor", "Muthoot", "Svatantra", "Namra Finance", "Utkarsh SFB", "TATA Capital",
//     "North East Small Finance Bank", "Pahal Finance", "Adi Chitragupta Finance Limited",
//     "Bangia Gramin Vikas Bank", "Uttrayan", "Satya Microcapital", "Humana Financial Services",
//     "VFS", "Swarnodhayam Credits Pvt Ltd", "NABFINS Limited", "Paschim Banga Gramin Bank",
//     "Share India Fincap", "SEBA RAHARA", "Uttar Banga Kshetriya Garmin Bank", "Annapurna",
//     "Bank of India", "Uttar Bihar Gramin Bank", "Servitium Micro Finance Pvt Ltd",
//     "Sonata Finance", "ESAF HEALTH CARE SERVICES PVT LTD", "CCFID", "Mitrata", "M-INSURE CHANNEL",
//     "Maharashtra Gramin Bank", "ASA International", "Arohan Financial Services Limited",
//     "APGVB", "Sugamya", "Midland Microfin", "Chhattisgarh Rajya Gramin Bank",
//     "Sampurna Training and Entrepreneurship Programme", "DCBS", "Hirbandh Ramkrishna Sarada Sevashrama",
//     "Indiabulls Housing Finance", "Sindhuja Microcredit", "Muthoot Capital",
//     "Sarala Development & Microfinance Pvt Ltd", "Madhyanchal Gramin Bank",
//     "Baghat Urban Co-op Bank Ltd", "People's Forum", "KBS Local Bank", "Janakalyan",
//     "Your Global Money", "Agora Microfinance", "Ambitions Services", "Kamal Fincap Private Limited",
//     "Maddox Consultancy Services Pvt Ltd", "AISSHPRA", "Rohtak Central Cooperative Bank",
//     "Projects", "Swabhimaan Sales & Services Pvt Ltd", "South India Finvest Pvt Ltd",
//     "Panchawati", "Pune District Central Co-op bank", "APGVB Pensioners Association",
//     "IFFCO Bazar", "Aviral Finance", "Shepays Financial Services Pvt Ltd", "DULAL NGO",
//     "Adhikosh Financial Advisory Pvt Ltd", "Aishwarya MACC Society Ltd", "Sudhir HUF",
//     "CBC", "North East Small Finance Bank - SHG"
//   ];

//   // Add each partner name to Firestore
//   partnerNames.forEach(partnerName => {
//     set(dbRef(db, `partnerNames/${partnerName}`), {
//       partnerName: partnerName
//     })
//     .then(docRef => {
//       console.log(`Partner ${partnerName} added with ID: ${docRef.id}`);
//     })
//     .catch(error => {
//       console.error(`Error adding partner ${partnerName}: `, error);
//     });
//   });
// }

// // Run the function to add partner names to Firestore
// addPartnerNamesToFirestore();
