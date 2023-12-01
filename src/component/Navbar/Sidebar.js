import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu

} from './NavbarStyles';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink  to='/services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='/portfolio' onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>
                        Contact Us
                    </SidebarLink>

                </SidebarMenu>
             </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
