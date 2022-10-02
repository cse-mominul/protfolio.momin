import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp}  from 'react-icons/bs'
import './HeaderSocial.css'
const HeaderSocial = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className='Header_Socials'>
            <a onClick={() => openInNewTab('https://www.linkedin.com/in/momin34/')}><AiOutlineLinkedin/> </a>
            <a onClick={()=>openInNewTab("https://github.com/cse-mominul")}><AiFillGithub/></a>
            <a onClick={()=>openInNewTab("https://wa.me/+8801771804016")}><BsWhatsapp/></a>
        </div>
    );
};

export default HeaderSocial;