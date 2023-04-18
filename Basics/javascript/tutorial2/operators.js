// Javascript operators

// Assignment operator (=)
var name = 'Ahmed'
var age = 25

// Addition operator (+)
var number1 = 5
var number2 = 6
var getSumOfNumbers = number1 + number2 // (getSumOfNumbers = 5+6) => 11
console.log(`Result is ${getSumOfNumbers}`);

var firstname = "John "
var lastname = "Doe"
var fullname = firstname + lastname
console.log(fullname);

var n1 ="1"
var n2 =3
var result = n1+n2
console.log(typeof result);
console.log(result);

// substraction  operator (-)

var n1 = 10
var n2 = 6
var result = n2-n1
console.log(result);

var brutosalary = 3000
var tax = 21
var calculTax = brutosalary / 100 *tax 
var netosalary = brutosalary - calculTax  
console.log(netosalary);

var age = 30

// Increment operator (++)
age++ // increase +1 first way
age = age +1 // increase +1 seconde  way

// Decrement operator (--)
age-- // decrease -1 first way
age = age -1 // decrease -1 seconde  way
console.log(age);

var firstname = "Michael "
var lastname = "Jackson"


// firstname +=lastname
// var fullname = firstname+lastname; 
// console.log(fullname)

firstname+=lastname; // firstname = firstname + lastname

console.log(firstname)

var n1= 5;
var n2=6;

// var result = n1 + n2;

n1+=n2; // n1 = n1 + n2
console.log(n1)

n1-=n2 // n1 = n1-n2 
n1*=n2 // n1 = n1*n2
n1/=n2 // n1 = n1/n2
// 3*3 = 9 * 3 = 27