const express = require('express');
const app = express();

let PromiseMe = username=>{
    return new Promise((resolve,reject)=>{
            // resolve(username)
            if(username.includes(0)){
                reject('Number can not be included in username')
            }else{
                resolve(username)
            }
    })
}


app.get('/',(req,res)=>{
    let username = req.query.username

    PromiseMe(username)
    .then(result=>{
        res.json({
            id:1,
            user:result
        })
    })
    .catch(error=>{
        res.send(error)
    })

})

app.listen(3000,()=>{
    console.log('listeniing')
})