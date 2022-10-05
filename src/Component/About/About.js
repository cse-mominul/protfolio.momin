import React from 'react';
import './About.css'
import Me from '../../assets/momin.jpg'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
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
                            <small> 1.2+ Years Working</small>
                        </article>
                
                        <article className='About_Card'>
                           <FaLaptopCode className='About_Icons'></FaLaptopCode>
                            <h5> Projects</h5>
                            <small>100+</small>
                        </article>
                  
                        <article className='About_Card'>
                            <CgWebsite className='About_Icons'> </CgWebsite>
                            <h5> Websites</h5>
                            <small className='Small'> 30+</small>
                        </article>
                    </div>
                    <p>Looking for hard and Challenging Job where I will have the scope to utilize my               potentiality,
                                adaptability and skill to do something innovate and from where I will be able to enhance my
                            knowledge.</p>
                    <p className='btnStyle'><a className="btn btn-primary" href='#Contact'>Let's Talk</a></p>
                        
                </div>
            </div>
            
        </section>
    );
};

export default About;