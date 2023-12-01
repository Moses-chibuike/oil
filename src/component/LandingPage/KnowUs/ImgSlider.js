import React, {useState, useEffect } from 'react'
// import axios from '../../../adapter/axios'
// import { SliderData } from './SliderData';
import './ImgSlider.css'
import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos  } from 'react-icons/md';

import A from '../../../assets/houses/1.jpg';
import B from '../../../assets/houses/2.jpg';
import C from '../../../assets/houses/3.jpg';
import D from '../../../assets/houses/4.jpg';
import E from '../../../assets/houses/5.jpg';
import F from '../../../assets/houses/6.jpg';
import G from '../../../assets/houses/7.jpg';
import H from '../../../assets/houses/8.jpg';
import I from '../../../assets/houses/9.jpg';
import J from '../../../assets/houses/10.jpg';
import K from '../../../assets/houses/11.jpg';
import L from '../../../assets/houses/12.jpg';
import M from '../../../assets/houses/13.jpg';
import N from '../../../assets/houses/14.jpg';
import O from '../../../assets/houses/15.jpg';
import P from '../../../assets/houses/16.jpg';
import Q from '../../../assets/houses/17.jpg';
import R from '../../../assets/houses/18.jpg';
import S from '../../../assets/houses/19.jpg';
import T from '../../../assets/houses/20.jpg';
import U from '../../../assets/houses/21.jpg';
import V from '../../../assets/houses/22.jpg';
import W from '../../../assets/houses/23.jpg';




const data = [
    { image: A },
    { image: B },
    { image: C },
    { image: D },
    { image: E },
    { image: F },
    { image: G },
    { image: H },
    { image: I },
    { image: J },
    { image: K },
    { image: L },
    { image: M },
    { image: N },
    { image: O },
    { image: P },
    { image: Q },
    { image: R },
    { image: S },
    { image: T },
    { image: U },
    { image: V },
    { image: W }
   
    
]


const Slider = () => {



    const [current, setCurrent] = useState(0);
    const [slides, setSlides] = useState([]);
    const length = slides.length;


    useEffect(() => {
        // async function fetchPost() {
        //     const response = await axios.get('/posts');
            setSlides(data);
            
        //     return response;
           
        // }
 
        // fetchPost();
      }, []);
      console.log(slides);
     


    const nextSlide = ()=> {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
    }
    const prevSlide = ()=> {
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
    
        <section className='img-slider' >
            <div className='text'>
        
                    <h2 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="300"
                    > Completed Projects </h2>

                    <div 
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    className="block"> </div>
                
                </div>       
            <div className='slider' >
                
            <MdOutlineArrowBackIos className='left-arrow' onClick={prevSlide}  />
            <MdOutlineArrowForwardIos className='right-arrow' onClick={nextSlide} />
            
            { slides.map((slide, index)=> {
                return (
                    <div className={index === current ? 'slide active' : slide} key={index} >
                        {index === current && (
                            <img src={slide.image} className='image' alt='business people images' />
                        )}
                         
                    </div>
                
                   
                )
            })}


        </div>
        <Link to='/portfolio' className='link'>
        <div className='more'>
                    <h3>See more  </h3>
                    <FaArrowRight />
                </div>
                </Link>


        
        </section>
    )
}

export default Slider
