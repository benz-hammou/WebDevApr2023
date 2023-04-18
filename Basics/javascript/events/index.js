const Output = document.getElementById('output')
const Username = document.getElementById('username')
const myBtn = document.getElementById('myBtn')
const myImg = document.getElementById('myImage')

function ClickHandler() {
    console.log('Event Handler');
    Output.innerText=Username.value
}

function ChangeHandler() {
    console.log('Change Handler');
    Output.innerText=Username.value
}

function MuseOverHandler() {
    console.log('dfrjhutk');
    myBtn.className = "btn btn-primary btn-lg"
    myImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeey4S6YDs45HXMaz71W_GKrHKwoHNJYb3DFeGDDQHbevgcYkDbGguJwxh69zjOCl0m8c&usqp=CAU"
}

function MuseOutHandler() {
    console.log('dfrjhutk');
    myBtn.className = "btn btn-danger btn-lg"
    myImg.src="https://nu.cw/wp-content/uploads/2021/10/oud-president-clinton-mag-waarschijnlijk-zondag-ziekenhuis-verlaten.jpg"
}

function onLoadEvent() {
    console.log("On loading !!! "); 
}
