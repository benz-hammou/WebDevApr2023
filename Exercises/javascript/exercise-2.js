/* Exercise 3 functions */

// 1. Create a function called "add" that takes two arguments (parameters named "first" and "second") and returns their sum.
function add(first, second) {
  return first + second;
}
console.log(add(1, 2));
// 2. Create a function called "subtract" that takes two arguments (parameters named "first" and "second") and returns their difference.
function subtract(first, second) {
  return first - second;
}
console.log(subtract(1, 2));
// 3. Create a function called "multiply" that takes two arguments and returns their product.
function multiply(first, second) {
  return first * second;
}
console.log(multiply(1, 2));
// 4. Create a function called "divide" that takes two arguments and returns their quotient.
function divide(first, second) {
  return first / second;
}
console.log(divide(1, 2));

// 5. Create a function called "calculate" that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
function calculate(num1, operates, num2) {
  return eval(`${num1} ${operates} ${num2}`);
}
// 6. Call the calculate function 4 times, each time using one of the operation functions you wrote
console.log(calculate(11, "*", 5));
console.log(calculate(10, "+", 5));
console.log(calculate(31, "-", 5));
console.log(calculate(85, "/", 5));
// 7. Create a function called "printDay" that takes one argument (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday etc.)
function printDay(day) {
  switch (day) {
    case 1:
      return "1 is Sunday";

    case 2:
      return "2 is Monday";

    case 3:
      return "3 is Tuesday";

    case 4:
      return "4 is Wednesday";

    case 5:
      return "5 is Thursday";

    case 6:
      return "6 is Friday";

    case 7:
      return "7 is Saturday";

    default:
      return "What day do you want ?";
  }
}
console.log(printDay(2));
