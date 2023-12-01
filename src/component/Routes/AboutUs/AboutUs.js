import React from 'react'
import './about.css'
import Footer from '../Footer/Footer'
import servicebg  from '../../../assets/packages.jpg'
import Image1  from '../../../assets/images/img1.jpg'
import Emma  from '../../../assets/images/emma.jpg'

import { GiHouse } from 'react-icons/gi'
import { MdArchitecture } from 'react-icons/md'
import { FaPeopleArrows } from 'react-icons/fa'


const AboutUs = () => {
    return (
        <div>
            <div className='about'>
            
                <section className="section1">

                
            
                    <div className='service-image'>
                        <img src={servicebg} alt={servicebg} />
                        <div className='service-overlay'></div>
                    </div>
                        
                    <div className="text" >
                    <h1> About Us </h1>                  
                                                
                        <div 
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                            className="block">
                        </div>
                    </div>
        
    
                </section>

                <section className="section2">

                <div className="text" >

                    

                    <div className='text-story'>
                            <h1> Our Story </h1>

                            <h3> Consistent growth over the years </h3>
                            <p>  We figured out early the value of multiple disciplines, 
                                adding engineering services to architecture as soon as the steel building frame was invented.

                                </p>

                                <p> 
                                We delved into specialty market sectors early, leading to today’s deep well of expertise in fields 
                                as diverse and complex as academic medical centers and marina design. 
                                And we have always been at the leading edge of change.

                                </p>

                                <p>

                                 Today, the Diamond name reflects our emergence from several talented regional practices to a united, 
                                 award-winning firm practicing around the globe. 

                                 </p>

                                 <p>
                                 And just as we still carry the Diamond name, every member of our team carries a bit of our spirit—an upstart 
                                 eager to strike out and create inspiring places.
                                 </p>

                        </div>

                        <div className='text-story'>
                            <h1> What We Do </h1>

                            <div className='we-do'>

                                <div className='we-do-content'>
                                <MdArchitecture className='icon'/>
                                <p>  We Design </p>
                            </div>

                            <div className='we-do-content'>
                                <GiHouse className='icon'/>
                                <p>  We Construct </p>
                            </div>

                            <div className='we-do-content'>
                                <FaPeopleArrows className='icon'/>
                                <p>  We Consult </p>
                            </div>
                            </div>

                        </div>


                    {/* <div 
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                        className="block">
                    </div> */}
                    </div>
            
                    <div className='service-image'>
                        <img src={Image1} alt={servicebg} />
                        <div className='service-overlay'></div>
                    </div>
                        
        
                </section>



                <section className='section3'>

                    <div className='image'>
                        <img src={Emma} alt={Emma} />
                    </div>


                    <h1> James Brook</h1>
                    <h2> CEO </h2>
                </section>



    
    
    
    
   
            </div>

            <Footer />
        </div>
    )
}

export default AboutUs
