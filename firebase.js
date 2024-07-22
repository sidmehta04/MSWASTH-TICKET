// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getDatabase,
  ref as dbRef,
  set,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqEYta8mbk2kmGSMpNUSvz3Etji8LkEuE",
  authDomain: "mswasth-reimbursement.firebaseapp.com",
  projectId: "mswasth-reimbursement",
  storageBucket: "mswasth-reimbursement.appspot.com",
  messagingSenderId: "719155230190",
  appId: "1:719155230190:web:b5989e1779a51b9be28aff",
  measurementId: "G-YT0GGE631Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

// Helper function to get element value
function getElementVal(id) {
  const element = document.getElementById(id);
  return element ? element.value : null;
}

// Helper function to get values from multiple input fields by class
function getMultipleValuesByClass(fieldClass) {
  const values = [];
  const inputs = document.querySelectorAll(`.${fieldClass}`);
  inputs.forEach((input) => {
    const parent = input.closest(".item");

    if (fieldClass === "itemSelect") {
      const itemInput = parent.querySelector(".itemInput");

      if (input.value === "other" && itemInput.value.trim()) {
        values.push(itemInput.value.trim());
      } else {
        values.push(input.value);
      }
    } else {
      values.push(input.value.trim());
    }
  });
  return values;
}

// Helper function to generate a custom key
function generateCustomKey() {
  const empIDInput = getElementVal("employeeIdSearch");
  const timestamp = Date.now();
  return `${timestamp}_${empIDInput}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit1").addEventListener("click", async function (e) {
    e.preventDefault();

    const itemRows = document.querySelectorAll(".item");
    if (itemRows.length === 0) {
      return;
    }

    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
      return;
    }

    try {
      if (userConfirmed) {
        console.log(userConfirmed)
        console.log("Uploading data to Firebase...");
        const timestamp = Date.now();
        const customKey = generateCustomKey();
        const storageFolderLink = `https://console.firebase.google.com/u/4/project/mswasth-reimbursement/storage/mswasth-reimbursement.appspot.com/files/~2Ffiles~2F${customKey}`;


        const clinics = getMultipleValuesByClass("clinicCodeInput");
        const cells = getMultipleValuesByClass("itemSelect");
        const quantities = getMultipleValuesByClass("quantityInput");
        const prices = getMultipleValuesByClass("priceInput");

        const entry = {
          name: getElementVal("dcName"),
          empid_search: getElementVal("employeeIdSearch"),
          empid_name: getElementVal("employeeIdSearch"),
          partnername: getElementVal("partnerNameSearch"),
          clinic: clinics,
          cell: cells,
          quant: quantities,
          price: prices,
          username: getElementVal("username"),
          passwd: getElementVal("password"),
          timestamp: timestamp,
          fileUrls: [],
          folderLink: storageFolderLink,
        };

        // Upload files to Firebase Storage
        for (let i = 0; i < fileInput.files.length; i++) {
          const file = fileInput.files[i];
          const fileRef = storageRef(storage, `files/${customKey}/${file.name}`);
          await uploadBytes(fileRef, file);
          const downloadURL = await getDownloadURL(fileRef);
          entry.fileUrls.push(downloadURL);
          console.log(`File ${file.name} uploaded successfully`);
        }

        // Save the entry to Firebase using the custom key
        await set(dbRef(db, `user/${customKey}`), entry);
        console.log("Data saved successfully");
        Swal.fire({
          icon: 'success',
          title: 'Data Submitted Successfully.',
          text: 'Thank You',
          confirmButtonText: 'OK',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
        });
        // Optionally, reset the form or redirect the user here
        document.getElementById("dataForm").reset();
        translatePage('en');
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Firebase: An error occurred while submitting the data. Please try again.");
      console.log(error);
    }
  });
});

// Function to add folder links to existing entries only if they don't have one
async function addFolderLinksToExistingEntries() {
  try {
    const snapshot = await get(dbRef(db, 'user'));
    const data = snapshot.val();
    if (data) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const entry = data[key];
          if (!entry.folderLink) {
            const storageFolderLink = `https://console.firebase.google.com/u/4/project/mswasth-reimbursement/storage/mswasth-reimbursement.appspot.com/files/~2Ffiles~2F${key}`;
            await update(dbRef(db, `user/${key}`), { folderLink: storageFolderLink });
            console.log(`Folder link added to entry with key: ${key}`);
          } else {
            // console.log(`Entry with key ${key} already has a folder link. Skipping.`);
          }
        }
      }
    } else {
      console.log("No existing entries found.");
    }
  } catch (error) {
    console.error("Error adding folder links:", error);
  }
}

// Call the function to add folder links to existing entries
addFolderLinksToExistingEntries();