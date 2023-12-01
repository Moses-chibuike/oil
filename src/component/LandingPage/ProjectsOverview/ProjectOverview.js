import React from 'react'
import './projectoverview.css'
import Builders from '../../../assets/builders.jpg'
// import Constuctor from '../../../assets/construction.jpg'
import Architecture from '../../../assets/architecture.jpg'

const ProjectOverview = () => {
    return (
        <div className='project-overview'>

            <div className='header'>
                <h2
                 data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="300"
                >Our Perks </h2> 

                    <div 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    className="block"></div>
                
                
           </div>

          <section className="section-overview" >
              <div className="section-text">
                    <h3 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > An Industry Leader In Sustainable Design </h3>
                    <br />
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >Our team has extensive experience in a wide variety of architectural projects 
                        and brings a unique perspective to problem solving.</p>
                        <br />
                    <p 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >Possessing a critical balance between field experience, formal education, and technical knowledge, 
                        ensuring the ability to provide client satisfaction on every project</p>
              </div>

                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                className='project-image'>
                    <img src={Builders} alt={Builders} />
                </div>
             </section>


          <section className="section-overview">

          <div 
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
          className='project-image'>
                    <img src={Architecture} alt={Architecture} />
                </div>

              <div className="section-text">
                    <h3
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > An Industry Leader In Sustainable Design </h3>
                    <br />
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >Our team has extensive experience in a wide variety of architectural projects 
                        and brings a unique perspective to problem solving.</p>
                        <br />
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >Possessing a critical balance between field experience, formal education, and technical knowledge, 
                        ensuring the ability to provide client satisfaction on every project</p>
              </div>

                
             </section>
           
           


        </div>
    )
}

export default ProjectOverview
