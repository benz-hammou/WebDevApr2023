// Todolist Application exercise

// 1. Create a new todo list
// 2. Add a new todo item
// 3. Remove a todo item

// What is a todo list?
// A todo list is a list of tasks that need to be completed.

// What is a todo item?
// A todo item is a single task that needs to be completed.

// What you require to complete this exercise: 

// 1 . Required array, string and number methods and properties: 
// - push
// - splice
// - findIndex
// - toLowerCase
// - trim
// - length
// - includes
// - indexOf
// - slice

// Explain what you'll do in each step

// 1. Create a new todo list
// - Create a new array
// - Create a new object
// - Add the object to the array

// 2. Add a new todo item
// - Create a new object
// - Add the object to the array

// 3. Remove a todo item
// - Find the index of the object in the array
// - Remove the object from the array

// 4. Edit a todo item
// - Find the index of the object in the array
// - Update the object in the array

// 5. Delete a todo list
// - Find the index of the object in the array
// - Remove the object from the array

// 6. Display all todo lists
// - Loop through the array
// - Display the object

// 7. Display a todo list
// - Find the index of the object in the array
// - Display the object






let globalTodo = []


// Add todo
const addTodo = todo => {
    return globalTodo.push(todo)
}
addTodo({
    todo: "hello world",
    completed: true,
})
addTodo({
    todo: "hello dudde",
    completed: false,
})
addTodo({
    todo: "Salam Aleikom",
    completed: true
})


// remove todo
const removeTodo = todo => {
    const todoIndex = globalTodo.findIndex(index => index.todo === todo)
    return globalTodo.splice(todoIndex, 1)
}
removeTodo("hello dudde")


// edit todo
const editTodo = (todo, value, completed) => {
    const todoIndex = globalTodo.findIndex(index => index.todo === todo)
    completed !== null && completed !== "" ? globalTodo[todoIndex].completed = completed : null
    value !== null && value !== "" ? globalTodo[todoIndex].todo = value : null
    return globalTodo[todoIndex];
}
editTodo("hello world", "Hello Man", false)


// add another todos
addTodo({
    todo: "Mandalorian",
    completed: true,
})
addTodo({
    todo: "Willow Night",
    completed: false,
})
addTodo({
    todo: "Windows XP",
    completed: true
})


// display todos
const displayTodos = () => {
    globalTodo.forEach(item => {
        console.log(`Title: ${item.todo}\nCompleted: ${item.completed}\n------------------`)
    })
}
displayTodos()


// edit another todo
editTodo('Mandalorian', null,false)


// find and display the todos 
const displayTodo = isCompleted => {
    let findTodos = globalTodo.filter(item => item.completed == isCompleted)
    return findTodos
}
console.log(displayTodo(false)); 