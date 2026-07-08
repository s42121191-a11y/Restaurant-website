import "./About.css"
import img_2 from "../../assets/images/Restaurant_1.jpeg"
import img_1 from"../../assets/images//Restaurant_3.jpeg"
import React from 'react'

const About = () => {
  return (
   <>
   <div className="about_container">

      <h1 className="about_title">About us</h1>
      <div className="about_row">

      <div className="about_img_1">
         <img   src={img_1} alt="About_us_picture"/>
      </div>
      
      <div  className="about_img_1_content">
          <h2>Gusteau Delicious Food</h2><br/>
          <h3>Catering to your requirements</h3><br/>

         <p>Our store is more than just another average online retailer. We sell not only top qualit products,
but give our customers a positive online shopping experience. Forget about struggling to do
everything at once: taking care of the family, runnasding Forget about
products, but give our customers a positive online shopping experience. Forget about
Our store is more than just another average online retailer. We sell not only top qualit products,
but give our customers a positive online shopping experience. Forget about struggling to do
everything at once: taking care of the family, running
        </p>

      </div>
       </div>
       <div className="about_revers_row">

      <div className="about_img_2">
         <img   src={img_2} alt="About_us_picture"/>
      </div>
      
      <div  className="about_img_2_content">
          <h2>Modern design</h2><br/>
          <h3>Catering to your requirements</h3><br/>

         <p>Our store is more than just another average online retailer. We sell not only top qualit products,
but give our customers a positive online shopping experience. Forget about struggling to do
everything at once: taking care of the family, runnasding Forget about
products, but give our customers a positive online shopping experience. Forget about
Our store is more than just another average online retailer. We sell not only top qualit products,
but give our customers a positive online shopping experience. Forget about struggling to do
everything at once: taking care of the family, running
        </p>

      </div>
       </div>

   </div>
   </>
   
  )
}

export default About;