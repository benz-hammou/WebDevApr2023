
let PromiseMe = username => {
    return new Promise((resolve,reject)=>{ // GO LEARN MORE !!!
        //resolve(username)
        if(username.includes(0)){
            reject('Number can not be completed whit number 0')
        }else{
            resolve(username)
        }
    })
}

PromiseMe('Admin00')
.then(data=>{
    console.log(data);
})
.catch(error=>console.error(error))