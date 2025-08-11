import { properties } from "../data/properties.mjs";    
//console.log(properties);

document.addEventListener('DOMContentLoaded', function() {
    const propertyContainer = document.querySelector('#propertylistings');
    //console.log(propertyContainer);

    if (propertyContainer) {
        propertyContainer.innerHTML = '';

        const params = new URLSearchParams(window.location.search);
        const purposeFilter = params.get('purpose')?.toLocaleLowerCase();

        const filteredProperties = purposeFilter
            ? properties.filter(property => property.purpose.toLocaleLowerCase() === purposeFilter)
            : properties;

        filteredProperties.forEach(property => {
            let propertyCard = document.createElement('section');
            let name = document.createElement('h3');
            let purpose = document.createElement('h4');
            let location = document.createElement('p');
            let photo = document.createElement('img');
            let propertyBtn = document.createElement('button');

            name.textContent = property.title;
            purpose.textContent = `For ${property.purpose}`;
            location.innerHTML = `<span class='label'>Location: </span>${property.location}`;
            propertyBtn.textContent = 'Contact Us';

            photo.setAttribute('src', property.image);
            photo.setAttribute('alt', property.title);
            photo.setAttribute('loading', 'lazy');
            photo.setAttribute('width', 290);
            photo.setAttribute('height', 250);
            propertyBtn.setAttribute('aria-label', 'Contact Us');
            propertyBtn.classList.add('propertybtn');
            propertyBtn.addEventListener('click', () => {
                window.location.href = 'contact.html';
            });

            propertyCard.appendChild(name);
            propertyCard.appendChild(purpose);
            propertyCard.appendChild(location);
            propertyCard.appendChild(photo);
            propertyCard.appendChild(propertyBtn);

            propertyContainer.appendChild(propertyCard);
        });
    } else {
        console.error('Element with ID "propertylistings" not found.');
    }
});


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
