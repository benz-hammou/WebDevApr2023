/* Exercise for string/number/array methods */

var students=["John","Jane","Jim","Jill","Jack","Jenny","Jeremy","Jasmine","Jody","Jen"];

// 1. Find the length of students array, and store it in a variable called "numberOfStudents".

const numberOfStudents = students.length
console.log('1) -',numberOfStudents);

// 2. Find the first element of students array, and store it in a variable called "firstStudent".
// const firstStudents = students.shift()
// console.log('2) -',firstStudents);

// 3. Find the last element of students array, and store it in a variable called "lastStudent".
// const lastStudents = students.pop()
// console.log('3) -',lastStudents);

// 4. Find the middle element of students array, and store it in a variable called "middleStudent". Hint: If the length of the array is even there is no single middle element. In that case, find the two elements that are in the middle and store them in an array called "middleStudents".
const middleStudent = students.slice(students.length/2-1,students.length/2+1)
console.log('4) -',middleStudent);

// 

var ages=[18,35,12,24];
// 5. Find the first element of ages array, and store it in a variable called "firstAge".
/* const firstAge = ages.shift()
console.log('5) -',firstAge);  */

// 6. Find the last element of ages array, and store it in a variable called "lastAge".
/* const lastAge = ages.pop()
console.log('6) -', lastAge); */

// 7. Find the middle element of ages array, and store it in a variable called "middleAge". Hint: If the length of the array is even there is no single middle element. In that case, find the two elements that are in the middle and store them in an array called "middleAges".
const middleAge = ages.slice(ages.length/2-1,ages.length/2+1)
console.log('7) -',middleAge);

//

var stringToAarray = "Split me into an array";
// 8. Split stringToAarray variable into an array called "arrayFromString". Print arrayFromString to the console.
const arrayFromString = stringToAarray.split()
console.log('8) -',arrayFromString);

//

var letters ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
// convert it to array list
/* letters = letters.split(',')
console.log('8,5) -',letters); */

// 9. Split letters variable into an array called "arrayFromLetters". Print arrayFromLetters to the console.
var arrayFromLetters = letters.split()
console.log('9) -',arrayFromLetters);

//

var names = "john-jane-jim-jill-jack-jenny-jeremy-jasmine-jody-jen"; // convert it to array list
/* names = names.split('-')
console.log('9,5) -',names) */

// 10. Split names variable into an array called "arrayFromNames". Print arrayFromNames to the console.
const arrayFromNames = names.split('-')
console.log('10) -',arrayFromNames);

//

var salary = 20023.457678 // round it to two decimal places
// 11. Round salary variable to two decimal places and store it in a variable called "roundedSalary". Print roundedSalary to the console.
roundedSalary = salary.toFixed(2)
console.log('11) -',roundedSalary);


var brutoSalary = 20000 // calculate the net salary (net salary is bruto salary - 20% tax)
// 12. Calculate the net salary (net salary is bruto salary - 20% tax) and store it in a variable called "netSalary". Print netSalary to the console.
const netSalary = brutoSalary - brutoSalary*20/100
console.log('12) -',netSalary);