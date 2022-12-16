import { useState } from "react"

const NavItem = (props) => {
    const [open, setOpen] = useState(false)

    return(
        <li className="nav-item">
            <button onClick={() => setOpen(!open)} className="icon-button">
                {props.text}
            </button>

            {open && props.children}
        </li>
    )
}

const Navbar = (props) => {
    return (
        
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
        
    )
}

export { Navbar, NavItem}