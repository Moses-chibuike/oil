import React from 'react'
import './services.css'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Arch from '../../../assets/arch.jpg'
import Consult from '../../../assets/consult.jpg'
import Construct from '../../../assets/builders.jpg'

const ServicesCard = () => {


    const data = [
        {
            title: "Architectural Services",
            content: 'Our Architectural services includes design, preparation of construction documents and construction administration',
            image: Arch
        },

        {
            title: "Construction Services",
            content: 'We ensure your project proceed as scheduled and aid minimizing delays and costly product deficiency issues',
            image: Construct
        },
        
        {
            title: "Consultation Services",
            content: 'Our Consultation services has helped our clients reduce risks. We have a team of experts available for you',
            image: Consult
        },
        

    ]
    return (
        <div className='service-card'>
            {
                data.map((bg) => (
                    <div className='service-card-content'>
                        <div className='image'>
                            <img src={bg.image} alt={bg.image} />
                        </div>    
                        <div className='text'>
                            <h3> {bg.title}</h3>
                            <p> {bg.content}</p>

                           <Link to='/contact' className='link'> <button> Get Started <BsArrowRight className='icon' /> </button> </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ServicesCard
