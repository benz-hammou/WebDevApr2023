import { Container } from 'react-bootstrap'
import { BsCardChecklist } from 'react-icons/bs'
import { FcTodoList, FcSearch } from 'react-icons/fc'
import AddTodo from "./components/AddTodo"
import ListTodo from "./components/ListTodo"
import MyCustomBtn from './components/button'
import { useEffect, useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3001/todos')
    .then(res=>res.json())
    .then(data=>{
      setTodos(data)
    })
  },[])

  return (
    <Container>
      {/* <MyCustomBtn color="danger" value="Add Todo"/>
      <MyCustomBtn color="danger" value="Delete Todo"/> */}

      <div className='text-dark px-3 py-4 todo-body'>
        <h1 className="lead fw-bold"><FcTodoList />Todo Application</h1>
        <AddTodo todoState={{ todos, setTodos }} inputState={{ input, setInput }} />

        <hr className="text-dark" />
        {console.log(input)}

        <div className="text-dark px-3 py-4 todo-body">
          <h5 className="lead fw-bold"><BsCardChecklist /> Todos</h5>
        </div>
        <ListTodo todos={todos} />

        {/*  <div id="div1">
        <h1>Div1</h1>
      </div>
      <div id="div2">
        <h1>Div1</h1>
      </div>
      <div id="div3">
        <h1>Div1</h1>
      </div> */}
      </div>
    </Container>
  )
}

export default App