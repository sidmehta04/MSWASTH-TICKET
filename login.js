const users = [
  { username: "v", password: "1" },
  { username: "user2", password: "pass2" },
  { username: "abhishek", password: "123456" },
  { username: "test", password: "123456" },
];

const admins = [
  { username: "a", password: "1" },
  { username: "admin2", password: "adminpass2" },
  { username: "admin2", password: "adminpass2" },
  { username: "prakash", password: "123456" },
  { username: "test", password: "123456" },
  { username: "sidharth", password: "123456" },
];

const admin2 = [{ username: "s", password: "1" }];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  const admin = admins.find(
    (a) => a.username === username && a.password === password
  );

  if (user) {
    // Set session storage item and redirect to user page
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "Mswasth.html";
  } else if (admin) {
    // Set session storage item and redirect to admin dashboard
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "admin.html";
  } else {
    alert("Invalid username or password");
  }
}


function logout() {
  // Implement logout functionality here
  window.location.href = "index.html"; // Redirect to the main page
}
