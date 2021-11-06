let searchIcon = document.querySelector('.search_icon');
let inputBox = document.querySelector('.input_box');
let form = document.querySelector('form');
let header = document.querySelector('.header');
let navIcon = document.querySelector('.nav_icon');
let headerNav = document.querySelector('.header_nav');

form.addEventListener('kyedown', (e) => {
    e.preventDefault();
    // searchIcon.style.display = "block";
});

inputBox.addEventListener('focus', () => {
    
});

navIcon.addEventListener('click', () => {
    headerNav.classList.toggle('active');
})