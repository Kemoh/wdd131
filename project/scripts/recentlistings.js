import { listings } from "../data/recentlistings.mjs";    
//console.log(listings);

// Grab the div element in the html to display the cards
const showListings = document.querySelector("#showlistings");

// Create and display property listings card
function listingsCard() {
    // Select DOM element for output
    const listingsContainer = document.querySelector('#showlistings');
    // Set the output field to empty string
    listingsContainer.innerHTML = '';

    // Create filtered listings card
    listings.forEach(list => {
        // Create Elements
        let listCard = document.createElement('section');
        let name = document.createElement('h3');
        let purpose = document.createElement('h4');
        let location = document.createElement('p');
        let photo = document.createElement('img');
        let recentlistingsBtn = document.createElement('button');
       
        // Populate Elements
        name.textContent = list.title;
        purpose.textContent = list.purpose;
        location.innerHTML = `<span class='label'>Location: </span>${list.location}`;
        recentlistingsBtn.textContent = 'More Details';
        
        // Set attributes
        photo.setAttribute('src', list.imageurl);
        photo.setAttribute('alt', list.title);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', 333);
        photo.setAttribute('height', 250);
        recentlistingsBtn.setAttribute('aria-label', 'More Details');
        recentlistingsBtn.classList.add('listingsbtn');
        recentlistingsBtn.addEventListener('click', () => {
                window.location.href = 'property.html';
            });

        // Append elements to list card
        listCard.appendChild(name);
        listCard.appendChild(purpose);
        listCard.appendChild(location);
        listCard.appendChild(photo);
        listCard.appendChild(recentlistingsBtn);
        
        // Laod the listCard to the DOM
        showListings.appendChild(listCard);
    }); 

    // Start the carousel sliding
    slidingCarousel();
} 


// Create a carousel sliding function
function slidingCarousel() {
    const track = document.querySelector('#showlistings');
    const cards = track.querySelectorAll('section');
    const totalCards = cards.length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        const cardWidth = cards[0].offsetWidth;
        track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    }, 3000);
}

// Call the listingsCard function
listingsCard();

