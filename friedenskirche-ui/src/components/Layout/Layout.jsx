import React from 'react'

//Components
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

//SCSS
import '../Layout/Layout.scss'


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div class="content-container">
                <Main/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
