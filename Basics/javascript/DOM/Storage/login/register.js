const [username,password] = document.querySelectorAll('input')

const registerBtn = document.querySelectorAll('a')[1]
const EyeIcon = document.querySelector('.fa-eye-low-vision')

const GetSessionStorageUsers = () => JSON.parse(sessionStorage.getItem('user'))

// event
registerBtn.addEventListener('click',()=>{
    // create user object here
    const NewUser = {
        "username":username.value,
        "password":password.value
    }

    const tempSessionStorageData = GetSessionStorageUsers()

    // tempSessionStorageData.push({title:"laptop"})
    
    console.log(tempSessionStorageData);
    // console.log(NewUser);
    if(username.value !=='' && password.value !==''){
        //     const ConvertObjToString = JSON.stringify(NewUser);
        tempSessionStorageData.push(NewUser)
        //     console.log(ConvertObjToString)
        // sessionStorage.setItem('user',ConvertObjToString)
        console.log(tempSessionStorageData);
        sessionStorage.setItem('user',JSON.stringify(tempSessionStorageData))

    }
})

EyeIcon.addEventListener('click',(e)=>{
    console.log(e.target)
    let typeOfPasswordInput = password.getAttribute('type') == 'password'? 'text':'password'
    console.log(typeOfPasswordInput)
    password.setAttribute('type',typeOfPasswordInput)

    if(typeOfPasswordInput =='text'){
        EyeIcon.classList.remove('fa-eye-low-vision')
        EyeIcon.classList.add('fa-eye-slash')
    }else{
        EyeIcon.classList.remove('fa-eye-slash')
        EyeIcon.classList.add('fa-eye-low-vision')
    }
    // closed eye: fa-solid fa-eye-slash
    // default: fa-solid fa-eye-low-vision


    
})


document.addEventListener('DOMContentLoaded',()=>{
        let users = GetSessionStorageUsers()
        console.log(users); // null sessionStorageData is empty
        if(users === null){
            sessionStorage.setItem('user','[]')
        }
    })
// Not finish yet 