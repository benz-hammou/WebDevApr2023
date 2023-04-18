// sessionStorage & localStorage
// console.log(sessionStorage);
// console.log(typeof sessionStorage);

// methods

// set (create new storage data)
sessionStorage.setItem('secret_key', 'hello wordl')
sessionStorage.setItem('secret_key', 123456)
sessionStorage.setItem('secret_key', true)
sessionStorage.setItem('secret_key', undefined)
sessionStorage.setItem('coffee', 'hello world')
sessionStorage.setItem('coffee', [1,2,3,4,5])
sessionStorage.setItem('coffee', '[1,2,3,4,5]')
sessionStorage.setItem('user1', {id:1})
sessionStorage.setItem('user1', '[{"id":1}]') // json data

// getItem (read sessionstorage data)
let result

result = sessionStorage.getItem('secret_key')
result = sessionStorage.getItem('coffee')
result = sessionStorage.getItem('user1')

// removeItem()
result = sessionStorage.removeItem('user1')

// cookie
document.cookie = `expires=${new Date().toUTCString()}`
document.cookie = `isLoggedIn=true`
document.cookie = `isAdmin=${true}`

console.log(result, typeof result, JSON.parse(result));