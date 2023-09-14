import { Component } from "react";
import './portfolio.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class Portfolio extends Component{
    state={}
    render(){
        return<>
        <Navbar/>
        <div className="portfolio mb-5">
        <div className="portfolio-head pt-4">
          <h2 className="  fw-bold d-flex justify-content-center align-items-center contact-comp ">PORTFOLIO COMPONENT</h2>
          <div className="contact-lines d-flex justify-content-center align-items-center">
            <div className="left-contact-line me-3"></div>
            <i class="fa-solid fa-star "></i>
            <div className="right-contact-line ms-3"></div>
          </div>
          </div>

          <div className="container">
            <div className="row mt-5 pt-3 g-5">
                <div className="col-md-4">
                    <div className="photo position-relative">
                        <img src="/photos/poert1.png" className="w-100" alt="" />
                        <div className="layer position-absolute  w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="photo position-relative">
                        <img src="/photos/port2.png" className="w-100" alt="" />
                        <div className="layer position-absolute  w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="photo position-relative">
                        <img src="/photos/port3.png" className="w-100" alt="" />
                        <div className="layer position-absolute  w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="photo position-relative">
                        <img src="/photos/poert1.png" className="w-100" alt="" />
                        <div className="layer position-absolute  w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="photo position-relative">
                        <img src="/photos/port2.png" className="w-100" alt="" />
                        <div className="layer position-absolute  w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="photo position-relative">
                        <img src="/photos/port3.png" className="w-100" alt="" />
                        <div className="layer position-absolute  w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>


        <Footer/>
        </>

    }
}