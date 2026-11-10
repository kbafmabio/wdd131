//declaration of the variable
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

//add an even listener to the hide hamburger and show navigation
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});