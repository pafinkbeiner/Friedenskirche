import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//Components
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

//Pages
import Gemeinde from '../../pages/Gemeinde';

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
                   
                </div> 
                <Footer/>
            </div>
        </Router>
    )
}

export default Layout
