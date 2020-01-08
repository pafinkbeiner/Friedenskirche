import React from 'react'

import './Page.scss'
import './GoodNews.scss';

//Assets
import img0 from '../pages/assets/GoodNews/csm_GN_01_685fba84c6.jpg';
import img1 from '../pages/assets/GoodNews/csm_GN_10_08d55d5f8b.jpg';
import img2 from '../pages/assets/GoodNews/csm_GN_17_65e3c9242e.jpg';
import img3 from '../pages/assets/GoodNews/csm_GN_21_f3dcce0ebc.jpg';
import img4 from '../pages/assets/GoodNews/csm_GN_22_c66aabf697.jpg';
import img5 from '../pages/assets/GoodNews/csm_GN_23_7f9d837786.jpg';
import img6 from '../pages/assets/GoodNews/csm_GN_30_6891d1b7a6.jpg';
import img7 from '../pages/assets/GoodNews/csm_GN_32_17028c6343.jpg';
import img8 from '../pages/assets/GoodNews/csm_GN_44_472e86a892.jpg';
import img9 from '../pages/assets/GoodNews/csm_GN_50_39f42f00e1.jpg';
import img10 from '../pages/assets/GoodNews/csm_GN_56_fb8c613775.jpg';
import img11 from '../pages/assets/GoodNews/csm_GN_101_80011ce181.jpg';
import img12 from '../pages/assets/GoodNews/csm_GN_102_d2120b8bf2.jpg';
import img13 from '../pages/assets/GoodNews/csm_GN_103_5684791a39.jpg';
import img14 from '../pages/assets/GoodNews/csm_GN_104_97a7332868.jpg';
import img15 from '../pages/assets/GoodNews/csm_GN_105_15425aa14f.jpg';
import img16 from '../pages/assets/GoodNews/csm_GN_106_d07b3947ef.jpg';
import img17 from '../pages/assets/GoodNews/csm_GN_107_861b77a166.jpg';
import img18 from '../pages/assets/GoodNews/csm_GN_108_cad5e5cfb7.jpg';
import img19 from '../pages/assets/GoodNews/csm_GN_110_e41e54d77b.jpg';
import img20 from '../pages/assets/GoodNews/csm_GN_111_012200415c.jpg';

const GoodNews = () => {
    return (
        <div className="main-container">
            <h1>Good News</h1>
            <br/>
            <div className="main-img">
                <img className="img-wide" src={img0} alt="pic1"/>
            </div>
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
            <div className="img-container">
                <img src={ img1 } alt="img1"/>
                <img src={ img2 } alt="img2"/>
                <img src={ img3 } alt="img3"/>
                <img src={ img4 } alt="img4"/>
                <img src={ img5 } alt="img5"/>
                <img src={ img6 } alt="img6"/>
                <img src={ img7 } alt="img7"/>
                <img src={ img8 } alt="img8"/>
                <img src={ img9 } alt="img9"/>
                <img src={ img10 } alt="img10"/>
                <img src={ img11 } alt="img11"/>
                <img src={ img12 } alt="img12"/>
                <img src={ img13 } alt="img13"/>
                <img src={ img14 } alt="img14"/>
                <img src={ img15 } alt="img15"/>
                <img src={ img16 } alt="img16"/>
                <img src={ img17 } alt="img17"/>
                <img src={ img18 } alt="img18"/>
                <img src={ img19 } alt="img19"/>
                <img src={ img20 } alt="img20"/>
            </div>
        </div>
    )
}

export default GoodNews
