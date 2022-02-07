import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SideLink,
    SideBtnWrap,
    SidebarRoute,
} from "./SidebarElement"

const Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SideLink to="about" onClick={toggle} >About</SideLink>
                    <SideLink to="discover" onClick={toggle} >Discover</SideLink>
                    <SideLink to="services" onClick={toggle} >Services</SideLink>
                    <SideLink to="signup" onClick={toggle} >Sign Up</SideLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;