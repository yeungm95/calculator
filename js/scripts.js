
var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var calculatorResult
alert(calculatorResult);


var bmi = function(weight, height) {
	return (weight/(height**2)) * 703;
}; 
var weight = parseInt(prompt("What is your weight in lbs?"));
var height = parseInt(prompt("What is your height in inches?"));

var bmiResult = bmi(weight, height).toPrecision(3);
alert(bmiResult)


var toCelcius = function(temp) {
  return (temp - 32) / 1.8;
};

var toFahrenheit = function(temp) {
  return (temp * 1.8) + 32;
};

var temp = parseInt(prompt("What is the temperature in Fahrenheit?"));
var temp = parseInt(prompt("What is the temperature in Celcius?"));

// alert(toFahrenheit(temp))
// alert(toCelcius(temp))


