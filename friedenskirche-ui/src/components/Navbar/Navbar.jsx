import React from 'react'
import { Link } from 'react-router-dom';

//Ressources
import logo from '../Navbar/logo.svg';

//SCSS
import '../Navbar/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav-container">

            <Link className="logo-link" to="Gemeinde">
                <img className="logo" src={logo} alt="logo"/>
            </Link>


            <Link className="navbar-item" to="Gemeinde">Gemeinde</Link>
            <Link className="navbar-item" to="Aktuell">Aktuell</Link>
            <Link className="navbar-item" to="Gemeindebrief">Gemeindebrief</Link>
            <a className="navbar-item" href="https://www.freundeskreis-asyl-fds.de/">Asyl</a>
            <a className="navbar-item" href="https://www.ambulante-hospizdienste.de/">Hospizdienst</a>
            <Link className="navbar-item" to="GoodNews">Good News</Link>
            <Link className="navbar-item" to="Geschichte">Geschichte</Link>
        </nav>
    )
}

export default Navbar
