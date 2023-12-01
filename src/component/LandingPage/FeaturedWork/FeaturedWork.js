import React from 'react'
import './featuredwork.css'
import { Link } from 'react-router-dom';
// import House1 from '../../../assets/images/residential/house1.jpg'

const FeaturedWork = () => {
    return (
        <div className='featured-container'>


            <section className="section-featured">


                <div className="text">
            
                    <div className='text-action'>
                      
                        <h2> Have a project in mind? </h2>
                       <p> Reach out and we can create magic together </p>
                     

                       
                    </div>

                    <Link to='/contact'> <button> WORK WITH US</button> </Link>
                
                    
                </div>

                <div>
                    
                </div>

            </section>
        </div>
    )
}

export default FeaturedWork
