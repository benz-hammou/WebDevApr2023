// localStorage and methods
const [_get, save, del, update] = document.querySelectorAll('button')
const [username, keyInput] = document.querySelectorAll('input')
const output = document.querySelector('.output')

// setItem method -> create data in localstorage
localStorage.setItem('drink','coffee')

save.addEventListener('click',(e)=>{
    console.log(username.value,keyInput.value);
    localStorage.setItem(keyInput.value,username.value)

    let obj = {
        "username":username.value
    }
    
    console.log(typeof JSON.stringify(obj));
    localStorage.setItem(keyInput.value,JSON.stringify(obj))
})

//

// getItem
_get.addEventListener('click',(e)=>{
    // let Drink = localStorage.getItem('drink')
    let storageData = localStorage.getItem(keyInput.value)
    console.log(storageData);
    if(storageData === null){
        alert('Not found!')
    }
    output.innerText = storageData
})

//

// delete storage data (removeItem())
// localStorage.removeItem('drink')
del.addEventListener('click',(e)=>{
    const keyName = keyInput.value
    console.log(keyName);
    
    // Remove One item
    // localStorage.removeItem(keyName)

    // Remove All the key value
    localStorage.clear()
})

//

// .key()
// console.log(localStorage.key(1));

//

// size of localstorage
// console.log(localStorage.length);
for (let x = 0; x < localStorage.length; x++) {
    // console.log(x);
    let keyName = localStorage.key(x)
    // console.log(keyName);
    let value = localStorage.getItem(keyName)
    console.log(`key:${keyName}\nvalue:${value}}`);
    
}

//

// update storag data
update.addEventListener('click',()=>{
     // old data
    // new data
    const keyname = keyInput.value
    const newData = username.value
    //  localStorage.setItem(keyname,newData)
    const oldData = localStorage.getItem(keyname)
    console.log(oldData)

    const userObj = JSON.parse(oldData); // temp
    console.log(userObj.username)
    userObj.username=newData // new value updated 
    console.log(userObj) // new data displayed
    
    // set storage key name with new object
    localStorage.setItem(keyname,JSON.stringify(userObj))

    console.log(JSON.parse(oldData))
})

/*
step1: getobject data
step2: convert string object data to real object (json.parse())
step3: update object with new value
step4: convert updatedobject to string again (json.stringify())
step5: overwrite the data now
*/