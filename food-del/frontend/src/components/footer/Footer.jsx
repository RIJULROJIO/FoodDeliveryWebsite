import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>  </p>
                <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                    
                </div>
                
            </div>
           
           
           
            <div className='footer-content-center'>
                <h2> Company </h2>
                <li> Home
                </li>
                <li> About us
                </li>
                <li> Delivery
                </li>
                <li> Privacy Policy
                </li>

            </div>



            <div className='footer-content-right'>

                <h2> Get in Touch</h2>
                <ul>
                    <li>  +91 9878765678</li>
                    <li> contact@gmail.com

                    </li>
                </ul>

</div>
       
       
        </div>
        <hr />
        <p className='footer-copyright'>  2024. Tomato  </p>



    </div>
  )
}
