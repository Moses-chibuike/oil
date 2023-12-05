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
            title: "OIL EXPLORATION",
            content: 'Our oil exploration services encompass planning, document preparation, and thorough administration throughout the exploration process.',
            image: Arch
        },

        {
            title: "GAS PRODUCTION",
            content: 'We guarantee the timely progression of your gas production project, minimizing delays and mitigating costly product deficiency issues.',
            image: Construct
        },
        
        {
            title: "COMMERCIAL OPERATIONS",
            content: 'Our commercial operations consultation services have effectively reduced risks for clients, backed by a dedicated team of available experts.',
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
