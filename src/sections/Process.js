import React from 'react'
import firstImage from './images/firstStepImage.jpeg'
import secondImage from './images/secondStepImage.jpeg'
import thirdImage from './images/thirdStepImage.jpeg'

function Process() {
    return (
        <div id="process" className="process">
            <p className="our">OUR PROCESS</p>
            <div className="cards">
                <div className="card">
                    <p className="card-title"><span>1</span> MEASURE & QUOTE</p>
                    <p className="card-body">Crystal Bathrooms will provide you with a quote.
                        Along with a quote our experts will provide you
                        with ideas, products and fixtures that will be the
                        perfect accompaniment to your new bathroom.
                        Once you are happy with your quote we will
                        present you with a 3D model design that will
                        perfectly complement your home.</p>
                    <img className="card-image" src={firstImage } alt="image of tiles" />
                </div>
                <div className="card">
                    <p className="card-title"><span>2</span> MEASURE & QUOTE</p>
                    <p className="card-body">Crystal Bathrooms will provide you with a quote.
                        Along with a quote our experts will provide you
                        with ideas, products and fixtures that will be the
                        perfect accompaniment to your new bathroom.
                        Once you are happy with your quote we will
                        present you with a 3D model design that will
                        perfectly complement your home.</p>
                    <img className="card-image" src={ secondImage} alt="image of tiles" />
                </div>
                <div className="card">
                    <p className="card-title"><span>3</span> MEASURE & QUOTE</p>
                    <p className="card-body">Crystal Bathrooms will provide you with a quote.
                        Along with a quote our experts will provide you
                        with ideas, products and fixtures that will be the
                        perfect accompaniment to your new bathroom.
                        Once you are happy with your quote we will
                        present you with a 3D model design that will
                        perfectly complement your home.</p>
                    <img className="card-image" src={thirdImage} alt="image of tiles" />
                </div>
            </div>
        </div>
    )
}

export default Process