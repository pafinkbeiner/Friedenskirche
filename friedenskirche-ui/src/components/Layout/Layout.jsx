import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//Components
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

//Pages
import Gemeinde from '../../pages/Gemeinde';
import Aktuell from '../../pages/Aktuell';
import Gemeindebrief from '../../pages/Gemeindebrief';
import GoodNews from '../../pages/GoodNews';
import Geschichte from '../../pages/Geschichte';
import Impressum from '../../pages/Impressum';
import Datenschutz from '../../pages/Datenschutz';

//SCSS
import '../Layout/Layout.scss'


const Layout = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <div class="content-container">
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/Gemeinde" component={Gemeinde}/>
                    <Route exact path="/Aktuell" component={Aktuell} />
                    <Route exact path="/Gemeindebrief" component={Gemeindebrief} />
                    <Route exact path="/GoodNews" component={GoodNews} />
                    <Route exact path="/Geschichte" component={Geschichte} />
                    <Route exact path="/Impressum" component={Impressum} />
                    <Route exact path="/Datenschutz" component={Datenschutz} />
                </div> 
                <Footer/>
            </div>
        </Router>
    )
}

export default Layout
