// function Calculator(operator,n1,n2){
//     return eval(n1+operator+n2)
// }

// console.log(Calculator('*',10,5)) // 10 * 5

// function Calc(n1,n2){
//     return n1+n2
// }

// console.log(Calc(5,5))

const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operator = document.getElementById('operator')
const button = document.getElementById('calc');

function Calculator(operator,n1,n2){
    return eval(n1+operator+n2)
    /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
    Warning: Executing JavaScript from a string is an enormous security risk.
    It is far too easy for a bad actor to run arbitrary code when you use eval().

    */
}

button.addEventListener('click',function(event){
    event.preventDefault()
    // math tasks
    console.log('hello clickkkkkk event')
    let result = Calculator(operator.value,number1.value,number2.value)
    console.log(number1.value,number2.value,operator.value)
    console.log(result)
    
})