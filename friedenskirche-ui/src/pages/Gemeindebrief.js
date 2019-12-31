import React from 'react'

//SCSS
import './Gemeindebrief.scss';
import './Page.scss'

//Gemeindebriefe
//2019_12
import Thumb_2019_12 from '../pages/assets/Gemeindebriefe/2019_12/csm_2019_12_f35e4eed4b.png';
import PDF_2019_12 from '../pages/assets/Gemeindebriefe/2019_12/2019_12.pdf';
//2019_9
import Thumb_2019_09 from '../pages/assets/Gemeindebriefe/2019_09/csm_2019_09_7b844d97d9.png';
import PDF_2019_09 from '../pages/assets/Gemeindebriefe/2019_09/2019_09.pdf';

const Gemeindebrief = () => {
    return (
        <div className="main-container">
            <h1>Gemeindebrief</h1>
            <br/>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_09}><img src={Thumb_2019_09} alt="2019_09"/></a>
                <a href={PDF_2019_09}><h3>September - November 2019</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
            <div className="gemeindebrief-content">
                <a href={PDF_2019_12}><img src={Thumb_2019_12} alt="2019_12"/></a>
                <a href={PDF_2019_12}><h3>Dezember 2019 - Februar 2020</h3></a>
            </div>
        </div>
    )
}

export default Gemeindebrief
