// Select the DOM elements for output
const currentYear = document.querySelector('#current-year');
const lastModifiedDate = document.querySelector("#last-modified");

// Set up the date format object parameter for toLocaleDateString method
const options = {year: "numeric"};

// Inserting date into DOM
currentYear.innerHTML = `&copy; ${new Date().toLocaleDateString("en-UK", options)} ✝️ Umaru Bayoh ✝️ Sierra Leone</span>`;

// Set up the date format object for last modification date for toLocalDateString method

// Use the lastModified property of the document interface 
const lastModif = document.lastModified;

// Inserting last modification date into DOM
lastModifiedDate.innerHTML = `<span>Last Modification: ${lastModif}</span>`;