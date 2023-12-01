import React from 'react';
// import styles from './navbar.module.css';
// import { motion } from 'framer-motion';
// import { BiMessageDots } from "react-icons/bi";

import { 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    FaIcon, 
    NavLinks 
} from './NavbarStyles';

// import { Link } from 'react-router-dom';


const Navbar = ( { toggle } ) => {


    return (

        <NavContainer>


             <NavLogo to='/'>   pentfort </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaIcon />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='services'
                        spy={true} smooth={true} duration={500}
                        > Services </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='portfolio' spy={true} smooth={true} duration={500}> Portfolio </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about' spy={true} smooth={true} duration={500}> About us </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' spy={true} smooth={true} duration={500}> Contact Us </NavLinks>
                    </NavItem>
                </NavMenu>

            {/* </motion.div> */}
        

        </NavContainer>
    )
}

export default Navbar
