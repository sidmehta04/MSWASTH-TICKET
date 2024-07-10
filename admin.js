import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, get, set, update, remove } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

// Firebase configuration
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

window.showSection = function(sectionId) {
  // Hide all admin sections
  let sections = document.getElementsByClassName("admin-section");
  for (let section of sections) {
    section.style.display = "none";
  }

  // Show the selected section
  let selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

window.addEmployee = async function() {
  const employeeId = document.getElementById("employeeIdInput").value;

  if (employeeId) {
    try {
      await set(ref(db, 'employeeIds/' + employeeId), { empid: employeeId });
      document.getElementById("employeeIdInput").value = "";
      populateEmployeeTable();
      alert("Employee added successfully.");
    } catch (error) {
      console.error("Error adding employee: ", error);
    }
  } else {
    alert("Please enter an Employee ID.");
  }
}


window.populateEmployeeTable = async function() {
  const tableBody = document.querySelector("#employeeTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  try {
    const snapshot = await get(ref(db, 'employeeIds'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataemployeeids = Object.keys(data).map(key => ({ id: key, empid: data[key].empid }));

      // Loop through dataemployeeids and create table rows
      dataemployeeids.forEach(function(employee) {
        const row = tableBody.insertRow();

        // Insert ID column
        const idCell = row.insertCell();
        idCell.textContent = employee.empid;

        // Insert Actions column with Edit and Delete buttons
        const actionsCell = row.insertCell();
        const editButton = document.createElement("button");
        editButton.id = "edit-button";
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        editButton.dataset.employeeId = employee.id; // Store document ID in dataset
        editButton.addEventListener("click", editEmployee);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.dataset.employeeId = employee.id; // Store document ID in dataset
        deleteButton.addEventListener("click", deleteEmployee);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
      });
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching employee data: ", error);
  }
}

// Function to handle editing an employee
window.editEmployee = async function(event) {
  const employeeId = event.target.dataset.employeeId;
  const newEmpId = prompt("Enter the new employee ID");

  if (newEmpId !== null && newEmpId.trim() !== "") {
    try {
      await update(ref(db, 'employeeIds/' + employeeId), { empid: newEmpId });
      alert("Employee ID updated successfully.");
      populateEmployeeTable();
    } catch (error) {
      console.error("Error updating employee ID: ", error);
    }
  }
}

// Function to handle deleting an employee
window.deleteEmployee = async function(event) {
  const employeeId = event.target.dataset.employeeId;

  const confirmDelete = confirm("Are you sure you want to delete this employee?");

  if (confirmDelete) {
    try {
      await remove(ref(db, 'employeeIds/' + employeeId));
      alert("Employee deleted successfully.");
      populateEmployeeTable();
    } catch (error) {
      console.error("Error deleting employee: ", error);
    }
  }
}

window.searchEmployeeTable = function() {
  const input = document.getElementById("searchEmployeeInput");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("employeeTable");
  const tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


// Call populateEmployeeTable on page load
document.addEventListener("DOMContentLoaded", function() {
  window.populateEmployeeTable();
});


window.addPartner = async function() {
  const partnerName = document.getElementById("partnerNameInput").value;

  if (partnerName) {
    try {
      await set(ref(db, 'partnerNames/' + partnerName), { partnerName: partnerName });
      populatePartnerTable();
      document.getElementById("partnerNameInput").value = "";
      alert("Partner added successfully.");
    } catch (error) {
      console.error("Error adding partner: ", error);
    }
  } else {
    alert("Please enter a Partner Name.");
  }
}

window.populatePartnerTable = async function() {
  const tableBody = document.querySelector("#partnerTable tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  try {
    const snapshot = await get(ref(db, 'partnerNames'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const partnerNames = Object.keys(data).map(key => ({ id: key, partnerName: data[key].partnerName }));

      // Loop through partnerNames and create table rows
      partnerNames.forEach(function(partner) {
        const row = tableBody.insertRow();

        // Insert Name column
        const nameCell = row.insertCell();
        nameCell.textContent = partner.partnerName;

        // Insert Actions column with Edit and Delete buttons
        const actionsCell = row.insertCell();
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        editButton.dataset.partnerId = partner.id; // Store document ID in dataset
        editButton.addEventListener("click", editPartner);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.dataset.partnerId = partner.id; // Store document ID in dataset
        deleteButton.addEventListener("click", deletePartner);

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
      });
    } else {
      console.log("No partner names available");
    }
  } catch (error) {
    console.error("Error fetching partner data: ", error);
  }
}

// Function to handle editing a partner name
window.editPartner = async function(event) {
  const partnerId = event.target.dataset.partnerId;
  const newPartnerName = prompt("Enter the new partner name");

  if (newPartnerName !== null && newPartnerName.trim() !== "") {
    try {
      await update(ref(db, 'partnerNames/' + partnerId), { partnerName: newPartnerName });
      alert("Partner name updated successfully.");
      populatePartnerTable();
    } catch (error) {
      console.error("Error updating partner name: ", error);
    }
  }
}

// Function to handle deleting a partner name
window.deletePartner = async function(event) {
  const partnerId = event.target.dataset.partnerId;

  const confirmDelete = confirm("Are you sure you want to delete this partner name?");

  if (confirmDelete) {
    try {
      await remove(ref(db, 'partnerNames/' + partnerId));
      alert("Partner name deleted successfully.");
      populatePartnerTable();
    } catch (error) {
      console.error("Error deleting partner name: ", error);
    }
  }
}

window.searchPartnerTable = function() {
  const input = document.getElementById("searchPartnerInput");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("partnerTable");
  const tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  window.populatePartnerTable();
});


window.logout = function() {
  window.location.href = "index.html";
}
