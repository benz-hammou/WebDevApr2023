// Ecmascript 5

/* function Keeper1(callback) {
    console.log('Keeper1');
    return callback()
}
function Keeper2(callback) {
    console.log('Keeper2');
    return callback()
}

function GetMyFunction(callback) {
    callback() // this param need to be a function
}

GetMyFunction(function() {
    console.log('Hello');
})


let company = ""

// one of the tasks
const CreateCompanyName = (data, callback) => {
    data = "Linux" // changed value to coffee
    return callback(data, callback)
}

const SplitUpLetters = str => {
    console.log(str.split(''));
}

CreateCompanyName('coffee', (companyName) => {
    return SplitUpLetters(companyName)
})

const A = data => {
    data = '123'
    console.log(data);
}

A("") */

// Ecmascript v6

/* async function Keeper1(name) {
    // await
    const getName = await name
    return getName
}
Keeper1('Coffee')
.then(data => {
    let newValue = data.toUpperCase()
    return newValue
})
.then(data => {
    console.log(data);
})
Keeper1('Bilal')
.then(a=>a.toUpperCase())
.then(b=>b.split(''))
.then(b=>{
    console.log(b);
})
 */

// in arrow function way

const PrintWelcomeMessage = async msg => {
    let data = await msg // await for ms data
    return data
}

// Forcing error
/* const PrintWelcomeMessage = async msg => {
    try {
        let data = await msg // await for ms data
        throw Error() // forcing catch error
        return data
    } catch (error) {
        console.log(error, "something is wrong !!!!");
    }
} */

// Or change to callback function
const strToUpperCase = str => str.toUpperCase() // ????

PrintWelcomeMessage('hello ')
.then(str =>{
    let newValue = str+= 'dude'
    return newValue
})
/* .then(welcome =>{
    let BigLetters = welcome.toUpperCase()
    console.log(BigLetters);
}) */
.then(strToUpperCase) // ????
.catch(error=>console.error(error))
.finally(()=> {
    console.log('I am Done with that shite !!!');
})


