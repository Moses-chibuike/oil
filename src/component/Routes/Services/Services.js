import React from 'react'
import './services.css'
import servicebg  from '../../../assets/servicebg.jpg'
import ServicesCard from './ServicesCard'
import Footer from '../Footer/Footer'

const Services = () => {
    return (
        <>
 
        <div className="services-container">

            <div className='service-image'>
                <img src={servicebg} alt={servicebg} />
                    <div className='service-overlay'></div>
            </div>

            <div className="text" >
              <h1>Our Services </h1>
            
            

              <div 
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="block"></div>
              {/* <Link to='/portfolio' className='link'>
                    <button 
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="700"
                    > <p>Explore our work</p>  <BsArrowRight /> </button> 
              </Link> */}
            </div>
              
            
        </div>

        <ServicesCard />

       

        <Footer />

    
        </>
    )
}

export default Services
