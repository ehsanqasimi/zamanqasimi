import React, { useEffect, useState } from 'react'
import logo from './images/logo.svg'


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
            <ul className="links">
                <li onClick={close}><a href="#home">Home</a></li>
                <li onClick={close}><a href="#about">About</a></li>
                <li onClick={close}><a href="#process">Process</a></li>
                <li onClick={close}><a href="#contact">Contact</a></li>
                <li onClick={close} className="free-qoute"><a href="#contact">Book your free Quote</a> </li>
            </ul>
            <div onClick={toggle} className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Nav