import React from 'react'

//Pictures
import img1 from './ohne-hilfe.png';
import img2 from './nicht-moeglich.png';

import './Page.scss';
import './Gemeinde.scss';

const Gemeinde = () => {

    return (
        <div className="main-container">
            <h1>Gemeinde Freudenstadt</h1> 
            <br/><br/>           
            <b>Pastor Michael Mäule</b>
            <p>Stuttgarter Straße 23</p>
            <p>72250 Freudenstadt</p>
            <p>Telefon: 07441 2147</p>
            <p>E-Mail: <a href="mailto:freudenstadt@emk.de">freudenstadt@emk.de</a></p>
            <br/>
            <table className="gemeinde-table">
                <tr className="table-item">
                    <td>
                        <b>Gottesdienstraum: </b><img src={img1} alt="ohne-hilfe"/>
                    </td>
                </tr>
                <tr className="table-item">
                    <td>
                        <b>Gruppenräume: </b><img src={img2} alt="nur-mit-hilfe"/>
                    </td>
                </tr>
                <tr className="table-item">
                    <td>
                        <b>Toiletten: </b><img src={img1} alt="ohne-hilfe"/>
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default Gemeinde
