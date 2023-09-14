import { Component } from "react";
import './About.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class About extends Component{

    state = {}
    render(){
        return<>
        <Navbar/>
        
        <div className="about vh-100  ">
          <div className="about-head pt-5">
          <h2 className="pt-4 text-white fw-bold d-flex justify-content-center align-items-center pt-5 about-comp">ABOUT COMPONENT</h2>
          <div className="about-lines d-flex justify-content-center align-items-center">
            <div className="left-line me-3"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="right-line ms-3"></div>
          </div>
          </div>

          <div className="about-content">
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-6 mt-5">
                        <div className="left-content">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="right-content">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
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