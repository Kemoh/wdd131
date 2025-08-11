import { properties } from "../data/properties.mjs";    
//console.log(properties);

document.addEventListener('DOMContentLoaded', function() {
    // --- Filter Buttons Setup ---
    const buttons = document.querySelectorAll('#link-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const purpose = button.dataset.purpose.toLowerCase();
            let url = 'property.html';
            if (purpose) {
                url += `?purpose=${purpose}`;
            }
            window.location.href = url;
        });
    });
    

    // --- Property Listing Code (your existing code) ---
    const propertyContainer = document.querySelector('#propertylistings');
    if (propertyContainer) {
        propertyContainer.innerHTML = '';
        const params = new URLSearchParams(window.location.search);
        const purposeFilter = params.get('purpose')?.toLowerCase();

        const filteredProperties = purposeFilter
            ? properties.filter(property => property.purpose.toLowerCase() === purposeFilter)
            : properties;

        filteredProperties.forEach(property => {
            // ... your existing code to create property cards
        });
    } else {
        console.error('Element with ID "propertylistings" not found.');
    }

    // Visit Count

    // Get the stored VALUE for the numberVisits-ls KEY in localStorage if it exists. If the numberVisits-ls KEY is missing, than assign 0 to the numberVisits variable.
    
    let vistednum = Number(window.localStorage.getItem('numberVisits-ls')) || 0;

    // Get the HTML element where you want to display the visit count
    const numVisits = document.querySelector('.num-visits');

    // Determine if this is the first visit or display the number of visits
    if (numVisits) { // Check if the element was found
    if (vistednum !== 0) {
        numVisits.textContent = vistednum + 1;
    } else {
        numVisits.textContent = 'This is your first visit. Welcome!';
    }
}

// Increment the number of visits by one
vistednum++;

// Store the new visit total into localStorage, key=numberVisits-ls
localStorage.setItem('numberVisits-ls', vistednum);

});


