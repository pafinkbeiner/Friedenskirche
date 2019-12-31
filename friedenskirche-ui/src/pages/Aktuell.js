import React from 'react'

import './Page.scss'

//Assets
import img1 from '../pages/assets/csm_Weihnachten_cfc57f3653.jpg';

//Style
const style = {
    margin: 'auto',
    width: '70%'
}

const Aktuell = () => {
    return (
        <div className="main-container">
            <div style={style}>
                <h1>Aktuelle Termine</h1>
                <br/>
                <img  src={img1} alt="aktuelles" width="100%"/>
            </div>
        </div>
    )
}

export default Aktuell
