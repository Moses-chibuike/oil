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
                    > A Pioneer in Sustainable Solutions for the Oil Sector </h3>
                    <br />
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >Our team possesses vast expertise in diverse oil industry projects, offering a distinctive approach to effective problem-solving in the realm of energy solutions.</p>
                        <br />
                    <p 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >
                    Blending substantial field expertise, formal education, and technical proficiency, we guarantee client satisfaction across every oil industry project.</p>
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
                    > 
                    A Trailblazer in Sustainable Solutions for the Oil Industry. </h3>
                    <br />
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >Our team holds vast experience in diverse oil industry projects, offering a unique perspective in effective problem-solving.</p>
                        <br />
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    >
                    Balancing field expertise, formal education, and technical knowledge, we ensure client satisfaction on every oil industry project.</p>
              </div>

                
             </section>
           
           


        </div>
    )
}

export default ProjectOverview
