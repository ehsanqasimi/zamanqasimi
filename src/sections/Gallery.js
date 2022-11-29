import React from 'react'
import Image1 from './GalleryImages/Image1.jpeg'
import Image2 from './GalleryImages/Image2.jpeg'
import Image3 from './GalleryImages/Image3.jpeg'
import Image4 from './GalleryImages/Image4.jpeg'
import Image5 from './GalleryImages/Image5.jpeg'
import Image6 from './GalleryImages/Image6.jpeg'
import Image7 from './GalleryImages/Image7.jpeg'
import Image8 from './GalleryImages/Image8.jpeg'
import Image9 from './GalleryImages/Image9.jpeg'
import Image10 from './GalleryImages/Image10.jpeg'
import Image11 from './GalleryImages/Image11.jpeg'
import Image12 from './GalleryImages/Image12.jpeg'
import Image13 from './GalleryImages/Image13.jpeg'
import Image14 from './GalleryImages/Image14.jpeg'


function Gallery() {
    return (
        <div className='gallery-section'>
            <h1>Gallery</h1>
            <div className="gallery">
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image1}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image2}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image3}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image4}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image5}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image6}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image7}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image8}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image9}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image10}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image11}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image12}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image13}  alt="gallery image" />
                <img data-animate="animate__fadeInUp" className='animate__animated  observe' src={ Image14}  alt="gallery image" />
            </div>
        </div>
    )
}

export default Gallery