// Exercises combine string and array methods
// to solve puzzles.

// 1. write a function that changes letters to utf-16
// Atilla example

/* let letters = "abcdefghijklmnopqrstuvwxyz";
// .charCodeAt() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
function ConvertLettersToUtf16(str){ // 
    // convert str data to arraylist
    let arr = str.split("") // string method
    const encoded= []
    // loop the array forEach() // array method
    arr.forEach(function(letter){
        encoded.push(letter.charCodeAt())
    })
    return encoded
}
console.log(ConvertLettersToUtf16(letters)); */

// 2. write a function that converts utf-16 to letters
let msg = [
  70, 111, 108, 108, 111, 119, 32, 116, 104, 101, 32, 119, 104, 105, 116, 101,
  32, 114, 97, 98, 98, 105, 116, 46,
];

// Me
/* msg.forEach(function (value) {
  return console.log(String.fromCharCode(value));
}); */

// Atilla example
function DecodeUtf16Chars(arr) {
  // arraylist
  let message = "";
  // let result = String.fromCharCode(arr)
  arr.forEach(function (letter) {
    // console.log(String.fromCharCode(letter))
    message += String.fromCharCode(letter);
  });
  return message;
}
console.log(DecodeUtf16Chars(msg));

// 3. write a function that adds a student to the students array and displays the students array

// Me
/* const newStudent = {
  full_name: "John Doe",
  age: 20,
  email: "johndoe@microsoft.com",
  phone: "123-456-7890",
  address: "123 Main St.",
};

let students = [];

function addStudent(obj) {
  students.push(obj);
  return students
}
let result = addStudent(newStudent)

console.log(result);
console.log(students);

function AddStudent(obj){
    students.push(obj)
    return students;
} */

// Atilla example
let students = [];

function AddStudent(obj) {
  students.push(obj);
  return students;
}

let student1 = AddStudent({
  id: 1,
  name: "Michael Jackson",
  email: "michael@microsoft.com",
});
console.log(student1);

let student2 = AddStudent("Michael");
console.log(student2);

let student3 = AddStudent("Michael1");
console.log(student3);

// 4. write a function that encode a string to base64
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/
// decrypt: atob
// encrypt: btoa

// Me
/* function stringToBase64(){
    var str = "mohamed"
    return btoa(str);
}
console.log(stringToBase64()); */

// Atilla example
function EncryptString(str) {
  let encoded = btoa(str);
  console.log(encoded);
}

function DecryptString(encoded) {
  let decoded = atob(encoded);
  console.log(decoded);
}
EncryptString("Knock knock!");
DecryptString("SGVsbG8gSmF2YXNjcmlwdCE=");

// Or

// This is better !!!
const base64Tool = {
  Encrypt: function (str) {
    let encoded = btoa(str);
    console.log(encoded);
  },
  Decrypt: function (encoded) {
    let decoded = atob(encoded);
    console.log(decoded);
  },
};
base64Tool.Encrypt("Hello Javascript!!!!");
base64Tool.Decrypt("SGVsbG8gSmF2YXNjcmlwdCEhISE=");

// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
let names = "john, peter, mary, susan, john, mary";

//Me
/* function ClickHandler(){
  var arrayNames = names.replace(/,/g, "").split(' ')
  const output = document.getElementById('output')
    output.innerHTML=""
    alert("The list comming")
    arrayNames.forEach(function(name){
        output.innerHTML+=`<li>${name}</li>`
    })
} */

// Atilla example
function ConvertStringToArray(str){
    let arr = str.split(",");
    let names = []
    arr.forEach(function(name){
        names.push(name.trim())
    })
    return names
}

function SortArray(data){
    return data.sort()
}

const output = document.getElementById('output')

function DisplayArray(data){
    output.innerHTML=""
    data.forEach(function(name){
        output.innerHTML+=`<li>${name}</li>`
    })
}

// console.log(DisplayArray(SortArray(ConvertStringToArray(names))))

function ClickHandler(){
    alert("The list comming")
    DisplayArray(SortArray(ConvertStringToArray(names)))
}