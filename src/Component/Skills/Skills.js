import React from 'react';
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './Skills.css'

const Skills = () => {
    return (
        <section id='Skills'>
            <h5>What Skills I have</h5>
            <h1>My Skills</h1>
            <div className='Container Skills_Container'>
                
                <div className='Fontend_Container'>
                <h3> Fontend Devlopment</h3>
                    <div className='Fontend_Skills'>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            < BsFillPatchCheckFill className='Icons'/>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>Boostrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Intermedite</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>Java Script</h4>
                            <small className='text-light'>Intermedite</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>React</h4>
                            <small className='text-light'>Intermedite</small>
                        </article>
                    </div>

                </div>
                {/* ====End Of Font End ======= */}
                <div className='Backend_Container'>
                <h3> Back Devlopment</h3>
                    <div className='Fontend_Skills'>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>Node Js</h4>
                            <small className='text-light'>Intermedite</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermedite</small>
                        </article>
                        <article className='Fontend_Skills_Deta'>
                            <BsFillPatchCheckFill className='Icons'/>
                            <h4>Firebase</h4>
                            <small className='text-light'>Intermedite</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;