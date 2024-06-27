// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
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

// Helper function to get values from multiple input fields
function getMultipleValues(fieldName) {
  const values = [];
  const inputs = document.querySelectorAll(`[id^="${fieldName}"]`);
  inputs.forEach((input) => {
    const parent = input.closest(".item");
    const itemSelect = parent.querySelector(".itemSelect");
    const itemInput = parent.querySelector(".itemInput");

    if (fieldName === "cell") {
      // Handle "cell" inputs
      if (itemSelect.value === "other" && itemInput.value.trim()) {
        values.push(itemInput.value.trim());
      } else if (itemSelect.value !== "other") {
        values.push(itemSelect.value);
      }
    } else {
      // Handle other input types
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
      const select = document.querySelector("#employeeId");

      const itemRows2 = document.querySelectorAll(".item");
      if (itemRows2.length === 0) {
        return;
      }
      const fileInput2 = document.getElementById("fileInput");

      if (fileInput2.files.length === 0) {
        return false;
      }
      if (!validateFormData()) {
    return;
  }


      e.preventDefault();
      const timestamp = Date.now();

      // Generate a custom key for each entry
      const customKey = generateCustomKey();
      const entry = {
        name: getElementVal("dcName"),
        empid_search: getElementVal("employeeIdSearch"),
        empid_name: getElementVal("employeeIdSearch"),
        partnername: getElementVal("partnerNameSearch"),
        clinic: getMultipleValues("clinic"),
        cell: getMultipleValues("cell"),
        quant: getMultipleValues("quant"),
        price: getMultipleValues("price"),
        username:getElementVal("username"),
        passwd:getElementVal("password"),
        timestamp: timestamp, // Add the timestamp to the entry object
      };

      // Upload files to Firebase Storage
      var fileInput1 = document.getElementById("fileInput");
      const files1 = fileInput1.files;
      for (let i = 0; i < files1.length; i++) {
        const file = files1[i];
        const fileRef = storageRef(storage, `files/${customKey}/${file.name}`);
        await uploadBytes(fileRef, file);
        console.log(`File ${file.name} uploaded successfully`);
      }
      // Save the entry to Firebase using the custom key
      await set(ref(db, `user/${customKey}`), entry);
      console.log("Data saved successfully");
      // Optionally, reset the form after successful submission
    });
});

function validateFormData() {
  const dcName = document.getElementById("dcName").value.trim();
  const partnerName = document.getElementById("partnerNameSearch").value.trim();
  const fileInput = document.getElementById("fileInput");
  const empid = document.getElementById("employeeIdSearch").value.trim();


  if (fileInput.files.length === 0) {
    alert("Please add a file.");
    return false;
  }

  if (dcName === "" || empid === "" ||partnerName === "") {
    // alert("Please fill the required fields(DC Name, Employee ID, and Partner Name).");
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
      // alert(
      //   "Please fill in all fields for each item, including the Clinic Code."
      // );
      return false;
    }
  }

  return true;
}
