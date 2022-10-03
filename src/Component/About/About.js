import React from 'react';
import './About.css'
import Me from '../../assets/momin.jpg'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import './About.css'
const About = () => {
    return (
        <section id='About'>
            <h5>Get to know</h5>
            <h1>About Me</h1>
            <div className='Container About_Container'>
                <div className='about_Me'>
                    <div className='About_me_Img'>
                        <img src={Me}></img>
                    </div>
                </div>
                <div className='About_Content'>
                    <div className='About_Cards'>
                        <article className='About_Card'>
                            <FaAward className='About_Icons'></FaAward>
                            <h5> Experience</h5>
                            <small> 1.5+ Years Working</small>
                        </article>
                
                        <article className='About_Card'>
                           <FaLaptopCode></FaLaptopCode>
                            <h5> Projects</h5>
                            <small>100+</small>
                        </article>
                  
                        <article className='About_Card'>
                            <FaAward></FaAward>
                            <h5> Experience</h5>
                            <small className='Small'> 1.5+ Years Working</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dicta sed excepturi, nam commodi ea aspernatur quis, velit optio assumenda eum minus odit dolore obcaecati! Dolorum cum dolore voluptatibus rerum.</p>
                    <a className="btn btn-primary" href='#Contact'>Let's Talk</a>
                        
                </div>
            </div>
            
        </section>
    );
};

export default About;