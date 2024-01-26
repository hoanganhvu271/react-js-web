import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink classActiveName="active" to="/" exact>Home</NavLink>
            <NavLink classActiveName="active" to="/todo">Todo Apps</NavLink>
            <NavLink classActiveName="active" to="/blog">Blog Apps</NavLink>
            <NavLink classActiveName="active" to="/about">About</NavLink>
        </div>
    )
}

export default Nav