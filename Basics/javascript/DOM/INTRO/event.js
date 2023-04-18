const TodoInput = document.querySelector('#todo')
const AddTodoBtn = document.querySelector('.btn-danger')
const listGroup = document.querySelector('.list-group')
const deleteAllBtn = document.querySelector('#clear-todos')

function MakeTemplate(todo) {
    const parse = document.createRange().createContextualFragment(`<li class="list-group-item d-flex justify-content-between">
${todo}
<a href = "#" class ="delete-item">
<i class = "fa fa-remove"></i>
</a>
</li>`)
    listGroup.appendChild(parse)
}

AddTodoBtn.addEventListener('click', function (event) {
    console.log('hello world')
    MakeTemplate(TodoInput.value)
    TodoInput.value = ""
    event.preventDefault()
    return
})

TodoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('hello joe!');
        MakeTemplate(TodoInput.value)
        TodoInput.value = ""
        event.preventDefault()
    }
})

listGroup.addEventListener('click', function (event) {
    console.log('rmeove mfk')
    if (event.target.classList.contains("fa-remove")) {
        event.target.parentElement.parentElement.remove()
    }
})

deleteAllBtn.addEventListener('click', () => {
    Array.from(listGroup.children).map(li => li.remove())
}) 




// puth attlas's code 






// dblclick
AddTodoBtn.addEventListener('dblclick', (e) =>{
    console.log('hello dude !')
    e.preventDefault
})

//mousedown
AddTodoBtn.addEventListener('mousedown', (e) =>{
    console.log('hello world !')
    console.log(e)
})
