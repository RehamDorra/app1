import { Component } from "react";
import './navbar.css'
import { Link } from "react-router-dom";

export default class Navbar extends Component{
    state = {}
    render(){
        return <>
        
        <nav className="navbar navbar-expand-lg py-4 fixed-top ">
  <div className="container ">
    <Link className="navbar-brand fs-2" to="/home">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="  " id="navbarNav">
      <ul className="navbar-nav    ">
        <li className="nav-item">
          <Link className="nav-link active px-3 " aria-current="page" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3" to="/contact">CONTACT</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        
        </>
    }
}