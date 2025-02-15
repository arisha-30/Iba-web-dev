// Simulated user database (stored in localStorage)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Sign Up Logic
document.getElementById('signup-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Basic validation
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Check if user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('User already exists!');
    return;
  }

  // Add user to the database
  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage
  alert('Sign up successful! Redirecting to login...');
  window.location.href = 'index.html';
});

// Login Logic
document.getElementById('login-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Retrieve users from localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Find the user
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    alert('Login successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});