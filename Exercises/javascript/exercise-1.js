/* Exercise 1 operators */

// 1. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings = 10;
let guests = 20;

// 2. Add snackServings and guests.
let add = snackServings + guests
console.log(add);
// 3. Subtract guests from snackServings. Then, subtract snackServings from guests.
let sub = guests - snackServings
console.log(sub);
// 4. Multiply snackServings and guests.
let multy = snackServings * guests
console.log(multy);
// 5. Divide snackServings by guests.
let divid = guests / snackServings
console.log(divid);

// 6. Declare another variable "drinks" with value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
let drinks = 10;
let resultOne = multy / drinks
console.log(resultOne);
// 7. Declare two variables: "monkeys" with value 15, and "bananas" with value 9. Divide monkeys by bananas.
let monkeys = 15;
let bananas = 9;
let res2 = monkeys/bananas
console.log(res2);
// 8. Declare another variable "monkeyfights" with value 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let monkeyfights = 20;
let resultTwo = monkeys+bananas*monkeyfights
console.log(resultTwo);
// 9. Increment monkeys.
monkeys++
console.log(monkeys);
// 10. Decrement bananas.
bananas--
console.log(bananas);
// 11. Subtract monkeys from bananas and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness = monkeys - bananas + monkeyfights
console.log(happiness);
// 12. Print the remainder when "resultOne" is divided by "resultTwo" to the console.
let result = resultOne % resultTwo
console.log(result);
// 13. Create a variable called "orderHasShipped" and set it to false. Create an if statement that checks if orderHasShipped is true. If it is true, console log "The order shipped". If not, console log "The order did not ship".
let orderHasShipped = false

orderHasShipped === true ? console.log("The order shipped") : console.log("The order did not ship")
// Or
let ternary = orderHasShipped === true ? "The order shipped" : "The order did not ship"
console.log(ternary);

/*
Exercise 2 data types 
boolean/number/string/array/object
*/

// 1. Declare a variable "test" and set it to a boolean value.
let test = true
// 2. Declare a variable "message" and set it to a string value.
let message = ""
// 3. Declare a variable "undefinedVariable" and set it to undefined.
let undefinedVariable = undefined
// 4. Declare a variable "nullVariable" and set it to null.
let nullVariable = null
// 5. Declare a variable "sampleNumber" and set it to a number value.
let sampleNumber = 5
// 6. Use the typeof operator to check the type of "sampleNumber".
console.log(typeof sampleNumber);
// 7. Declare a variable "students" and set it to an empty array.
let students = []
// 8. Declare a variable "sampleArray" and set it to an array with 5 elements.
let sampleArray = ["John", "Doe", 4, false, "Mo"]
// 9. Access the 3rd element in "sampleArray".
console.log(sampleArray[2]);
// 10. Declare a variable "sampleObject" and set it to an object with a property "name" and a value of your name.
let sampleObject = {
    name: "mohamed"
}
// 11. Access the "name" property in "sampleObject".
console.log(sampleObject.name);
// 12. Declare a variable "car" and set it to an object with a property "model" and a value of "Honda Civic".
let car = {
    model: "Honda Civic"
}
// 13. Access the "model" property in "car".
console.log(car.model);