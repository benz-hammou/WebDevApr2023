// Comparison operators
var n1 = 5
var n2 = 6
var n3 = 5
var n4 = "5"
// Equal to (==) Variable value
/* console.log(n1==n2);
console.log(n1==n2); */

// Equal to (===) Var value and var typeof
console.log(n1 == n4); // controle value only
console.log(n1 === n4); // controle value and data type (typeof)

// Not Equal to operator (!=)
console.log(n1!=n2);

// Not Equial operator with dubble equal symbol (!==) // controle value controle type
console.log(n1!==n4);

// greater than (>)
console.log(n2>n1);
console.log(6>5);

// less than (<)
console.log(n3<n2);

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const map1 = numbers.map(number => {
    console.log(number %2 === 0 ? "it is even number" : "odd number");
})

const isAdmin = !false
const IsLoggedIn = isAdmin? "Welcome Admin, you\'r logged in" : "You are not authorized "

let articles = []
let result = articles.length>0 ? articles.map(item=>item.title) : "Data is loading"
console.log(result);

//  (condition) ? TRUEMESSAGE : FALSEMESSAGE

var x = false;
var y = true;
result = x ? (y ? "Y is true" : "Y is false") : "X is false";
// result = x || y ? console.log("X is true and Y is also true!!") : console.log("False none of them is true")
console.log(result);

if (x) {
} else if (y) {
} else {
}

var _name = "atilla";
if (_name === "atilla") {
  // do something
} else if (_name === "mohammad") {
  // do something else
} else if (_name === "ahmad") {
  // do another thing
} else {
  // do the default task
}



 const twitter_users = [{
    "user": "amkissell0n"
}, {
    "user": "eroseblade1"
}, {
    "user": "llevy2"
}, {
    "user": "fsarath3"
}, {
    "user": "dcarss4"
}, {
    "user": "chilldrup5"
}, {
    "user": "absparry6n"
}, {
    "user": "hbearne7"
}, {
    "user": "gmaccrie8"
}, {
    "user": "aacurteis9n"
}]

twitter_users.map(function(item){
    item.user.toLowerCase().trim().startsWith('a') && item.user.toLowerCase().trim().endsWith('n') ? console.log(item.user) : null
    // Also like this ! =>  item.user.toLowerCase().trim()[0] == "a" && item.user.toLowerCase().trim()[item.user.length-1] == "n" ? console.log(item.user) : null  
})

// find person who is employee
var persons = [
  {
    username: "employee-tbuy0",
  },
  {
    username: "hupham1",
  },
  {
    username: "ugottelier2",
  },
  {
    username: "employee-lbrager3",
  },
  {
    username: "laugustin4",
  },
  {
    username: "psagerson5",
  },
  {
    username: "employee-lgregoletti6",
  },
  {
    username: "jgiovanazzi7",
  },
  {
    username: "employee-tstefi8",
  },
  {
    username: "dbleby9",
  },
];

let container = [];
persons.forEach(function (singleperson) {
  if (singleperson.username.includes("employee")) {
    container.push(singleperson.username);
  }
});

console.log(container);