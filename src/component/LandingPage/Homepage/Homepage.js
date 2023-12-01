import React from 'react';
import styles from './homepage.module.css';
import Video from '../../../assets/videos/buildings.mp4';
import { BsArrowRight } from 'react-icons/bs';
// import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div className={styles["container"]}>
 
            <div className={styles["home-container"]}>

            <video 
                src={Video} 
                autoPlay
                loop
                muted
                type='video/mp4'
                 > </video>
                <div className={styles['homepage-overlay']}></div>
          
                <div className={styles["text"]} >
                  <h1>DESIGN</h1>
                  <h2>ARCHITECTURE</h2>
                  <h3>CONSTRUCTION</h3>
                  <br />
                  <Link to='/portfolio' className={styles['link']}>
                        <button 
                         data-aos="fade-right"
                         data-aos-easing="linear"
                         data-aos-duration="700"
                        > <p>Explore our work</p>  <BsArrowRight /> </button> 
                  </Link>
                </div>
                  
                
            </div>

            {/* <About /> */}

        
            </div>
    )
}

export default Homepage
