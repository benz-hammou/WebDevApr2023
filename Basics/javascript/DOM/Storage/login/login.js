const [username, password] = document.querySelectorAll('input')
const [login] = document.querySelectorAll('a')
const Loading = document.querySelector('.loading')

login.addEventListener('click', (e) => {
    const userObj = {
        username: username.value,
        password: password.value
    }
    console.log(userObj)
    // e.preventDefault()

    // user data from db
    const userDB = JSON.parse(sessionStorage.getItem('user'))

    let isUserFound = userDB.find(user=>user.username === userObj.username && user.password === userObj.password) 

    console.log(isUserFound);

    Loading.innerText = "... please wait!"

    setTimeout(() => {
        if (isUserFound) {
            alert('Welcome user, You are Logged in !')
            Loading.innerText = "Logged in!"
            Loading.classList.remove('text-light')
            Loading.classList.add('text-success')
            setTimeout(() => {
                Loading.classList.remove('text-success')
                Loading.classList.add('text-light')
            }, 3000)
        } else {
            alert('User not found ! \n ------------------\nUsername/Password is incorrect')
            Loading.innerText = "User is not logged in!"
            Loading.classList.remove('text-light')
            Loading.classList.add('text-danger')
            setTimeout(() => {
                window.location.href = 'http://127.0.0.1:5500/Basics/javascript/DOM/Storage/login/register.html'
            }, 3000)
        }
    }, 3000)

    // console.log(userDB);
    e.preventDefault()
})
