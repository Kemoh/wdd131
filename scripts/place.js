
// Static values for temp and windSpeed in Celcius and km/h
let temp = 10; 
let windSpeed = 5;
// Function to Calculate Wind Chill (Celcius)
function calculateWindChillCelcius(temp, windSpeed) {
    if (temp <=10 && windSpeed >4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }
    else {
        return 'N/A';
    }
}

// Call the calculateWindChillCelcius
const windChill = calculateWindChillCelcius(temp, windSpeed);
// Select DOM element for Output:
const windChillCelcius = document.querySelector('#wind-chill');

// Add EventListener when the page loads
document.addEventListener('DOMContentLoaded', ()=>  {
    windChillCelcius.textContent = `${windChill.toFixed(1)}℃`;
});