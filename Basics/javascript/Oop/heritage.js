// Inheritance in oop

// Father class template
class Father{
    constructor(fathername){
        this.fathername = fathername
        this.money= "$1000"
    }

    FatherMessage(){
        console.log('All i have is yours')
    }

    FatherGift(){
        console.log('This is father gift')
    }
}

// Child class template
class Child extends Father{
    constructor(fathername,childname){
        super(fathername)
        this.childname=childname
    }
    getAllInherits(){
        super.FatherMessage()
    }
}

class Child1 extends Father{
    constructor(fathername){
        super(fathername)
    }

    GetFatherMessage(){
        super.FatherMessage()
    }
}

let app = new Child("Jimmy","Elon");
 app.getAllInherits()
 console.log(app)
 let childapp = new Child1('MichaelJordan')
console.log(childapp)
 childapp.GetFatherMessage();
/*
Step 1 > use `extends` keyword to Parent class
Step 2 > use super() to get inherits
*/