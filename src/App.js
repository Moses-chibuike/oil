
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'


import Navbar from './component/Navbar/Navbar';
import Sidebar from "./component/Navbar/Sidebar";
import LandingPage from "./component/LandingPage/LandingPage";
import Contact from "./component/Routes/Contact/Contact";
import AboutUs from "./component/Routes/AboutUs/AboutUs";
import Portfolio from "./component/Routes/Portfolio/Portfolio";
import Services from "./component/Routes/Services/Services";
import ScrollToTop from "./component/ScrollToTop";


const override = css`
  display: block;
  margin: 0 auto;
  
`;

function App() {
 
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(()=> {
    setLoading(true);

    setTimeout(()=>{
      setLoading(false)
    }, 2500)
  }, [])

  Aos.init();

  return (
    <>
    {loading ? 

    <div className='app'>
        <GridLoader size={15} color='#193498' loading={loading} css={override} />
    </div>

    :
    (
      <Router>

        <ScrollToTop />

      <Sidebar isOpen={isOpen} toggle={toggle}  />
      <Navbar toggle={toggle}  />

      <Routes>
        <Route path="/" element={ <LandingPage />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/portfolio" element={ <Portfolio />} />
        <Route path="/about" element={ <AboutUs />} />
        <Route path="/contact" element={ <Contact />} />
         
      </Routes>

      </Router>

    )
  }
    
   


    </>
  );
}

export default App;
