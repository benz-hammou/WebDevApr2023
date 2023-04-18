import { useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"

const Sidebar = () => {
    const [link, setLink] = useState({
        pro1: false,
        pro2: false,
        pro3: false
    })
    return (

        <ListGroup style={{ height: '80vh' }} as="ul">

            <ListGroup.Item as="li" onClick={() => setLink({ pro1: false, pro2: false, pro3: true })} className={`filter d-flex justify-content-center ${link.pro3 ? 'active' : ''}`}>
                <Link to={'/menu'} class="text-decoration-none text-success" >Nahur Restaurant</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li" onClick={() => setLink({ pro1: true, pro2: false, pro3: false })} className={`filter d-flex justify-content-center ${link.pro1 ? 'active' : ''}`}>
                <Link to={'/ebay'} class="text-decoration-none text-success" >E-Bay</Link>
            </ListGroup.Item>

            <ListGroup.Item as="li" onClick={() => setLink({ pro1: false, pro2: true, pro3: false })} className={`filter d-flex justify-content-center ${link.pro2 ? 'active' : ''}`}>
                <Link to={'/budget'} class="text-decoration-none text-success" >Budget Calculater</Link>
            </ListGroup.Item>

        </ListGroup>




    )
}

export default Sidebar