const obj1 = {
    id:1
}
// const isAdmin = false
const isAdmin = new Boolean(false)
const Age = new Number(10)
console.log(typeof isAdmin, isAdmin);
console.log(Age, typeof Age.valueOf());

/* const obj3 = {}
const obj2 = new Object({domain:'google.com', password:"admin123", email:"root@root.com"})

obj2.username="hln.bz"
console.log(obj2);

const obj3 = new Object({username:"admin",})

obj3.username="admin"
obj3.password="admin123"
obj3.email="root@root.com" */


// repo

const obj2 = new Object({domain:'google.com'})
// OOP 
// Object constructor
obj2.username="hln.be"
// console.log(obj2)
const obj3 = new Object({username:'admin',password:'admin123',email:'root@root.com'})
// obj3.username="admin"
// obj3.password="admin123"
// obj3.email="root@root.com"

// console.log(obj3);

for (const key in obj3) {
   console.log(obj3[key]);
}

// repo init 


// const PropsNames = ['username','password','email']; // 3- 0,1,2
// Array list and Objects are not same!
// Array list contains argsList // 1,2,3,4 or "a","b","c"
// objects works with key and value principle {key:value,key:value}

// console.log(obj3)

// for(let key in obj3){
//     console.log(obj3[key])
// }

// for (let x=0; x)

// console.log(Object.keys(obj3), Object.entries(obj3))

// Keys 
const obj3Keys = Object.keys(obj3) // ArrayList
// for(x=0;x<obj3Keys.length;x++){
//     // console.log(x) // not iterable
//     // console.log(obj3Keys[x])
//     let PropertyName = obj3Keys[x]; // propertyname for each data
//     console.log(obj3[PropertyName])
// }



//console.log(obj3.length,obj3Keys.length) 

// const x = {
//     "csharp",
//     "python",
//     "cplusplus"
// } // SyntaxError - Incorrect usage


// const y = {
//     prop1:"csharp",
//     prop2:"python",
//     prop3:"cplusplus"
// } // Correct usage




// console.log(Object.values(obj3))
let objectArray = Object.values(obj3);
// {username:'admin',password:'admin123',email:'root@root.com'}
// [ 'admin', 'admin123', 'root@root.com' ]

// for(let index=0;index<objectArray.length;index++){
//     console.log(objectArray[index])
// }

const tools = {
    message: 'hello world',
    display:() => {
        return 'this is a function'
    },
    keys:() => {
        return 'this is object method'
    },
    length:function(){
        return this.message.length
        // tools === this
    },
    coffe: "this is value",
    myFunction:() => {
        console.log('this is a function');
    },
    entries:() => {
        return "my data"
    }
}
console.log(Object);
console.log(tools.length());
console.log(tools.keys());
console.log(tools);

const students = {
    username:'joedalton',
    prop1:function(){
        console.log(this);
    }
}
students.prop1()
console.log(students);

