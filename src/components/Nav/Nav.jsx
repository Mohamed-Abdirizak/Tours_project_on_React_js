import React from 'react'
import './Nav.css'

import {AiFillCloseCircle, AiFillInstagram, AiFillYoutube, AiOutlineTwitter,} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {TbGridDots} from 'react-icons/tb'
import { useState } from 'react'



const Nav = () => {
    const [active, setActive] = useState('menuDiv');


    const showNavBar = () =>{
        setActive('menuDiv activeNavbar');

    }

    const hideNavBar = () =>{
        setActive('menuDiv');

    }









  return (
    <div>
    <div className="header flex">
        <div className="logoDiv">
            <h3 className='logo '>Fatih</h3>
        </div>


        <div className = {active}>
            <ul className="menuLists">
                <li className="navItem">
                    <a href='#' onClick={hideNavBar} className='menuLink'>Home</a>

                </li>

                <li className="navItem">
                    <a href='#' onClick={hideNavBar} className='menuLink'>About</a>

                </li>

                <li className="navItem">
                    <a href='#' onClick={hideNavBar} className='menuLink'>Our Tours</a>

                </li>

                <li className="navItem">
                    <a href='#' onClick={hideNavBar} className='menuLink'>Gallary</a>

                </li>

                <li className="navItem">
                    <a href='#' onClick={hideNavBar} className='menuLink'>Blog</a>

                </li>
                <li className="navItem">
                    <a href='#' onClick={hideNavBar} className='menuLink'>Contact Us</a>

                </li>

                <li className="navItem">
                    <a href='#'onClick={hideNavBar} className='menuLink'>Pages</a>

                </li>



            </ul>

            <div onClick={hideNavBar} className="closeNavbar">

                <AiFillCloseCircle className='icon' />
            </div>



        </div>

        
        <div className="socialIcons flex">
            <BsFacebook className='icon' />
            <AiOutlineTwitter  className='icon'/>
            <AiFillYoutube   className='icon'/>
            <AiFillInstagram  className='icon'/>
        </div>


        <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className='icon' />

        </div>

    </div>
    </div>
  )
}

export default Nav