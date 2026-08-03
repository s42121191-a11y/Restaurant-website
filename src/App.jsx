import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx"
import MenuCard from "./components/Menu/MenuCard.jsx";
import Reservation from './components/Reservation/Reservation.jsx';
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from './components/Footer/Footer.jsx';

import { useEffect } from "react";




function App() {
  
  return (
  <>

     <Navbar />
      <Hero />
      <About/>
      <MenuCard/>
      <Testimonial/>
      <Reservation/>
       <Footer/> 
    </>
  );
}

export default App;