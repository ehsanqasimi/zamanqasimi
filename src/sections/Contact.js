import React from 'react'
import facebookIcon from './images/icon-facebook.svg'
import instagramIcon from './images/icon-instagram.svg'
import twitterIcon from './images/icon-twitter.svg'

function Contact() {
    return (
        <div className='contact' id='contact'>
            <div className="form">
                <h1>Book Your Free Measure & Quote</h1>
                <form action="https://formsubmit.co/zamanqasimi@gmail.com" method="POST">
                    <input type="hidden" name="_subject" value="New Quote" />
                    <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
                    <input type="email" id="email" name="email" placeholder="Email" required />
                    <input type="text" id="phone" name="phone" placeholder="Phone Number" />
                    <input type="hidden" name="_next" value="./thanks.html" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <textarea placeholder="Any question?" name="question" id="question" cols="30" rows="10"></textarea>
                    <button type="submit" className="form-btn">Submit</button>
                </form>
            </div>

            <div className="contactInfo">
                <div className="phone">

                    <p>CALL US ON:</p>
                    <p className="number">011642536283</p>
                </div>
                <div className="follow">

                    <p>And follow Us on:</p>
                    <div className="social-icons">
                        <a target='_blank' href="https://www.facebook.com/zaman.qasimi.92?mibextid=LQQJ4d"><img src={facebookIcon} alt="facebook icon" /></a>
                        <a target='_blank' href="https://instagram.com/virgin_wolf7?igshid=YmMyMTA2M2Y="><img src={instagramIcon} alt="instagram icon" /></a>
                        <a target='_blank' href="https://twitter.com"><img src={twitterIcon} alt="twitter icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact