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
                <div className="about-content-button">
                    <a href="#contact" >Book a Free Quote</a>

                </div>
            </div>
            <div className="about-images">
                <img className='about-image-small' src={smallImage} alt="a small image of tile" />
                <img className='about-image-big' src={bigImage} alt="a big image of tile" />
            </div>
        </div>
    )
}

export default About