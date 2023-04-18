import { MdDeleteSweep } from 'react-icons/md'
import { FcSearch } from 'react-icons/fc'
import { Button, Form, InputGroup, ListGroup } from "react-bootstrap"

const ListTodo = ({ todos }) => {
    return (

        <>
            <InputGroup size="lg">
                <InputGroup.Text><FcSearch className="h1" /></InputGroup.Text>
                <Form.Control placeholder="Search a todo" />
            </InputGroup>
            <hr />
            <ListGroup>

                {todos.map((item, index) => (
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <p className="h6">{item.todo}</p>
                        <MdDeleteSweep className="h2" />
                    </ListGroup.Item>
                ))}

            </ListGroup>
            <div className="d-flex flex-row-reverse">
                <Button variant="danger" className="my-2">Clear Todos</Button>
            </div>
        </>
    )
}

export default ListTodo