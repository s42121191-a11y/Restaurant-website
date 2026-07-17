import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx"
import MenuCard from "./components/Menu/MenuCard.jsx";
import Reservation from './components/Reservation/Reservation.jsx';
import Testimonial from './components/Testimonials/Testimonial.jsx';
import Footer from './components/Footer/Footer.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function App() {

    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <MenuCard/>
      <Reservation/>
       <Testimonial/>
       <Footer/>
      


    </>
  );
}

export default App;