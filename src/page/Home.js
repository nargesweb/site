import React,{useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from "../components/Navbar/Navbar"
import Hero from '../components/HeroSection/Hero';
import InfoSection from '../components/InfoSection/Info';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Servicesc/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar toggle ={toggle} />
            <Sidebar isOpen={isOpen} toggle ={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer/>
        </div>
    );
};

export default Home;