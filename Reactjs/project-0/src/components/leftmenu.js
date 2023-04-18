import { ListGroup } from "react-bootstrap";

export default function LeftMenu() {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>Project 1</ListGroup.Item>
            {
                [2,3,4,5,6,7,8,9,10].map((menu,index)=>(
                    <ListGroup.Item as="li" key={index}>Project {menu}</ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}