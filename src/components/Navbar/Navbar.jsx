import "./Navbar.css";
import { useState,useEffect } from "react";
import logo_1 from '../../assets/images/logo_1.png'
function Navbar() {
  return (

    
    <>
    
    <nav  className="navbar_container" id="Navbar">
      
      <div className="w_name">
      <h2 className="regular-txt"><a href='#Hero'>Bella Vista</a></h2>
      </div>

      <ul className="nav_links ">
        <li><a href="Hero"> Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Menu">Menu</a></li>
        <li><a href="Testimonial">Testimonial</a></li>
        <li><a href="Footer">Contact</a></li>
        </ul> 
        <div>
        </div>
          <button className="book_btn">Book a Table</button>
    </nav>
  
   </>
  );
}

export default Navbar;