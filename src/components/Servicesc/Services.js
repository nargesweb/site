import React from 'react';
import icon1 from "../../images/svg4.svg";
import icon2 from "../../images/svg5.svg";
import icon3 from "../../images/svg6.svg";

import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from "./servicesElements"

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2>Reduse expenses</ServicesH2>
                    <ServicesP>
                        We help reduse your fess and increase your overall revenue 
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>
                        You can access our platform online anywhere is the world.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>
                        unlock our special memberShip card that returnes 5% cash back
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;