import { useState } from "react"
import { Link } from "react-router-dom"

const NavMenu = () => {
    const [menu, setMenu] = useState({
        menu1: false,
        menu2: false,
        menu3: false
    })
    
    return (
        <div>
            <ul>
                <li><Link to={'/todo'} onClick={() => setMenu({ menu1: true, menu2: false, menu3: false })} className={`filter ${menu.menu1 ? 'active text-succes' : ''}`} data-filter=".menu-restaurant">Todo</Link></li>
                <li><Link to={'/breakfast'} onClick={() => setMenu({ menu1: false, menu2: true, menu3: false })} className={`filter ${menu.menu2 ? 'active' : ''}`} data-filter=".breakfast">Breakfast</Link></li>
                <li><Link to={'/lunch'} onClick={() => setMenu({ menu1: false, menu2: false, menu3: true })} className={`filter ${menu.menu3 ? 'active' : ''}`} data-filter=".lunch">Lunch</Link></li>
            </ul>
        </div>
    )
}

export default NavMenu