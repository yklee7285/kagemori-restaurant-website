document.addEventListener("DOMContentLoaded", updateNavbar);

// Check if user logged in and update navbar link
function updateNavbar() {
    const isLoggedIn = localStorage.getItem("accountActive") === "true";

    // Select navbar link that need to be modified
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