function printMyName() {
    // code here
    console.log('hello function');
}
function printMyName(name) {
    // function parameter
    console.log(name);
}


printMyName() // call back funtion
printMyName('michael') // call back funtion
printMyName('Ara') // call back funtion

function netoSalary(bruto, tax) {
    var calcul = bruto/100*tax
    var neto = bruto - calcul
    console.log(neto);
}
netoSalary(3000, 40)



function PrintName(name){
    let fullname = name
    console.log(fullname)
}

PrintName('Nina')


function GetSumOfNumbers(n1,n2){
    var result = n1+n2;
    console.log(`Sum of these 2 number is ${result}`)
}

GetSumOfNumbers(5) 

function ServeNumber1(){
    return 1
}

function ServeNumber2(){
    return 3
}

const result = ServeNumber1() + ServeNumber2()
console.log(result)

return

function NettoSalaryCalculator(bruto,tax){
    const taxAmount = (bruto/100)*tax;
    console.log(bruto-taxAmount,"asdasdasdasd")
    return bruto-taxAmount // netto amount
}

const nettoResult = NettoSalaryCalculator(3000,40)
console.log(nettoResult)

function ThirdFunction(age){
    return age
}

function SecondFunction(FunctionValue){
    return `Age is ${FunctionValue} returned by SecondFunction`
}

function ParentFunction(age){
    return SecondFunction(ThirdFunction(30))
}

console.log(ParentFunction(30))



function getSumOfNumbers(n1, n2) {
    var result = n1+n2
    console.log(`The result is ${result}`);
}
getSumOfNumbers(2,2)

const output = document.getElementById('output')
output.innerHTML='<h1>grhhry</h1>'
const add = () => {
    return 'salam'
}
console.log(add());

function AddMessageInToDocument(message, message2) {
    output.innerHTML+=`<h1>${message}</h1>`
    output.innerHTML+=`<h1>${message2}</h1>`
}
AddMessageInToDocument('Dudde', "Buddy")

let users= []
function CreateAccount(username, passworld, email, role) {
    const obj = {
        user_name:username,
        pass: passworld,
        mail: email,
        App_Role: role
    }
    return users.push(obj)
}
CreateAccount('root', '54+854dsdd', 'root@microsoft.com', 'sudo')
CreateAccount('admin', 'zsfeggdd7', 'live@microsoft.com', 'mana')
CreateAccount('mohamed', 'kjijxi7741', 'manu@microsoft.com', 'manu')

console.log(users);

let _users = []

function SendAndSaveObj(obj) {
    _users.push(obj)
    console.log(_users);
}
function MakeAccount(obj) {
    //this will take user obj datat
    return SendAndSaveObj(obj)
}

MakeAccount({
    user: "root"
})

// Assignment - contacts app
let dataBase = []
function contactsApp(name, phone, email) {
    const obj = {
        name: name,
        phone: phone,
        email: email
    }
    return dataBase.push(obj)
}
contactsApp('Mohamed', '54+5+5+84', 'dbhbvh@live.com')

console.log(dataBase);

