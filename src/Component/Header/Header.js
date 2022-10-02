import React from 'react';
import Cv from '../../assets/CSE-Mominul.pdf'
import Me from '../../assets/pngegg.png'
import HeaderSocial from './HeaderSocial';
import './Header.css'

const Header = () => {
    return (
        <header>
             <div className='header_container'>
            <h5>Hello I'm</h5>
            <h1>Mominul Islam</h1>
            <h5>Fullstack Devloper</h5>
            <div className='Cta'>
            <a className='btn' href={Cv}>Download CV</a>
            <a  className="btn btn-primary"href='#Contact'>Lets Tlak</a>
            </div>
            <div className='Image-sction'>
            <HeaderSocial className="header_social"></HeaderSocial>
            <div className='me'>
                <img className="Me" src={Me}/>
            </div>
            <div>
            <a className='scroll-down' href='#Contact'>Scroll Down</a>
            </div>
            </div>
            
        </div>

        </header>
       
    );
};

export default Header;