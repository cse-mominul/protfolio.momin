import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {BiMessageAltDetail} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'
import './Navigation.css'
const Navigation = () => {
    return (
        <div className='Navigation'>
            <div id='Nav'>
            <a className='active' href=''><AiOutlineHome/></a>
            <a href='#About'><AiOutlineUser/></a>
            <a href='#Skills'><BsCodeSlash/></a>
            <a href='#Education'><AiOutlineBook/></a>
            <a href='#Contact'><BiMessageAltDetail/></a>
        </div>

        </div>
        
    );
};

export default Navigation;