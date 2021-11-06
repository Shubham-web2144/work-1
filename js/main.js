let searchIcon = document.querySelector('.search_icon');
let inputBox = document.querySelector('.input_box');
let form = document.querySelector('form');
let header = document.querySelector('.header');
let navIcon = document.querySelector('.nav_icon');
let headerNav = document.querySelector('.header_nav');
let headerSearch = document.querySelector('.header_search');
let navList = document.querySelectorAll('.header_nav ul li a');
let listBox = document.querySelectorAll('.header_nav ul li ');



inputBox.addEventListener('keypress', () => {
   headerSearch.classList.add('active');
   
});

navIcon.addEventListener('click', () => {
    headerNav.classList.toggle('active');
});

listBox.forEach((ele) => {
    ele.addEventListener('click', ()=> {
        listBox.forEach((element) => {
            element.classList.remove("active");
        });

        ele.classList.add("active");
    })
})