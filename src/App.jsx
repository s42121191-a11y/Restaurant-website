import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx"
import MenuCard from "./components/Menu/MenuCard.jsx";

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

    </>
  );
}

export default App;