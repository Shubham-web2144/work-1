// Scroll Revel Effect

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 5000,
    reset: false
});


sr.reveal('.box_1', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 100
});

sr.reveal('.box_2', {
    origin: 'right',
    distance: '100px',
    duration: 1000,
    delay: 200
});

sr.reveal('.box_3', {
    origin: 'leftt',
    distance: '100px',
    duration: 1000,
    delay: 300
});

sr.reveal('.content_text', {
    delay: 500
});

sr.reveal('.footer_content', {
    delay: 150
});

// sr.reveal('.banner_content', {
//     delay: 100,
//     duration: 1000
// });

sr.reveal('.product_productInfo', {
    origin: 'top',
    delay: 100
});

sr.reveal('.contact_text', {
    origin: 'top',
    delay: 100

})