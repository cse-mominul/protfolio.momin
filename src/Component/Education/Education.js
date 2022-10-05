import React from 'react';
import pic from '../../assets/momin.jpg'
import './Education.css'
const Education = () => {
    return (
        <section id='Education'>
            <h5>My recent works</h5>
            <h2>Projects</h2>
            <div className='Container Protfolio_Container'>
                <article className='Protfolio_Item'>
                    <div className='Protfolio_Item_Img'>
                    <img src={pic}></img>
                    </div>
                    <h3>Project Title</h3>
                    <div className='Protfolio_btn'>
                        <div>
                        <a className="btn"href='#'> github</a>
                        </div>
                        <div>
                        <a className="btn btn-primary"href='#'> Live Demo</a>
                        </div>
                    </div> 
                </article>
                <article className='Protfolio_Item'>
                    <div className='Protfolio_Item_Img'>
                    <img src={pic}></img>
                    </div>
                    <h3>Project Title</h3>
                    <div className='Protfolio_btn'>
                        <div>
                        <a className="btn"href='#'> github</a>
                        </div>
                        <div>
                        <a className="btn btn-primary"href='#'> Live Demo</a>
                        </div>
                    </div> 
                </article>
                <article className='Protfolio_Item'>
                    <div className='Protfolio_Item_Img'>
                    <img src={pic}></img>
                    </div>
                    <h3>Project Title</h3>
                    <div className='Protfolio_btn'>
                        <div>
                        <a className="btn"href='#'> github</a>
                        </div>
                        <div>
                        <a className="btn btn-primary"href='#'> Live Demo</a>
                        </div>
                    </div> 
                </article> <article className='Protfolio_Item'>
                    <div className='Protfolio_Item_Img'>
                    <img src={pic}></img>
                    </div>
                    <h3>Project Title</h3>
                    <div className='Protfolio_btn'>
                        <div>
                        <a className="btn"href='#'> github</a>
                        </div>
                        <div>
                        <a className="btn btn-primary"href='#'> Live Demo</a>
                        </div>
                    </div> 
                </article>  <article className='Protfolio_Item'>
                    <div className='Protfolio_Item_Img'>
                    <img src={pic}></img>
                    </div>
                    <h3>Project Title</h3>
                    <div className='Protfolio_btn'>
                        <div>
                        <a className="btn"href='#'> github</a>
                        </div>
                        <div>
                        <a className="btn btn-primary"href='#'> Live Demo</a>
                        </div>
                    </div> 
                </article>
                <article className='Protfolio_Item'>
                    <div className='Protfolio_Item_Img'>
                    <img src={pic}></img>
                    </div>
                    <h3>Project Title</h3>
                    <div className='Protfolio_btn'>
                        <div>
                        <a className="btn"href='#'> github</a>
                        </div>
                        <div>
                        <a className="btn btn-primary"href='#'> Live Demo</a>
                        </div>
                    </div> 
                </article>






                
            </div>
        </section>
    );
};

export default Education;