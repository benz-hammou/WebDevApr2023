const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todolist')

// todoList.innerHTML='dkjhxwnbvjhsdblhbs'
// todoInput.value='dk656415656666666666666666666blhbs'

/* this.todos = []

function TodoApplication(title) {
    this.todotitle = title

    this.addTodo = function () {
        return this.todos.push(this.todotitle)
    }
}

// create-init an object using TodoApplication constructor
const app = new TodoApplication('react.js')
console.log(app);
console.log(todos); */

function TodoApplication() {
    this.todos = []

    this.addTodo = function (title) {
        return this.todos.push({ title })
    }
    this.displayTodos = function () {
        todoList.innerHTML = ""
        todoInput.value !== '' ? this.todos.forEach(todo => {
            console.log(todo);
            todoList.innerHTML += `<li class="list-group-item">${todo.title}</li>`
        }) : alert('Please fill the input field !!!')
    }
    this.ClickHandler = function () {
        console.log('hello function')
        console.log(todoInput.value)
        this.addTodo(todoInput.value) // stap 1 => insert in
        this.displayTodos() // step2 => print them all 
        todoInput.value = "" // step3 => clean input field
    }
}
const app = new TodoApplication()
// app.addTodo('Learn JS')
// app.addTodo('Learn React')
// console.log(app.addTodo(todoInput.value));
// app.displayTodos()
todoInput.addEventListener('keydown', (e)=>{
    if(e.code === 'Enter'){
        console.log('Yooo Dude !');
        app.ClickHandler()
    }
})