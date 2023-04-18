class TodoApplication{
    constructor(){
        this.database = [] //This is examples of database
    }
    displayTodos(){
        return this.database
    }

    addTodo(todo){
        return this.database.push(todo)
    }

    removeTodo(todo){
        // splice >> remove a specific item
        // findIndex >> Find array position number of an item in array list
       let TodoIndex = this.database.findIndex(title=>title===todo);
       console.log(TodoIndex) // -1 >> todo is not in array list (not found)
       return this.database.splice(TodoIndex,1)
    }

     // Static method
     static GetCoffee(){
        console.log('I turn coffee into code')
    }

}

let app = new TodoApplication()

app.addTodo('learn javascript');
app.addTodo('learn node.js')
app.removeTodo('learn javascript');

TodoApplication.GetCoffee();

console.log("Database: ",app.displayTodos())


