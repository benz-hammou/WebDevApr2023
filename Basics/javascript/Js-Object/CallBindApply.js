// call

const obj1 = {
    number1: 3,
    number2: 4
}
const obj2 = {
    number1: 5,
    number2: 6
}
const obj3 = {
    a: 7,
    b: 8
}


function GetSumOfNumbers(){
    // console.log(this.number1 + this.number2)
    // console.log(this.number1,this)
    return this
    // const getProps = Object.keys(this)
    // console.log(Object.keys(this)) 
    // console.log(getProps)
}

// GetSumOfNumbers.call(obj3)

// console.log(undefined + undefined)

// bind 
// const getBindMethodResult = GetSumOfNumbers.bind(4,5) // no args list
// const getBindMethodResult = GetSumOfNumbers.bind([4,5,6]) // working
// const getBindMethodResult = GetSumOfNumbers.bind({a:1,b:2,c:3})
// console.log(getBindMethodResult())

// const student = {
//     fullname:'Michael Jackson',
//     PrintInfo:function(){
//         return this.fullname
//     }
// }

// const result = student.PrintInfo.bind({fullname:'John Wick'})
// console.log(result())


// const student = {
//     fullname:'Neo',
//     PrintInfo:()=>this.fullname
// }

function PrintInfo(){
    return this.fullname
}

const result = PrintInfo.bind({fullname:'Trinity'});

// Arrow function .bind()
// .bind()

console.log(result())