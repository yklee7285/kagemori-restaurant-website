//Navbar Scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){  
    if(window.pageYOffset > 0){
        nav.classList.add('scroll')
    }
    else{
        nav.classList.remove('scroll')
    } 
});

//Validate Signup
function validateSignup(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");    
    const passwordError = document.getElementById("password-error");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";


    let isValid = true;

    if (name.trim() === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter a valid name.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address following format someone@example.com.";
        isValid = false;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be between 8 to 15 characters and contain at least one numeric digit, one uppercase and one lowercase letter.";
        isValid = false;
    }

    if(isValid){
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        const signupError = document.getElementById("signup-error");
        signupError.textContent = "";
        
        //Check For Existing Account 
        const users = JSON.parse(localStorage.getItem("users")) || {};
    
        if (email in users) {
            signupError.textContent = "Email is already in use.";
            isValid = false;
            return isValid;
        }
        
        // Store Password
        users[email] = { name: name, password: password }; 
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful!");    
    }

    return isValid;
}

// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginError = document.getElementById("login-error");
    loginError.textContent = "";

    let loginSuccess = true;

    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (!(email in users)) {
        loginError.textContent = "Account not found, please sign up.";
        loginSuccess = false;
        return loginSuccess;
    }

    if (users[email].password === password) {
        alert(`Welcome back, ${users[email].name}!`);
    } else {
        loginError.textContent = "Incorrect password.";
        loginSuccess = false;
        return loginSuccess;
    }

    localStorage.setItem("accountActive", true);
    return loginSuccess;
}

//Show Password
function showPassword() {
    var input = document.getElementById("password");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

//Update Navbar Link
document.addEventListener("DOMContentLoaded", updateNavbar);

function updateNavbar() {
    const isLoggedIn = localStorage.getItem("accountActive") === "true";

    const loginLink = document.getElementById("navbar-login");

    if (isLoggedIn) {
        loginLink.textContent = "Account";
        loginLink.setAttribute("href", "account.html");
    } 
    else {
        loginLink.textContent = "LOGIN | SIGNUP";
        loginLink.setAttribute("href", "login.html");
    }
}

//Logout
const logoutButton = document.querySelector(".logout-button");
logoutButton.addEventListener("click", function(){
    localStorage.setItem("accountActive", false);
    alert("Log out successful.");
    updateNavbar();
});

