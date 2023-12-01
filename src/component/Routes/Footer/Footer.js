import React from 'react'
import styles from './footer.module.css'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa';
import styled from 'styled-components';


const Twitter = styled(FaTwitter)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;
const Instagram = styled(FaInstagram)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;
const Linkedin = styled(FaLinkedin)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;
const Github = styled(FaGithub)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;

const Footer = () => {
    return (
        <div className={styles["footer"]}>

            <p> connect with me on social media </p>
            <div className={styles["footer-links"]}>
                <Twitter />
                < Instagram />
                < Linkedin/>
                < Github/>
            </div>
            <p> designed and built by me </p>
        </div>
    )
}

export default Footer
