import React from "react";
import ReactDOM from "react-dom";
import navbar from "./Navbar";
import Welcome from "./Welcome";


// create render function  
const render = (content , id) =>{
  ReactDOM.render(content, document.getElementById(id));
}


// call render function
render(navbar, 'nav')
render(<Welcome name="eka"  />, 'root')

