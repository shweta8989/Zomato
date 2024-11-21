import React from 'react'
import { FaFlagUsa } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import img9 from "../image/playStore.webp";
import img10 from "../image/appStore.webp";


export default function Footer() {
  return (
   <>
     <div className="container-fluid bottom pb-5">
      <div className="container collect">
          <div className="row">
              <div className="col-9">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" width="130px"/>
              </div>
              <div className="col-3 d-flex">
                
                <div className='india d-flex'>
                <FaFlagUsa  className='mt-2 ms-1 text-danger'/>
                  <p className=' mt-1 ps-2'>India</p>
                  <FaAngleDown className='mt-2 ms-2' />

                </div>
                <div className='col-6 English d-flex'>
                <IoGlobeOutline className='mt-2 ms-1' />
                  <p className=' mt-1 ps-2'>English</p>
                  <FaAngleDown className='mt-2 ms-2' />
                </div>
                
              </div>
          </div>

          <div className="row">
              <div className="col-2 footer">
                <h4>About Zomato</h4>
                <div className='footer-content'>
                
                  <p>Who We Are</p>
                  <p>Blog</p>
                  <p>Work With Us</p>
                  <p>Investor Relations</p>
                  <p>Report Fraud</p>
                  <p>Press Kit</p>
                  <p>Contact Us</p>
              
                </div>
               
              </div>
              <div className="col-2 footer">
                <h4>Zomaverse</h4>
                <div className='footer-content'>
                  <p>Zomato</p>
                  <p>Blinkit</p>
                  <p>Feeding India</p>
                  <p>Hyperpure</p>
                  <p>Zomato Live</p>
                  <p>Zomaland</p>
                  <p>Weather Union</p>
                </div>
                  

                
              </div>
              <div className="col-3 footer">
                <h4>For Restaurants</h4>
                
                <div className='footer-content'>
                <p>Partner With Us</p>
                <p>Apps For You</p>
                </div>
              </div>
              <div className="col-2 footer">
              <h4>Learn More</h4>
                
                <div className='footer-content'>
                    
                  <p>Privacy</p>
                  <p>Security</p>
                  <p>Terms</p>
                  <p>Sitemap</p>
                </div>
              </div>
              <div className="col-3 footer">
                <h4 className='ms-5'>Social links</h4>
                <div className='d-flex ms-5'>
                      <div ><IoLogoLinkedin className='social-icon'/></div>
                      <div><FaInstagramSquare  className='social-icon'/></div>
                      <div><BsTwitterX  className='social-icon'/></div>
                      <div><FaSquareYoutube  className='social-icon'/></div>
                      <div><FaFacebook  className='social-icon'/></div> 
                </div>
                <div className>
                   <div>
                      <img src={img10} alt="" width="150px" className='ms-5 mt-4'/>
                   </div>
                   <div>
                    <img src={img9} alt="" width="150px"  className='ms-5 mt-4'/>
                   </div>
                </div>
              </div>
              

          </div>
          <div className='border'></div>
          <div className='footer-content-a'>
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
          </div>
      </div>
  </div>
   </>
  )
}
