import React, { useEffect, useState } from 'react'
import Image1 from './sliderImages/mobileImages/1.jpeg'
import Image2 from './sliderImages/mobileImages/2.jpeg'
import Image3 from './sliderImages/mobileImages/3.jpeg'
import Image4 from './sliderImages/mobileImages/4.jpeg'
import Image5 from './sliderImages/mobileImages/5.jpeg'
import Image6 from './sliderImages/mobileImages/6.jpeg'
import Image7 from './sliderImages/mobileImages/7.jpeg'
import Image8 from './sliderImages/mobileImages/8.jpeg'
import Image9 from './sliderImages/mobileImages/9.jpeg'
import Image10 from './sliderImages/mobileImages/10.jpeg'
import Image11 from './sliderImages/mobileImages/11.jpeg'
import Image13 from './sliderImages/mobileImages/13.jpeg'
import Image14 from './sliderImages/mobileImages/14.jpeg'
import Image15 from './sliderImages/mobileImages/15.jpeg'
import Image16 from './sliderImages/mobileImages/16.jpeg'
import Image17 from './sliderImages/mobileImages/17.jpeg'
import Image18 from './sliderImages/mobileImages/18.jpeg'


import DesktopImage1 from './sliderImages/desktopImages/1.png'
import DesktopImage2 from './sliderImages/desktopImages/2.png'
import DesktopImage3 from './sliderImages/desktopImages/3.png'
import DesktopImage4 from './sliderImages/desktopImages/4.png'
import DesktopImage5 from './sliderImages/desktopImages/5.png'
import DesktopImage6 from './sliderImages/desktopImages/6.png'
import DesktopImage7 from './sliderImages/desktopImages/7.png'
import DesktopImage8 from './sliderImages/desktopImages/8.png'
import DesktopImage9 from './sliderImages/desktopImages/9.png'
import DesktopImage10 from './sliderImages/desktopImages/10.png'
import DesktopImage11 from './sliderImages/desktopImages/11.png'
import DesktopImage13 from './sliderImages/desktopImages/13.png'
import DesktopImage14 from './sliderImages/desktopImages/14.png'




import DownArrow from './downarrow.svg'

function Home() {
    const [isMobile, setIsMobile] = useState(() => {
        if (window.innerWidth < 900) {
            return true
        } else {
            return false
        }
    })
    const [slideIndex,setSlideIndex] = useState(0)
    let images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image13,
        Image14,
        Image15,
        Image16,
        Image17,
        Image18
    ]


    let desktopImages = [
        DesktopImage1,
        DesktopImage2,
        DesktopImage3,
        DesktopImage4,
        DesktopImage5,
        DesktopImage6,
        DesktopImage7,
        DesktopImage8,
        DesktopImage9,
        DesktopImage10,
        DesktopImage11,
        DesktopImage13,
        DesktopImage14
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex => {
                if (isMobile) {
                    if (slideIndex < images.length - 1) {
                        return slideIndex + 1
                    } else {
                        return 0
                    }
                } else {
                    if (slideIndex < desktopImages.length - 1) {
                        return slideIndex + 1
                    } else {
                        return 0
                    }
                }
            })
            console.log(slideIndex)
        }, 2700);
        return () => clearInterval(interval)
    },[])

    return (
        <div id='home' className='home'>
            <div style={{transform:`translateX(-${slideIndex*100}%)`}} className="home-slider-container">
                {
                    isMobile ?  images.map(image => {
                        return (
                            <img key={image} src={image} alt='slide image' />
                        )
                    })
                        :
                        desktopImages.map(image => {
                            return (
                                <img key={image} src={image} alt='slide image' />
                            )
                        })
                }
            </div>
            <div className="home-content">
                <h1 className='home-content-header animate__animated animate__backInRight'>
                        Make your home look nice with us
                </h1>
                <a href="#about"><img src={DownArrow} alt="down arrow" /></a> 
            </div>
        </div>
    )
}

export default Home