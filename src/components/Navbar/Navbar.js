import React,{ useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from "react-scroll"
import {
    Nav,
    Navcontainer,
    Logo,
    NavItem,
    NavLink,
    NavMenu,
    MobileIcon,
    NavBtn,
    LinkBtn
} from "./Navbarelement"

const Navbar = ({ toggle}) => {

    const [scrollNav , setScrollNav] = useState(false);
    
    const changNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll" , changNav);
    },[])

    const toggleHome = () =>{
        scroll.scrollToTop();  
    }
    
    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <Nav scrollNav={scrollNav} >
                <Navcontainer >
                    <Logo to="/" onClick={toggleHome} >
                        Dolla
                    </Logo>
                    <MobileIcon  onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about"
                                smooth={true}
                                spy={true}
                                duration={500}
                                exact="true"
                                offset={-80}
                            >
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover"
                                smooth={true}
                                spy={true}
                                duration={500}
                                exact="true"
                                offset={-80}
                            >
                                DisCover
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services"
                                smooth={true}
                                spy={true}
                                duration={500}
                                exact="true"
                                offset={-80}
                            >
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'
                                smooth={true}
                                spy={true}
                                duration={500}
                                exact="true"
                                offset={-80}
                            >
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <LinkBtn to="/signin" >Sign In</LinkBtn>
                    </NavBtn>
                </Navcontainer>
            </Nav>

        </IconContext.Provider>
        </>
    );
};

export default Navbar;