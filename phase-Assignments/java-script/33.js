// 33. Write a function to convert Celsius to Fahrenheit
// Ex: input: 32
// output: 89.6 F

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

// example
let result = celsiusToFahrenheit(32);
console.log(result + " F");