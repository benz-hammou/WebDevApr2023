
fetch('http://localhost:3000/database')
    .then(res => res.json())
    .then(jsondata => {
        console.log(jsondata);
    })

fetch('readme.txt')
    .then(res => res.text())
    .then(textContent => {
        console.log(textContent);
    })

fetch('http://localhost:3000/database/2')
    .then(res => res.json())
    .then(jsondata => {
        console.log(jsondata, 'url param');
    })

fetch('http://localhost:3000/database/?title=javascript')
    .then(res => res.json())
    .then(jsondata => {
        console.log(jsondata, 'url query');
    })

async function GetData(id) {
    let res = await fetch('http://localhost:3000/database/' + id)
    let data = res.json()
    return data
}

const DataID = document.getElementById('data_id')
const output = document.getElementById('output')

// GET
function ClickHandler() {
    GetData(DataID.value).then(myData => {
        output.innerHTML += `<li>Title:${myData.title}<br/>Body:${myData.body}</li>`
    })
}

// POST
const newData = {
    title: "React",
    body: "JS MotherFucker ! "
}

function AddDataHandler() {
    fetch('http://localhost:3000/database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newData)
    })
        .then(data => {
            console.log(data, 'Saved');
        })
}

// DELETE
function DeleteHandler() {
    console.log('testing delete');
    fetch('http://localhost:3000/database/' + DataID.value, {
        method: 'DELETE'
    })
        .then(() => {
            console.log('It\'s deleted');
        })
}

const newObjectData = {
    title: "C#",
    body: "University fuckers !"
}
// PATCH (Update)
function UpdateHandler() {
    fetch('http://localhost:3000/database/' + DataID.value, {
        method: 'PATCH',
            headers : {
                'Content-Type': 'application/json; charset=utf-8'
            },
        body: JSON.stringify(newObjectData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'UPDATED')
        })

}