import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

//Pictures
import img1 from './assets/ohne-hilfe.png';
import img2 from './assets/nicht-moeglich.png';
import img3 from './assets/michael_maeule.jpg';

import './Page.scss';
import './Gemeinde.scss';

const Gemeinde = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Gemeinde");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            <div className="content-beside">
                <div className="content-left">
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
                <div className="content-right">
                    <img src={img3} width="250" height="auto" alt="Michael Mäule"/>
                    <p>Pastor Michael Mäule</p>
                </div>
            </div>
            <br/>
            <h2>Gottesdienste</h2>
            <br/>
            <p>Sonntags um 10:00 Uhr</p>
        </div>
    )
}

export default Gemeinde
