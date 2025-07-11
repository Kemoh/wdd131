// Select the DOM elements for ouput
const hamButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Add the class of "show" to the selected DOM elements
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});