import { Component } from "react";
import './footer.css'

export default class Footer extends Component{
    state = {}
    render(){
    return <div className=" footer  ">
             <div className="container">
                <div className="row text-center text-white">
                    <div className="col-md-4">
                       <div className="left">
                       <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="middle">
                       <h3>AROUND THE WEB</h3>
                      <div className="icons">
                      <i class="fa-brands fa-facebook px-4 fs-5 mx-1 text-white icon"></i>
                       <i class="fa-brands fa-twitter px-4 fs-5 mx-1 text-white icon"></i>
                       <i class="fa-brands fa-linkedin px-4 fs-5 mx-1 text-white icon"></i>
                       <i class="fa-solid fa-globe px-4 fs-5 mx-1 text-white icon"></i>
                      </div>
                       </div>
                    </div>
                    <div className="col-md-4">
                       <div className="left">
                       <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>                        
                       </div>
                    </div>
                </div>
             </div>

            
             
              <div className="end-footer text-white  text-center py-3">
              <p>Copyright © Your Website 2021</p>
             </div>
            </div>
    }
}