var result

var fullname = "michael "
result = typeof fullname

// number data type
result = 10

// Boolean data type (true or false)
result = true;
result = false;

// Undefined data type
result = undefined;

// null
result = null;

console.log(null+5)
console.log(Number(undefined))

// object
result = ['a','b','c',1,2,3] // object /// array
result = {
    name:"Michael" // object
}

// function
function getName(){
    return "blabla"
}

result = getName

var n1 = "1";
var n2 = 6;
result = Number(n1) + n2;


class Application{
    getName(){
        return "blalalal"
    }
}

// function Application(){

// }

const app = new Application()

result = Application // function
result = app // object

result = new Date()
result = Math

console.log(result, "Type of this data is " +typeof result);
