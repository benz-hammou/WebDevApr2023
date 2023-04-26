import { Button, Form, InputGroup } from "react-bootstrap"
import { IoIosAddCircle } from 'react-icons/io'

const AddTodo = ({ todoState, inputState }) => {

    const handleInput = (e) => {
        console.log(e.target.value)
        inputState.setInput(e.target.value)
    }
    const handleClick = (e) => {
        todoState.setTodos([
            ...todoState.todos, {
                todo: inputState.input
            }
        ])
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ todo: inputState.input })
        })
    }
    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Add a Todo"
                onChange={handleInput}
            />
            {console.log(todoState.todos)}
            <Button variant="primary" onClick={handleClick}>
                <IoIosAddCircle className="display-6" />
            </Button>
        </InputGroup>
    )
}

export default AddTodo