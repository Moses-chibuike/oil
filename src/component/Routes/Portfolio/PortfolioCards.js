import React from 'react'
import './portfolio.css'

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

const PortfolioCards = () => {



    return (
        <div className='portfolio-cards'>
        
        {
            data && data.map((card) => (

                <div className='cards-content' >
                 <img src={card.image} alt={card.image} />

                </div>
            ))
        }
            
        </div>
    )
}

export default PortfolioCards
