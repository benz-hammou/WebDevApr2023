// Arrow Functions 

//Standard way
function MyFunction() {
    return 'hello'
}

const MyFunction = () => "fvedgr"
console.log(MyFunction());

// const MyFunction = ()=>'hello'
// console.log(MyFunction())

// function MyFunction(name){
//     return name
// }

// const MyFunction = name=>name

// const MyFunction = (first,last)=>`${first} ${last}`
// console.log(MyFunction('John','Doe'))

// const MyFunction = (number1,number2)=>number1+number2

// console.log(MyFunction(5,5))

var MyVariable = "coffee" // `I turn coffee into code`
const getMessage = name=>{
    var fullText = `I turn ${name} into code`
    fullText = fullText.toUpperCase();
    return fullText
}

console.log(getMessage(MyVariable))