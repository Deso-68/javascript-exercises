// Applies standard fahrenheit to celcius conversion
const convertToCelsius = temperature => 
(+Number.parseFloat((temperature - 32) * 5 / 9).toFixed(1));

// Applies standard celcius to fahrenheit conversion
const convertToFahrenheit = temperature => 
(+Number.parseFloat(((temperature * 9 / 5) + 32).toFixed(1)));

convertToCelsius(100);

let i = 0;
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
