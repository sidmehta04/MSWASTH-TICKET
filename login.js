const users = [
  { username: "v", password: "1" },
  { username: "user2", password: "pass2" }
];

const admins = [
  { username: "a", password: "1" },
  { username: "admin2", password: "adminpass2" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.username === username && u.password === password);
  const admin = admins.find(a => a.username === username && a.password === password);

  if (user) {
    window.location.href = 'Mswasth.html';
  } else if (admin) {
    // Redirect to admin dashboard
    
    window.location.href = 'admin.html';

  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  // Implement logout functionality here
  window.location.href = 'index.html'; // Redirect to the main page
}

