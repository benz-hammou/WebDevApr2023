/* http://testphp.vulnweb.com/login.php  */

/* 
npmjs.com
command prompt
> npm
press enter
https://insomnia.rest/download
npm i json-server -g 
sudo npm i json-server -g
http://localhost:3000/database/
endpoint > database
http://localhost:3000/database/2 > "/2" > url parameter 
"/database" > url param /param1/param2/param3
"/database?title=value" url query
 */

// use fetch to retrive data from internet(url)
fetch('http://localhost:3000/database')
.then(response=>{
    return response.json()
})
.then(data=>{
    data.forEach(todo => {
        console.log(todo);
    })
})

/* let promiseme = new Promise((resolve, reject)=>{
    resolve('hello world')
})
promiseme.then(data=>{
    console.log(data);
}) */