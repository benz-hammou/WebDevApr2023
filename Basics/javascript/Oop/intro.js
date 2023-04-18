// function Application(){
// const globalObject = {name:'Bilal'} // example of this keyword
// }
// Ecmascript v5
// function Application(name){
//     this.name = name
//     globalObject.name = name
// }

// let app1 = new Application()

// // Ecmascript v6
class Application{
    constructor(name){
        // this.ThisisNewProperty= function(){
        //     console.log('hello constructor')
        // }
        this.username = name
    }

    // regular
    getStudent(){
        console.log('This is an example method')
    }
    // arrow 
    TestArrowFunction = ()=>{
        console.log('This is an example arrow method')
    }


}

let app = new Application("Bilal") // object
console.log(app)
app.getStudent()
app.TestArrowFunction()
// console.log(typeof app)
