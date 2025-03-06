const container = document.getElementById("container");
const registerbtn = document.getElementById("register");
const loginbtn = document.getElementById("login");

registerbtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginbtn.addEventListener("click", () => {
  container.classList.remove("active");
});
// Get the modal
const modal = document.getElementById("terms-modal");

// Get the button that opens the modal
const termsLink = document.getElementById("terms-link");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
termsLink.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

/menu show/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');

}))
document.getElementById('login').addEventListener('click', () => {
  document.getElementById('container').classList.remove('active');
});


//remember me part
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const loginUsername = document.getElementById("loginUsername").value.trim();
  const loginPassword = document.getElementById("loginPassword").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;

  if (loginUsername === "" || loginPassword === "") {
    alert("Please fill in both username and password.");
  } else {
    if (rememberMe) {
      localStorage.setItem("username", loginUsername);
      localStorage.setItem("password", loginPassword);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.setItem("rememberMe", "false");
    }

    alert("Login successful!");
    // Now redirect to the next page
    window.open('file:///C:/FeeProjectRfidPortal/IdManagementAndFeedbackPage/IdManage.html', '_blank');
  }
});
window.addEventListener("DOMContentLoaded", (event) => {
  const remembered = localStorage.getItem("rememberMe") === "true";
  if (remembered) {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername) {
      document.getElementById("loginUsername").value = savedUsername;
    }
    if (savedPassword) {
      document.getElementById("loginPassword").value = savedPassword;
    }
    document.getElementById("rememberMe").checked = true;
  }
});


// Register user and store in localStorage
function registerUser(email, password) {
  localStorage.setItem('registeredEmail', email);
  localStorage.setItem('registeredPassword', password);
}

// Validate Signup
function validateSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (name === '') {
      alert('Name is required');
      return false; // Prevent form submission
  }
  if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return false; // Prevent form submission
  }
  if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false; // Prevent form submission
  }

  // Register the user
  registerUser(email, password);
  alert('Registration successful! You can now log in.');
  return false; // Prevent form submission for demonstration purposes
}

// Validate Sign In
function validateSignin() {
  const email = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  // const validEmail = 'aaronvijay@gmail.com';
  // const validPassword = '123';

  // Debugging logs
  console.log('Email:', email);
  console.log('Password:', password);

  if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return false; // Prevent form submission
  }
  if (password === '') {
      alert('Password is required');
      return false; // Prevent form submission
  }
  
  // Check if the provided email and password match the valid ones
  if (email === validEmail && password === validPassword) {
      alert('Login successful! Redirecting to the site...');
      window.location.href = 'file:///C:/FeeProjectRfidPortal/IdManagementAndFeedbackPage/IdManage.html'; // Replace with your actual next page URL
      return false; // Prevent form submission (redirecting will occur)
  } else {
      alert('Invalid email or password');
      return false; // Prevent form submission
  }
}

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}






// Register user and store in localStorage
function registerUser(name, email, password) {
  localStorage.setItem('registeredName', name);
  localStorage.setItem('registeredEmail', email);
  localStorage.setItem('registeredPassword', password);
}

// Validate Signup
function validateSignup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (name === '') {
      alert('Name is required');
      return false; // Prevent form submission
  }
  if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return false; // Prevent form submission
  }
  if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return false; // Prevent form submission
  }

  // Register the user
  registerUser(name, email, password);
  alert('Registration successful! You can now log in.');

  // Redirect to the next page
  window.location.href = 'file:///C:/FeeProjectRfidPortal/IdManagementAndFeedbackPage/IdManage.html'; // Update this with your actual next page URL
  return false; // Prevent form submission
}

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

// Modal open and close functions
function openModal() {
  document.getElementById('terms-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('terms-modal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('terms-modal');
  if (event.target === modal) {
      closeModal();
  }
}