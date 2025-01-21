import React from "react"
import './Header.css'
import logo from '../../assets/LOGO.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <img src={logo}alt="Kasa logo"/>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-link"><Link to="/">Acceuil</Link></li>
                    <li className="nav-link"><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header