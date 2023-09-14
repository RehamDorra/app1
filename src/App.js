import { Component } from "react";
import Contact from "./component/Contact/Contact";
import Portfolio from "./component/Portfolio/Portfolio";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";

const router = createHashRouter(  [ 

            {path:'home' , element:<Home/> },
            {path:'about' , element:<About/> },
            {path:'portfolio' , element: <Portfolio/>},
            {path:'contact' , element:<Contact/>},
] )

export default  class App extends Component{
  state = {}
  render(){
    return <>
    <RouterProvider router={router}/>
   
    </>
  }
}