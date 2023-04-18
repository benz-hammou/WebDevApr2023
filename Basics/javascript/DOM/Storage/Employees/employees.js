const addEmployeeBtn = document.querySelector('.addEmployee')
const searchEmployeeBtn = document.querySelector('.searchEmployee')
const result = document.querySelector('.result')
const fullNameInput = document.querySelector('#FullName')
const professionInput = document.querySelector('#Profession')
const genderInput = document.querySelector('#gender')
const nationalityInput = document.querySelector('#Nationality')
const adressInput = document.querySelector('#Address')
const cityInput = document.querySelector('#City')
const phoneInput = document.querySelector('#Phone')
const emailInput = document.querySelector('#Email')
const allInput = document.querySelectorAll('input')
let idValue = 2


const DB = ()=>{
    let data = JSON.parse(localStorage.getItem('employees'))
    if(data){
        return data
    }else{
        localStorage.setItem('employees','[]')
    }
}

addEmployeeBtn.addEventListener('click',(e)=>{
    let db = DB(); // []

    const obj = {
        id:idValue++,
        fullname:fullNameInput.value,
        profession:professionInput.value,
        gender:genderInput.value,
        nationality:nationalityInput.value,
        address:adressInput.value,
        city:cityInput.value,
        phone:phoneInput.value,
        email:emailInput.value
    }
    
    db.push(obj) // save data here
    localStorage.setItem('employees',JSON.stringify(db)) // save array and objects in storage
    console.log(db)
    
    result.innerHTML +=`<tr>
    <td>${idValue++}</td>
    <td>${fullNameInput.value}</td>
    <td>${professionInput.value}</td>
    <td>${genderInput.value}</td>
    <td>${nationalityInput.value}</td>
    <td>${adressInput.value}, ${cityInput.value}</td>
    <td>${phoneInput.value}</td>
    <td>${emailInput.vlue}</td>
    </tr>
    `
    e.preventDefault()
    allInput.forEach(input=>input.value="")
    

    /* let storageData = localStorage.getItem(obj)
    result.innerText = storageData */

    /* for (let i = 0; i < obj.length; i++){
        let value = localStorage.getItem(i);
        result.innerText = value
        console.log(value);
        } */
})