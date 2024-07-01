// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref as dbRef,
  set,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";

// Your web app's Firebase configuration
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
  return `${empIDInput}_${timestamp}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit1")
    .addEventListener("click", async function (e) {
      e.preventDefault();

      const itemRows = document.querySelectorAll(".item");
      if (itemRows.length === 0) {
        return;
      }

      const fileInput = document.getElementById("fileInput");
      if (fileInput.files.length === 0) {
        return;
      }

      if (!validateFormData()) {
        return;
      }

      try {
        const timestamp = Date.now();
        const customKey = generateCustomKey();

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

        // Update the sum of quantities and prices for each clinic item
        for (let i = 0; i < clinics.length; i++) {
          const clinic = clinics[i];
          const cell = cells[i];
          const quantity = parseFloat(quantities[i]);
          const price = parseFloat(prices[i]);

          if (clinic && cell && !isNaN(quantity) && !isNaN(price)) {
            const clinicItemRef = dbRef(db, `clinics/${clinic}/${cell}`);



            get(clinicItemRef).then((snapshot) => {
              const clinicData = snapshot.val() || {};
              const updatedQuantity = (clinicData.quantity || 0) + quantity;
              const updatedPrice = (clinicData.price || 0) + price;

              update(clinicItemRef, {
                quantity: updatedQuantity,
                price: updatedPrice,
              });
            });
          }
        }

        console.log("Data submitted successfully!");
        // You might want to reset the form or redirect the user here
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the data. Please try again.");
      }
    });
});

function validateFormData() {
  const dcName = getElementVal("dcName");
  const partnerName = getElementVal("partnerNameSearch");
  const empid = getElementVal("employeeIdSearch");

  if (dcName === "" || empid === "" || partnerName === "") {
    return false;
  }

  const items = Array.from(document.querySelectorAll(".item"));
  for (const item of items) {
    const clinicCodeInput = item.querySelector(".clinicCodeInput").value.trim();
    const itemSelect = item.querySelector(".itemSelect").value;
    const itemInput =
      item.querySelector(".itemInput").style.display !== "none"
        ? item.querySelector(".itemInput").value.trim()
        : null;
    const itemName = itemSelect !== "other" ? itemSelect : itemInput;
    const quantityInput = item.querySelector(".quantityInput").value.trim();
    const priceInput = item.querySelector(".priceInput").value.trim();

    if (
      clinicCodeInput === "" ||
      itemName === "" ||
      itemName === null ||
      quantityInput === "" ||
      priceInput === ""
    ) {
      return false;
    }
  }

  return true;
}
