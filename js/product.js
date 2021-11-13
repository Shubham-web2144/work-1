let favIcon = document.querySelectorAll(".fav_icon");
let favDigit = document.querySelector('.fav_digit');

let cartBtn = document.querySelectorAll(".cart");
let cartDigit = document.querySelector(".cart_digit");
let productCard = document.querySelectorAll(".product_card");
let select = document.querySelector("#select");

let product = document.querySelector("#container");



let count = 0;

favIcon.forEach((item) => {
    item.addEventListener("click" , () => {
       count++;
       favDigit.innerHTML = count; 
       item.classList.add("active");
    });
});


let cartValue = 0;

cartBtn.forEach((item) => {
    item.addEventListener("click" , () => {
       cartValue++;
       cartDigit.innerHTML = cartValue; 
       item.style.pointerEvents = "none";
    });
});


product.addEventListener("click", () => {
    window.location.href = "../Pages/inquire.html"
})

