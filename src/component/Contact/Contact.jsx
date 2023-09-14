import { Component } from "react";
import './Contact.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// document.querySelector("#username").addEventListener("keyUp" , function(){

//     document.querySelector(".name").className.remove("d-none")

// })


export default class Contact extends Component{
    state  = {}
    render(){
        return <>
         <Navbar/>
         <div className="contact ">
        
            <div className="contact-head pt-4">
          <h2 className="  fw-bold d-flex justify-content-center align-items-center contact-comp">CONATCT SECTION</h2>
          <div className="contact-lines d-flex justify-content-center align-items-center">
            <div className="left-contact-line me-3"></div>
            <i class="fa-solid fa-star "></i>
            <div className="right-contact-line ms-3"></div>
          </div>
          </div>

          <div className="contact-content d-flex flex-column align-items-center  py-5 container">
           
            <label for="username"className="  text-success ms-0 w-50 fs-5  d-none name">userName</label>
            <input type="text" placeholder="userName" className=" w-50 form-control" id="username"/>
            
            <label for="userage"className="  text-success ms-0 w-50 mt-4 fs-5 d-none">userAge</label>
            <input type="number" placeholder="userAge" className=" w-50 form-control mt-4" id="userage"/>
            
            <label for="useremail"className="  text-success ms-0 w-50 mt-4 fs-5 d-none">userEmail</label>
            <input type="email" placeholder="userEmail" className=" w-50 form-control mt-4" id="useremail"/>
            
            <label for="userpassword"className="  text-success ms-0 w-50 mt-4 fs-5 d-none">userPassword</label>
            <input type="password" placeholder="userPassword" className=" w-50 form-control mt-4" id="userpassword"/>
          
          </div>
          <div className="send-button  container w-25 d-flex justify-content-center mb-4">
                <button className="btn btn-success ">Send Message</button>
            </div>
         </div>
         <Footer/>
        </>
    }
}