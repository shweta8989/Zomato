import React from 'react'
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";


export default function Header() {
  return (
    <>
        <div className="containe-fluid banner">
            <div className="container main">
                <div className="row pt-3">
                    <div className="col-6 left">
                        <div className='app'>
                        
                        <a href=""><RiMobileDownloadLine className='text-white' /></a> 
                        <p className='text-white px-2 '> Get the App</p>
                        </div>
                        
                    </div>

                    <div className="col-6 right ">
                        <ul className='text-white logIn '>
                            <li className=''>Investor Relations</li>
                            <li className=''>Add Restaurant</li>
                            <li className=''>Log in</li>
                            <li className=''>Sign Up</li>

                        </ul>
                     </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" className='text-white zomato' />
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-12 text-white discover">
                       <h1 className=''>Discover the best food & drinks in </h1> <span className='px-3'>Jodhpur</span>
                    </div>
                </div>

                <div className="row discover1 mt-4 ">
                     <div className="col-4 text-white location">
                        
                        <FaLocationDot  className='text-danger icon mt-1'/>
                        <p className='ms-2'>Sardarpura, Jodhpur</p>

                        <FaCaretDown  className='  toolTip'/>

                        <RxDividerVertical  className='toolTip1'/>
                        
                    </div>
                    <div className='col-8 search'>
                    <CiSearch className='toolTip1 me-3' />
                        <search className='search-box'>
                        
                            <input type="search" placeholder='Search for restaurant, cuisine or a dish' className='input'/>
                            
                        </search>  
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
