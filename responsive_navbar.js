const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navbar = document.querySelector('.navbar');

//Expand Upon Click By Toggling Class
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    navbar.classList.toggle('black');
});
