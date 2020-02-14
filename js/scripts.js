
// Calculator

//Back-end logic
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

//Front-end logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    debugger;
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
});


// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));

// var calculatorResult
// alert(calculatorResult);

// // BMI
// var bmi = function(weight, height) {
// 	return (weight/(height**2)) * 703;
// }; 
// var weight = parseInt(prompt("What is your weight in lbs?"));
// var height = parseInt(prompt("What is your height in inches?"));

// var bmiResult = bmi(weight, height).toPrecision(3);
// alert(bmiResult)

// // Temperature
// var toCelcius = function(temp) {
//   return (temp - 32) / 1.8;
// };

// var toFahrenheit = function(temp) {
//   return (temp * 1.8) + 32;
// };

// var temp = parseInt(prompt("What is the temperature in Fahrenheit?")); // alert(toCelcius(temp))
// var temp = parseInt(prompt("What is the temperature in Celcius?")); // alert(toFahrenheit(temp))


