import React from 'react'
import { Link } from 'react-router-dom';

//Ressources
import logo from '../Navbar/logo.svg';

//SCSS
import '../Navbar/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav-container">
            <Link className="logo-link" to="/">
                <img className="logo" src={logo} alt="logo"/>
            </Link>

            <Link className="navbar-item" to="Gemeinde">Gemeinde</Link>
            <a className="navbar-item">Aktuell</a>
            <a className="navbar-item">Asyl</a>
            <a className="navbar-item">Hospizdienst</a>
            <a className="navbar-item">Geschichte</a>

        </nav>
    )
}

export default Navbar
