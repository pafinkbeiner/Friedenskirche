import React from 'react'
import {Link} from 'react-router-dom';

//SCSS
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-title">
				    © Friedenskirche Freudenstadt 2019
			    </div>
                <div className="footer-info">
                    <Link to="Impressum">
                        Impressum
                    </Link>
                    <Link to="Datenschutz">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
