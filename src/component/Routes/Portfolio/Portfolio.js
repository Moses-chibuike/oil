import React from 'react'
import PortfolioCards from './PortfolioCards'
import Footer from '../Footer/Footer'
import servicebg  from '../../../assets/package.jpg'

const Portfolio = () => {
    return (
        <div>
            
        <div className="services-container">

<div className='service-image'>
    <img src={servicebg} alt={servicebg} />
        <div className='service-overlay'></div>
</div>

<div className="text" >
  <h1>Our Portfolio </h1>



  <div 
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="block"></div>

</div>
  

</div>


<PortfolioCards />

<Footer />
        </div>
    )
}

export default Portfolio
