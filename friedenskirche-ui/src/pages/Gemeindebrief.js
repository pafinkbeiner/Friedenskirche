import React from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

//SCSS
import './Gemeindebrief.scss';
import './Page.scss'

//Gemeindebriefe
//2019_12
import Thumb_2019_12 from '../pages/assets/Gemeindebriefe/2019_12/csm_2019_12_f35e4eed4b.png';
import PDF_2019_12 from '../pages/assets/Gemeindebriefe/2019_12/2019_12.pdf';
//2019_09
import Thumb_2019_09 from '../pages/assets/Gemeindebriefe/2019_09/csm_2019_09_7b844d97d9.png';
import PDF_2019_09 from '../pages/assets/Gemeindebriefe/2019_09/2019_09.pdf';
//2019_06
import Thumb_2019_06 from '../pages/assets/Gemeindebriefe/2019_06/csm_2019_06_998f96c248.png';
import PDF_2019_06 from '../pages/assets/Gemeindebriefe/2019_06/2019_06.pdf';
//2019_03
import Thumb_2019_03 from '../pages/assets/Gemeindebriefe/2019_03/csm_2019_03_2cfc4761e8.png';
import PDF_2019_03 from '../pages/assets/Gemeindebriefe/2019_03/2019_03.pdf';
//2018_12
import Thumb_2018_12 from '../pages/assets/Gemeindebriefe/2018_12/csm_2018_12_a034213f4a.png';
import PDF_2018_12 from '../pages/assets/Gemeindebriefe/2019_03/2019_03.pdf';
//2018_09
import Thumb_2018_09 from '../pages/assets/Gemeindebriefe/2018_09/csm_2018_09_b50ec9dbc6.png';
import PDF_2018_09 from '../pages/assets/Gemeindebriefe/2018_09/2018_09.pdf';
//2018_06
import Thumb_2018_06 from '../pages/assets/Gemeindebriefe/2018_06/csm_2018_06_ea5c25b33c.png';
import PDF_2018_06 from '../pages/assets/Gemeindebriefe/2018_06/2018_06.pdf';
//2018_03
import Thumb_2018_03 from '../pages/assets/Gemeindebriefe/2018_03/csm_2018_03_4629a541fd.png';
import PDF_2018_03 from '../pages/assets/Gemeindebriefe/2018_03/2018_03.pdf';
//2017_12
import Thumb_2017_12 from '../pages/assets/Gemeindebriefe/2017_12/csm_2017_12_0ac9abb609.png';
import PDF_2017_12 from '../pages/assets/Gemeindebriefe/2017_12/2017_12.pdf';

const Gemeindebrief = () => {

    return (
        <div className="main-container">
            <h1>Gemeindebriefe</h1>
            <br/>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_09}><img src={Thumb_2019_09} alt="2019_09"/></a>
                <a href={PDF_2019_09}><h3>September - November 2019</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_06}><img src={Thumb_2019_06} alt="2019_06"/></a>
                <a href={PDF_2019_06}><h3>Juni - Sept 2019</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_03}><img src={Thumb_2019_03} alt="2019_03"/></a>
                <a href={PDF_2019_03}><h3>März - Juni 2019</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2018_12}><img src={Thumb_2018_12} alt="2018_12"/></a>
                <a href={PDF_2018_12}><h3>Dezember-März 2019</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2018_09}><img src={Thumb_2018_09} alt="2018_09"/></a>
                <a href={PDF_2018_09}><h3>September - Dezember 2018</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2018_06}><img src={Thumb_2018_06} alt="2018_06"/></a>
                <a href={PDF_2018_06}><h3>Juni - September 2018</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2018_03}><img src={Thumb_2018_03} alt="2018_03"/></a>
                <a href={PDF_2018_03}><h3>März - Juni 2018</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2017_12}><img src={Thumb_2017_12} alt="2017_12"/></a>
                <a href={PDF_2017_12}><h3>Dezember - März 2018</h3></a>
            </div>
        </div>
    )
}

export default Gemeindebrief
