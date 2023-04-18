// Number methods
var result;
// Number() // convert string to number/integer
result = "10" // number
var x = 5
result = Number(x)
result = Number("5") === 5

x=100;
result = x.toString();

result = x.toFixed(3);

result = isNaN("hello5") // This is not a number: True correct
result = isNaN("5hello",5);

var ThisIsNotANumberYesOrNo ="intec";

result = isNaN(ThisIsNotANumberYesOrNo);

result = isNaN("5");

// function IsThisNotANumber(value1,value2){
//     console.log(value1,value2)
// }

// IsThisNotANumber(50,60,70)

// parseInt() // convert string to a real integer
result = "5" // Number() parseInt()
result = parseInt("5");

// isInteger // return boolean

result = Number.isInteger(5.5)

// +"55" => shortcut of convert string to number

console.log(`Result is ${result} and typeof variable is ${typeof result}`)

+"55" // => shortcut of convert string to number

console.log(`Result is ${result} and typeof variable is ${typeof result}`)