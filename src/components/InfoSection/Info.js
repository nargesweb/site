import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    Imgwrap,
    Img
}from "./InfoSectionElement"

const InfoSection = ({id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    describtion,
    imgStart,
    buttonlabel,
    img,
    alt,
    dark,
    primary,
    dark2,
    darkText}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText ={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText} >{describtion}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact = "true"
                                        offset={-80}
                                        primary={primary ? 1 :0}
                                        dark ={dark ? 1 : 0}
                                        dark2 = {dark2 ? 1:0}
                                    >{buttonlabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Imgwrap>
                                <Img src={img.default} alt={alt}/>
                            </Imgwrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;