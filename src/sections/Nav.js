import React, { useEffect, useState } from 'react'
import logo from './images/logo.svg'
import Scrollspy from 'react-scrollspy'


function Nav() {
    const [isOpen,setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen)
    } 

    function close() {
        setIsOpen(false)
    }



    return (
        <nav className={`nav ${isOpen ? 'show' :''}`}>
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            
                <Scrollspy
                className='links'
                items={['home', 'about', 'process', 'contact']}
            currentClassName={"active"}>
                    <li onClick={close}><a href="#home">Home</a></li>
                    <li onClick={close}><a href="#about">About</a></li>
                    <li onClick={close}><a href="#process">Process</a></li>
                    <li onClick={close}><a href="#contact">Contact</a></li>
                    <li onClick={close} className="free-qoute"><a href="#contact">Book your free Quote</a> </li>
                </Scrollspy>
            
            <div onClick={toggle} className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Nav