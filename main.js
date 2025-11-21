const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
// for login notification
const socialButtons = document.querySelectorAll('.social-icons a');


socialButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); 

    // Alamin kung anong icon ang na-click
    if (btn.querySelector('.bxl-google')) {
      alert("✅ Logged in with Google successfully");
    } else if (btn.querySelector('.bxl-facebook')) {
      alert("✅ Logged in with Facebook successfully");
 
    }
  });
});
// LOGIN FORM HANDLER
document.querySelector('.login form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = this.querySelector('input[type="text"]').value;
  const password = this.querySelector('input[type="password"]').value;

  const savedUser = JSON.parse(localStorage.getItem('user'));

  if (savedUser && savedUser.username === username && savedUser.password === password) {
    alert("✅ Login successful! Welcome " + savedUser.username);
    // Redirect to dashboard
    window.location.href = "https://joshuapiquero19.my.canva.site/taguig-barangay-complaints";
  } else {
    alert("❌ Invalid . Please register first.");
  }
});

// REGISTRATION FORM HANDLER
document.querySelector('.register form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;

  // Save to localStorage (demo only)
  localStorage.setItem('user', JSON.stringify({username, email, password}));
  alert("✅ Account created! You can now login.");
});
