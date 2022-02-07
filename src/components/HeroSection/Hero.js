import { hover } from '@testing-library/user-event/dist/hover';
import React,{useState} from 'react';
import video from "../../videos/video.mp4";
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    Herobg,
    VideoBG,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElement"
const Hero = () => {
    const [hover , setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <Herobg>
                <VideoBG autoPlay loop muted src={video}  type="video/mp4"  />
            </Herobg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign Up for anew acoun today and recive 
                    $250 in credit towards your next payment
                </HeroP>
                <HeroBtnWrapper >
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        
                    >
                        Get started 
                        {hover ? <ArrowForward/> :
                        <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
