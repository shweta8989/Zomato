import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdOutlineChevronRight } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.webp';
import img4 from '../image/img4.webp';
import img5 from '../image/img5.webp';
import img6 from '../image/img6.webp';
import img7 from '../image/mobile.webp';
import { TiMediaPlay } from "react-icons/ti";
import { Button } from 'react-bootstrap';
import img9 from "../image/playStore.webp";
import img10 from "../image/appStore.webp";


export default function Home() {
  const [inputData,setInputData] = useState(true)
  return (
   <>
    <div className="container-fluid mt-5 ">
        <div className="container card1">
             <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <img src={img1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Order Online</h5>
                      <p class="card-text">Stay home and order to your doorstep.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src={img2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Dining</h5>
                      <p class="card-text">View the city's favourite dining venues</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
    </div>


    <div className="container-fluid">
        <div className="container collect">
            <div className="row">
                 <div className="col-12">
                    <h2 className='heading'>Collections</h2>
              
                 </div>
            </div>
            <div className="row collect1 p-0">
                <div className="col-9 ">
                    <p className=''>Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends</p>
                </div>

                <div className="col-3">
                  <p className='font'>All collections in Jodhpur <TiMediaPlay /></p>
                </div>
            </div>
        </div>
    </div>


    <div className="container-fluid ">
        <div className="container collect">
            <div className="row mt-4">
                <div className="col-3">
                      <Card className="bg-dark text-white  outer-overlay">
                          <Card.Img src={img3} alt="Card image" height="310px" className='overlay'/>
                            <Card.ImgOverlay  className='img-overlay'>
                              <Card.Title className='font1'>Sweet Thooth</Card.Title>
            
                                <Card.Text className='text-white'>12 Places <TiMediaPlay /></Card.Text>
                          </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="col-3">
                    <Card className="bg-dark text-white outer-overlay">
                        <Card.Img src={img4} alt="Card image" height="310px" className='overlay'/>
                          <Card.ImgOverlay  className='img-overlay'>
                            <Card.Title className='font1'> Royal Rajasthani Cuisine</Card.Title>
                           
                              <Card.Text className='text-white'>7 Places <TiMediaPlay /></Card.Text>
                        </Card.ImgOverlay>
                  </Card>
                </div>

                <div className="col-3">
                      <Card className="bg-dark text-white  outer-overlay">
                          <Card.Img src={img5} alt="Card image" height="310px" className='overlay'/>
                            <Card.ImgOverlay  className='img-overlay'>
                              <Card.Title className='font1'>Must visit Jodhpur restaur..</Card.Title>
                             
                                <Card.Text className='text-white'>8 places <TiMediaPlay /></Card.Text>
                          </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="col-3">
                      <Card className="bg-dark text-white  outer-overlay">
                          <Card.Img src={img6} alt="Card image" height="310px" className='overlay'/>
                            <Card.ImgOverlay className='img-overlay'>
                              <Card.Title className='font1'>Meat Cravings</Card.Title>
                  
                                <Card.Text className='text-white'>7 Places <TiMediaPlay /></Card.Text>
                          </Card.ImgOverlay>
                    </Card>
                </div>

            </div>
        </div>
    </div>

    <div className="container-fluid ">
        <div className="container collect-c mt-5">
            <div className="row">
                <div className="col-12 mt-5">
                    <h2 className='font2'>Popular localities in and around <span className='span'>Jodhpur</span> </h2>
                </div>
            </div>

            <div className="row mt-4">
                
                <div className="col-4 ">
                          <div class="card-a">
                              
                              <div class="card-body">
                                <div className="row">
                                    <div className="col-10">
                                      <h5 class="card-title fs-5 fw-normal pb-1">Sardarpura</h5>
                                      <p class="card-text fs-6 text-black">315 places</p>
                                    </div>

                                    <div className="col-2">
                                      <MdOutlineChevronRight className='icon-a'/> 
                                    </div>
                                </div>
                          </div>
                      </div>
                </div>
               
                <div className="col-4 ">
                      <div class="card-a">
                          
                          <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                  <h5 class="card-title fs-5 fw-normal pb-1">Chopasni Housing Board </h5>
                                  <p class="card-text fs-6 text-black">286 places</p>
                                </div>

                                <div className="col-2">
                                   <MdOutlineChevronRight className='icon-a'/> 
                                </div>
                            </div>
                      </div>
                  </div>
                </div>

                <div className="col-4 ">
                      <div class="card-a">
                          
                          <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                  <h5 class="card-title fs-5 fw-normal pb-1">Basni </h5>
                                  <p class="card-text fs-6 text-black">228 places</p>
                                </div>

                                <div className="col-2">
                                   <MdOutlineChevronRight className='icon-a'/> 
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
            </div>

            <div className="row mt-4">
                
                <div className="col-4 ">
                          <div class="card-a">
                              
                              <div class="card-body">
                                <div className="row">
                                    <div className="col-10">
                                      <h5 class="card-title fs-5 fw-normal pb-1">Ratanada </h5>
                                      <p class="card-text fs-6 text-black">205 places</p>
                                    </div>

                                    <div className="col-2">
                                      <MdOutlineChevronRight className='icon-a'/> 
                                    </div>
                                </div>
                          </div>
                      </div>
                </div>

                <div className="col-4 ">
                      <div class="card-a">
                          
                          <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                  <h5 class="card-title fs-5 fw-normal pb-1">Paota </h5>
                                  <p class="card-text fs-6 text-black">186 places</p>
                                </div>

                                <div className="col-2">
                                   <MdOutlineChevronRight className='icon-a'/> 
                                </div>
                            </div>
                      </div>
                  </div>
                </div>

              
                <div className="col-4 ">
                      <div class="card-a">
                          
                          <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                  <h5 class="card-title fs-5 fw-normal pb-1">Shastri Nagar </h5>
                                  <p class="card-text fs-6 text-black">183 places</p>
                                </div>

                                <div className="col-2">
                                   <MdOutlineChevronRight className='icon-a'/> 
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
            </div>



            <div className="row mt-4">
                
                <div className="col-4 ">
                          <div class="card-a">
                              
                              <div class="card-body">
                                <div className="row">
                                    <div className="col-10">
                                      <h5 class="card-title fs-5 fw-normal pb-1">Rawaton Ka bass </h5>
                                      <p class="card-text fs-6 text-black">99 places</p>
                                    </div>

                                    <div className="col-2">
                                      <MdOutlineChevronRight className='icon-a'/> 
                                    </div>
                                </div>
                          </div>
                      </div>
                 </div>

              
                <div className="col-4 ">
                      <div class="card-a">
                          
                          <div class="card-body">
                            <div className="row">
                                <div className="col-10">
                                  <h5 class="card-title fs-5 fw-normal pb-1">Air Force Area </h5>
                                  <p class="card-text fs-6 text-black">90 places</p>
                                </div>

                                <div className="col-2">
                                   <MdOutlineChevronRight className='icon-a'/> 
                                </div>
                            </div>
                      </div>
                  </div>
                </div>

                <div className="col-4 ">
                      <div class="card-a">
                          
                          <div class="card-body">
                            <div className="row">
                                <div className="col-8">
                                  <h5 class="card-title1 fs-5 fw-normal pb-1 text-center ">see more </h5>
                                  <p class="card-text fs-6 text-black"></p>
                                </div>

                                <div className="col-4">
                                <IoChevronDownSharp  className='icon-b '/> 
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>


  <div className="container-fluid back">
      <div className="container mobile">
          <div className="row">
              <div className="col-5">
                  <img src={img7} alt="" width="400px" className='img-7'/>
              </div>
              <div className="col-7 mobile-right">
                <h2 className='mt-4 mobile-content'>Get the Zomato app</h2>
                <p className='pt-3 font-c'>We will send you a link, open it on your phone to download <br /> the app</p>
                <div className='d-flex mt-4'>
                    <div class="form-check radio-1">
                        <input class="form-check-input" type="radio" name="exampleRadios" id='exampleRadios1' defaultChecked onClick={()=>{
                          setInputData(true)
                        }}/>
                        <label class="form-check-label" for="exampleRadios1">
                          Email
                        </label>
                      </div>
                      <div class="form-check radio-2">
                        <input class="form-check-input" type="radio" name="exampleRadios" id='exampleRadios2' onClick={()=>{
                          setInputData(false)
                        }}/>
                        <label class="form-check-label" for="exampleRadios2">
                          Phone
                        </label>
                      </div>
                </div>
                <div className="">
                  <input type={(inputData)? 'email' : 'tel'}  Placeholder={(inputData)? 'email' : 'tel'} className='input1'/>
                  <Button variant="danger" className='ms-3 py-2 mb-1'>Share App Link</Button>
                </div>
                <p className='my-2'>Download App From Here</p>
                <div className="d-flex col">
                  <div>
                      <img src={img10} alt="" width="150px" className=' me-2 mt-2'/>
                   </div>
                   <div>
                    <img src={img9} alt="" width="150px"  className='me-2 mt-2'/>
                   </div>
                </div>
              </div>
          </div>
      </div>
  </div>

  <div className="container-fluid">
      <div className="container collect3 mt-5">
          <div className="row">
              <div className="col-12">
                  <h2>Explore options near me</h2>

                  <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item rounded-4">
                      <h2 class="accordion-header px-2">
                        <button class="accordion-button collapsed fs-5 rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Popular Cuisines Near Me
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Bakery near. meBeverages near me .Burger near me .Cafe near me .Chinese near me .Coffee near me .Desserts near me .Ice Cream near me .Italian near me .Mithai near me.Momos near me .Mughlai near me .North Indian near me .Pasta near me .Pizza near me .Rajasthani near me .Sandwich near me .Shake near me .South Indian near me .Street near me.</div>
                      </div>
                    </div>
                    <div class="accordion-item rounded-4">
                      <h2 class="accordion-header px-2">
                        <button class="accordion-button collapsed fs-5 rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Popular Restaurant Types Near me
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Bakeries near me .Bars near me .Beverage Shops near me .Bhojanalya near me .Cafés near me .Casual Dining near me .Clubs near me .Dessert Parlors near me .Dhabas near me .Fine Dining near me .Food Courts near me .Food Trucks near me .Kiosks near me .Lounges near me .Paan Shop near me .Quick Bites near me .Sweet Shops near me.</div>
                      </div>
                    </div>
                    <div class="accordion-item rounded-4">
                      <h2 class="accordion-header px-2">
                        <button class="accordion-button collapsed fs-5 rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Top Restaurant Chains
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Pizza Hut</div>
                      </div>
                    </div>
                    <div class="accordion-item rounded-4">
                      <h2 class="accordion-header px-2">
                        <button class="accordion-button collapsed fs-5 rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                        Cities We Deliver To
                        </button>
                      </h2>
                      <div id="flush-collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   </>
  )
}
