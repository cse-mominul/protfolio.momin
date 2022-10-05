import React from 'react';
import Cv from '../../assets/CSE-Mominul.pdf'
import Me from '../../assets/pngegg.png'
import HeaderSocial from './HeaderSocial';
import './Header.css'
import Scroll from './Scroll';

const Header = () => {
    return (
        <header className='container'>
             <div className='header_container'>
            <h5>Hello I'm</h5>
            <h1>Mominul Islam</h1>
            <h5>Fullstack Devloper</h5>
            <div className='Cta'>
            <a className='btn' href={Cv}>Download CV</a>
            <a  className="btn btn-primary"href='#Contact'>Lets Tlak</a>
            </div>
            <div className='Image-sction'>
                <div>
                <HeaderSocial className="header"></HeaderSocial>

                </div>
           
            <div className='me'>
                <img className="Me" src={Me}/>
            </div>
            <div>
            <Scroll></Scroll>
            </div>
            </div>
            
        </div>

        </header>
       
    );
};

export default Header;