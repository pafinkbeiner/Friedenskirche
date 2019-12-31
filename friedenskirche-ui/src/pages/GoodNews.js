import React from 'react'

import './Page.scss'
import './GoodNews.scss';

//Assets
import img1 from '../pages/assets/GoodNews/csm_GN_01_685fba84c6.jpg';

const GoodNews = () => {
    return (
        <div className="main-container">
            <img className="img-wide" src={img1} alt="pic1"/>
            <br/><br/>
            <h3>„Gott als Zentrum der Geschichte“</h3>
            <br/>
            Bei einem fröhlichen Frühstück am Sonntag Morgen in der Gemeinde in Villingen Schwenningen,erzählte der Chor von einem Glauben, der im Leben Halt gibt.
            <br/><br/>
            Von den Höhen und Tiefen im Leben und Gott als unseren Anker in der Zeit. Humorvoll und tiefgehend moderierten Marek Rabiej und Miriam Mäule das Frühstückskonzert.
            <br/><br/>
            Bärbel erzählte von ihren Zweifeln in den schweren Zeiten ihrer Erkrankung und dass sie trotz allem Gottes Gegenwart spürt.
            <br/><br/>
            Marcel berichtet über das für ihn selbst überraschende und tiefe Gottvertrauen trotz momentaner Arbeitslosigkeit.
            <br/><br/>
            Alles in allem ein gelungener Auftritt in einer wohltuenden Atmosphäre,bei der klar zu spüren war,dass Gott uns ganz persönlich liebt und durch alle Höhen und tiefen trägt.
            <br/><br/>
            <h3>Eben der „ Ursprung allen Lebens „ und unser Ziel in Ewigkeit</h3>
            <br/>
        </div>
    )
}

export default GoodNews
