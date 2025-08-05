// Products array for the remaining select products
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Get the select element by its id
const selectProduct = document.getElementById('product');

// Loop through the products array and create options products dynamically
document.addEventListener('DOMContentLoaded', function () {
    products.forEach(product => {
        const optionProduct = document.createElement('option');
        optionProduct.value = product.name;
        optionProduct.innerHTML = product.name;
        selectProduct.appendChild(optionProduct); 
    });
    
});


// Keep track of the number of reviews using localStorage 

// Select DOM element for output
const numberReviews = document.querySelector('.visited');

// Get the stored VALUE for the numberVisits-ls KEY in localStorage if it exists. If the numberVisits-ls KEY is missing, than assign 0 to the numberVisits variable.

let numberVisits = Number(window.localStorage.getItem('numberVisits-ls')) || 0;

// Determine if this is the first visit or display the number of visits
if (numberVisits !== 0) {
    numberReviews.textContent = numberVisits + 1;
} else {
    numberReviews.textContent = 'This is your first visit. Welcome!';
}

// Increment the number of visits by one
numberVisits++;

// Store the new visit total into localStorage, key=numberVisits-ls
localStorage.setItem('numberVisits-ls', numberVisits);
