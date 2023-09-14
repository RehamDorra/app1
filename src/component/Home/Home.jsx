import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './home.css'

export default class Home extends Component{
    state = {}
    render(){
        return<>
        <Navbar/>
        <div className="home  justify-content-center align-items-center vh-100 pt-5 mt-5">
            <div className="home-photo  d-flex justify-content-center align-items-center">
                <img src="/photos/avataaars.svg" className=" mt-5 " alt="" />
            </div>

            <div className="home-head ">
          <h2 className="  fw-bold d-flex justify-content-center align-items-center home-comp text-white">START FRAMEWORK</h2>
          <div className="home-lines d-flex justify-content-center align-items-center">
            <div className="left-home-line me-3"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="right-home-line ms-3"></div>
          </div>
          <p className="text-white text-center mt-3">Graphic Artist - Web Designer - Illustrator</p>
          </div>

        </div>



        <Footer/>
        </>
    }
}