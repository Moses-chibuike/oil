import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
// import {Link as LinkS } from 'react-scroll'
import {FaTimes} from "react-icons/fa";
import { FaBars } from "react-icons/fa";


export const NavContainer = styled.div`
display: flex;
// max-width: 100%;
height: 80px;
z-index: 10;
justify-content: space-between;
align-items: center;
padding: 2em;
position: sticky;
background-color: #193498;
top: 0;
// box-shadow: -8px 2px 16px 2px rgba(49, 47, 47, 0.5);


@media screen and (max-width: 768px){
    padding: 1em;
}
`

export const NavLogo = styled(LinkR)`
margin-left: 2em;
display: flex;
align-items: center;
font-size: 1.7em;
text-decoration: none;
color: #fff;
font-weight: 550;
text-transform: uppercase;
opacity: .95;
cursor: pointer;

@media screen and (max-width: 768px){
    margin-left: 0.5em;
}

&:hover{
    opacity: 1;
    transition: 0.7s ease-in-out;
}
`

export const FaIcon = styled(FaBars)`
    color: #fff;

    &:hover{
        color: #193498
    }

 `

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display: block;
        margin-right: 1em;
        font-size: 1.8em;
        cursor: pointer;
        color: #fff;

    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align: center;
    width: 40%;
   


    @media screen and (max-width: 968px){
        display: none;
    }
`

export const NavItem = styled.li`
    // font-family: Lato;
    width: 100%;
    margin-right: 2em;
    
`

export const NavLinks = styled(LinkR)`
    height: 100%;
    width: 100%;
    text-decoration: none;
    padding: 0.2em 0;
    align-items:center;
    color: #fff;
    font-size: 1.1em;
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid #1597E5;
        transition: 0.8s ease-in-out;
        transform-origin: right;
    }
`


// `````````Sidebar Elements````````
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background: #00000f;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.8s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

 export const CloseIcon = styled(FaTimes)`
    color: #fff;

    &:hover{
        color: #193498
    }

 `

 export const Icon = styled.div`
    position: absolute;
    top: 1.6em;
    right:1.4em;
    background: transparent;
    font-size: 2em;
    cursor: pointer;
    outline: none;
 `

 export const SidebarWrapper = styled.div`
    color: #fff;
 `

 export const SidebarMenu = styled.ul`
    display: grid;
    text-align: center;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(4, 100px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows : repeat(4, 80px);
    }
 `


 export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #193498;
        transition: 0.2s ease-in-out;
    }
 `
