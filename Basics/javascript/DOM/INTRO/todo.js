// Find parentElement<dom prop>

const DeleteItem = document.querySelector('.delete-item');

// console.log(DeleteItem)
// console.log(DeleteItem.parentElement)
// console.log(DeleteItem.parentElement.parentElement)
// console.log(DeleteItem.parentElement.parentElement.parentElement)

// document.body.remove()


// DeleteItem.remove()

const ListOfTodos = document.querySelector('.list-group');

// console.log(ListOfTodos.children.length)

// console.log(document.body.children)

// console.log([1,2,3].length)
// while(ListOfTodos.children.length>0){
//     ListOfTodos.children[0].remove()
// }

console.log(ListOfTodos.firstElementChild)
console.log(ListOfTodos.lastElementChild)
// console.log(ListOfTodos.lastChild.remove())
// ListOfTodos.lastElementChild.remove()

const addTodo1 = document.querySelector('.btn.btn-danger')

// querySelector or querySelectorAll (accepts css selector)


const [addTodo, deleteAllTodos] = document.querySelectorAll('button')

const FirstForm = document.querySelector('.card-body > #todo-form')

// cloneNode() 
// console.log(FirstForm)
// find list-group-item (li tagname)
const TodoItem = document.querySelector(".list-group-item")
// clone of list-group-item (li)
const clonedOfTodoItem1 = TodoItem.cloneNode(true)
const clonedOfTodoItem2 = TodoItem.cloneNode()
console.log(clonedOfTodoItem1.hasChildNodes(),
    clonedOfTodoItem2.hasChildNodes())
//clonedOfTodoItem1.childNodes[0].textContent = 'Javascript';
clonedOfTodoItem1.firstChild.textContent = "Javascript";

console.log(clonedOfTodoItem1.childNodes[0].textContent)
ListOfTodos.appendChild(clonedOfTodoItem1)
// ListOfTodos.appendChild(clonedOfTodoItem2)

// DOMString
let parser = new DOMParser();
let RealNodeObject = parser.parseFromString(`<li class="list-group-item d-flex justify-content-between">
Reactjs
<a href = "#" class ="delete-item">
    <i class = "fa fa-remove"></i>
</a>
</li>`, 'text/html')

// alternative way of parse domstring
// createContextualFragment
let parser1 = document.createRange().createContextualFragment(`<li class="list-group-item d-flex justify-content-between">
nodejs
<a href = "#" class ="delete-item">
    <i class = "fa fa-remove"></i>
</a>
</li>`)

// console.log(RealNodeObject.body.firstChild)
// console.log(parser1)

console.log(parser)

// append()

// ListOfTodos.append(RealNodeObject.body.firstChild)
// ListOfTodos.append(parser1)
ListOfTodos.append(RealNodeObject.body.firstChild, parser1)

// .style property

ListOfTodos.lastElementChild.style.backgroundColor = "tomato";
ListOfTodos.lastElementChild.style.color = "white"

// font size
ListOfTodos.lastElementChild.style.fontSize
    = "3em"
console.log(ListOfTodos.lastElementChild.style)



ListOfTodos.childNodes[ListOfTodos.childNodes.length - 2].style.backgroundColor = "cyan";

console.log(ListOfTodos.childNodes.length - 2)

// background-color: salmon; color:white;font-size: 3em;
ListOfTodos.childNodes[ListOfTodos.childNodes.length - 3].setAttribute('style', 'background-color: salmon; color:white;font-size: 3em;')

console.log(ListOfTodos.lastElementChild)

// setTimeout()

// usage: setTimeout(callback,ms_time)
// 1 second is 1000 miliseconds
// setTimeout(function(){

// })
// setTimeout(()=>{
//     console.log('hello world')
//    // ListOfTodos.firstChild.remove()
//     ListOfTodos.lastElementChild.remove();
//    // ListOfTodos.lastChild.remove()
// },5000)


// usage: setInterval(callback,ms_time)
/* const RemoveOneByOne = setInterval(()=>{
    console.log('this is interval')
    if(ListOfTodos.children.length>0){
        ListOfTodos.firstChild.remove()
    }else{
        // stop interval
        clearInterval(RemoveOneByOne)
    }

},2000) */


// addEventListener() => to create html event ('click')
// addEventListener('click', function)
// event => object

ListOfTodos.addEventListener('click', (event) => {
    console.log('hello world', event.target.classList);
    // event.target.remove()
    console.log(event.target.parentElement.parentElement);
    const isRemove = event.target.classList.contains('fa-remove')
    if (isRemove) {
        event.target.parentElement.parentElement.remove()
    }
})