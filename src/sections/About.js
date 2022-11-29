import React from 'react'
import smallImage from './images/aboutSmallImage.jpeg'
import bigImage from './images/aboutBigImage.jpeg'

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-content">
                <h1 className="about-content-header">About Us:</h1>
                <p className="about-content-body">
                    We are an Australian owned and operated business
                    that designs and builds beautiful bathrooms in a
                    range of styles across Sydney. We are highly dedicated
                    to providing you with quality, affordable bathroom
                    renovation services. Our quality work and excellent
                    customer service has made us one of the most trusted
                    names in the business.
                </p>
                <div data-animate="animate__bounceIn" className="about-content-button animate__animated observe">
                    <a href="#contact" >Book a Free Quote</a>

                </div>
            </div>
            <div className="about-images">
                <img data-animate="animate__zoomIn" className='about-image-small animate__animated observe' src={smallImage} alt="a small image of tile" />
                <img data-animate="animate__bounceInRight" className='about-image-big animate__animated observe' src={bigImage} alt="a big image of tile" />
            </div>
        </div>
    )
}

export default About