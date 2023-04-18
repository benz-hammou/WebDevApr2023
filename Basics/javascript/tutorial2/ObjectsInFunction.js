const student={
    first_name:"Jenny",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
}


const user1={
    first_name:"Michael",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
}


const user2={
    first_name:"Jackson",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
}



// function getName(){
//     return student.first_name
// }

// function getStudentEmail(){
//     return student.email
// }

// function getStudentPhoneNumber(){
//     return student.phone
// }

// function setStudentName(newName){
//     student.first_name = newName // update student name
//     return student
// }


// function getSelectedStudentInfo(){
//     return {
//         fullname : `${student.first_name} ${student.last_name}`,
//         age: student.age
//     }
// }


// console.log(getName())
// console.log(getStudentEmail());
// console.log(getStudentPhoneNumber());
// setStudentName('Michael') // update object property first_name
// console.log(getName()) // display first_name property out again

// console.log(getSelectedStudentInfo());

// function addNewValue(property_name,value){
//    // student['test'] = 'test valueeeee'
//     return student[property_name] = value
// }

// addNewValue('teenage',false)
// addNewValue('rich',false)
// addNewValue('coffeedrinker',true)
// console.log(student)


// function getStudentName(x){
//     return x.first_name
// }

// console.log(getStudentName(user1));


const users = [{
    first_name:"Jackson",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
},{
    first_name:"John",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
},{
    first_name:"Jenny",
    last_name:"Doe",
    age:30,
    email:"jenny@microsoft.com",
    role:"Developer",
    phone:"04884445544",
    isValid:true
}]

function getUserName(obj,user_id){
    return obj[user_id].first_name
} 

console.log(getUserName(users,2)); // users[2].first_name


function updateFirstName(obj,user_id,newFirstName){
    return obj[user_id].first_name = newFirstName
}

updateFirstName(users,0,"Arhisa")

console.log(users[0].isValid);