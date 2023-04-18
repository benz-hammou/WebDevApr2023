// let PromiseUsers1 = new Promise((resolve,reject)=>{
//     resolve([1,2,3])
// })

// let PromiseUsers2 = new Promise((resolve,reject)=>{
//     resolve([4,5,6])
// })

// /*
// site1.com
// site2.com
// site3.com

// let PromiseSite1 = 
// let PromiseSite2 = 
// let PRomiseSite3

// Promise.all([PromiseSite1,PromiseSite2,PromiseSite3])
// .then(allnewsDataFrom3Sites=>{
//     console.log(allnewsDataFrom3Sites)
// })

// */

// // PromiseUsers1.then(data=>{
// //     console.log(data)
// // })

// // PromiseUsers2.then(data=>{
// //     console.log(data)
// // })

// let GetResults = Promise.all([PromiseUsers1,PromiseUsers2]);
// // [1,2,3,4,5,6]
// GetResults.then(allData=>{
//     console.log(allData)
// })

let website = 'hln.be' // offline

let PromiseMe = new Promise((resolve, reject) => {
    // return 'hello world'
    // resolve('hello world')
    // fetch('hlb.be')
    try {
        resolve('news data')
    } catch (error) {
        reject('hellooooooo something gone wrong')
    }
})

// PromiseMe
// .then(response=>{
//     console.log(response)
// })
// .catch(err=>console.log(err))

// PromiseMe.then(function(data){
//     console.log(data)
// })


function GetNewsData(site) {
    return new Promise((resolve, reject) => {

        if (site !== null && site !== '') {
            resolve(site)
        } else {
            reject('hello')
        }

    })
}

GetNewsData('google.com')
    .then(news => {
        return news.toUpperCase()
    })
    .then(news => {
        return news.split("")
    })
    .then(news=>console.log(news))
    .catch(err => console.log(err))
    .finally(() => {
        console.log('Done')

    })