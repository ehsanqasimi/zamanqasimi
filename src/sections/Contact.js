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
                        <a target='_blank' href="https://www.facebook.com/zaman.qasimi.92?mibextid=LQQJ4d">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                <path id="icon-facebook" d="M47.24,0H2.76A2.76,2.76,0,0,0,0,2.76V47.242A2.759,2.759,0,0,0,2.76,50H26.708V30.637H20.192V23.092h6.517V17.527c0-6.458,3.944-9.975,9.706-9.975a53.451,53.451,0,0,1,5.823.3V14.6l-4,0c-3.133,0-3.74,1.49-3.74,3.673v4.819h7.473L41,30.64H34.5V50H47.244A2.759,2.759,0,0,0,50,47.24V2.76A2.76,2.76,0,0,0,47.24,0Z" fill="#320e85"/>
                            </svg>
                        </a>
                        <a target='_blank' href="https://instagram.com/virgin_wolf7?igshid=YmMyMTA2M2Y=">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                <path id="icon-instagram" d="M25,4.506c6.675,0,7.467.025,10.1.146,6.775.308,9.94,3.523,10.248,10.248.121,2.635.144,3.427.144,10.1s-.025,7.467-.144,10.1c-.31,6.719-3.467,9.94-10.248,10.248-2.638.121-3.425.146-10.1.146s-7.467-.025-10.1-.146c-6.792-.31-9.94-3.54-10.248-10.25C4.529,32.467,4.5,31.677,4.5,25s.027-7.465.146-10.1C4.96,8.175,8.117,4.958,14.9,4.65c2.637-.119,3.427-.144,10.1-.144ZM25,0c-6.79,0-7.64.029-10.306.15C5.615.567.569,5.6.152,14.692.029,17.36,0,18.21,0,25s.029,7.642.15,10.308C.567,44.387,5.6,49.433,14.692,49.85,17.36,49.971,18.21,50,25,50s7.642-.029,10.308-.15c9.071-.417,14.129-5.454,14.54-14.542C49.971,32.642,50,31.79,50,25s-.029-7.64-.15-10.306C49.442,5.623,44.4.569,35.31.152,32.642.029,31.79,0,25,0Zm0,12.162A12.838,12.838,0,1,0,37.838,25,12.837,12.837,0,0,0,25,12.162Zm0,21.171A8.333,8.333,0,1,1,33.333,25,8.333,8.333,0,0,1,25,33.333ZM38.346,8.656a3,3,0,1,0,3,3,3,3,0,0,0-3-3Z" fill="#320e85" />
                            </svg>
                        </a>
                        <a target='_blank' href="https://twitter.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40.633" viewBox="0 0 50 40.633">
                                <path id="icon-twitter" d="M50,5.058a20.479,20.479,0,0,1-5.892,1.615A10.275,10.275,0,0,0,48.619,1,20.55,20.55,0,0,1,42.1,3.488a10.265,10.265,0,0,0-17.481,9.354A29.121,29.121,0,0,1,3.481,2.125a10.271,10.271,0,0,0,3.173,13.7A10.215,10.215,0,0,1,2.01,14.538a10.266,10.266,0,0,0,8.227,10.187A10.281,10.281,0,0,1,5.6,24.9a10.267,10.267,0,0,0,9.583,7.123A20.625,20.625,0,0,1,0,36.273a29.042,29.042,0,0,0,15.725,4.608c19.046,0,29.806-16.085,29.156-30.512A20.885,20.885,0,0,0,50,5.058Z" transform="translate(0 -0.248)" fill="#320e85" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact