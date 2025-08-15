const convertToCelsius = function(fah) {
  const celsius = (fah - 32) * 5 / 9;
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  const fah = (cel * 9 / 5) + 32;
  return Number(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
