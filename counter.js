const co2Counter = document.getElementById('co2-counter'); // Get the div element for the counter
let co2Captured = 0; // Initialize the CO2 captured variable to 0

setInterval(() => {
  co2Captured += 1; // Increment the CO2 captured by 1 ton per second
  co2Counter.innerHTML = `CO2 Captured: ${co2Captured} tonnes`; // Update the text on the page
}, 1000); // Call the function every 1000 milliseconds (i.e. 1 second)
