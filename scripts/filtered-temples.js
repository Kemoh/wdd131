// Select the DOM elements for ouput
const hamButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Add the class of "show" to the selected DOM elements
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navBar.classList.toggle('show');
});


// Temple Object
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    continent: "Africa",
    dedicated: "2004, January 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Port Moresby Papua New Guinea Temple",
    location: "Papua, New Guinea",
    continent: "Africa",
    dedicated: "2023, April 22",
    area: 9550,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/port-moresby-papua-new-guinea-temple/port-moresby-papua-new-guinea-temple-11739-main.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast Temple",
    location: "Abidjan, Cote d'Ivoire",
    continent: "Africa",
    dedicated: "2018, Novemebr 8",
    area: 23958,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"
  }
];

// Create temple card
function CreateTempleCard(filteredTemples) {
    // Select the DOM element for Ouptut
    const templeList = document.querySelector('.filtered-temples-grid');
    // Clear the output 
    templeList.innerHTML = '';

    // Function to display temples
    filteredTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let dedicated = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        // Populate the elements above
        name.textContent = temple.templeName;
        location.innerHTML = `<span class='label'>Location: </span>${temple.location}`;
        dedicated.innerHTML = `<span class='label'>Dedicated: </span>${temple.dedicated}`;
        area.innerHTML = `<span class='label'>Area: </span>${temple.area} sq. ft.`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', 200);
        img.setAttribute('height', 200);

        // Append elements to card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        // Load card to DOM
        document.querySelector('.filtered-temples-grid').appendChild(card);
    });
};

// Function to extract year from string
function getIntYear(dedicated) {
    return parseInt(dedicated.split(',')[0]);
    
}

// Function to filter temples
function filteredTemples(filterType) {
    // Create an array for filtered temples
    let filteredTemples = [];
    // Define filterTypes
    switch (filterType) {
        case 'old':
            filteredTemples = temples.filter(temple => getIntYear(temple.dedicated) < 1900);
            break;

        case 'new':
            filteredTemples = temples.filter(temple => getIntYear(temple.dedicated) > 2000);
            break;

        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;

        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;

        case 'home':
            filteredTemples = temples;
            break;
        default:
            console.log('Invalid filter type');
            return;
        }
        CreateTempleCard(filteredTemples);
};

// Add event listeners to navigation menu items
document.getElementById('old-temples').addEventListener('click', () => filteredTemples('old'));
document.getElementById('new-temples').addEventListener('click', () => filteredTemples('new'));
document.getElementById('small-temples').addEventListener('click', () => filteredTemples('small'));
document.getElementById('large-temples').addEventListener('click', () => filteredTemples('large'));
document.getElementById('home').addEventListener('click', () => filteredTemples('home'));

// Diplay all temples on page load to the home list item
filteredTemples('home');