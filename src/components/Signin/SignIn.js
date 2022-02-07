import React from 'react';
import image from "../../images/log.png"
import { Button } from '../ButtonElement';
import {
    Conteiner,
    FormWrapper,
    Icon,
    Formcontent,
    Form,
    FormH1,
    FormLabale,
    FormInput,
    Text,
    ImgBg,
    Image,
    SignWrap
} from "./signinElements"

const SignIn = () => {
    return (
        <Conteiner>
            <SignWrap>
                <ImgBg>
                    <Image src={image} alt="pic"  />
                </ImgBg>
                <FormWrapper>
                    <Icon to="/">dolla</Icon>
                    <Formcontent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabale htmlfor="for" >Email :</FormLabale>
                            <FormInput type="email" required  placeholder='exampl@yahoo.com' />
                            <FormLabale htmlfor="for" >Password :</FormLabale>
                            <FormInput type="password" required  placeholder='passwors' />
                            <FormLabale htmlfor="for" >continue :</FormLabale>
                            <Button to='/'
                            dark="true"
                            type="submit"
                            
                            required value="submit" > Submit </Button>  
                            <Text href='#'>Forgot Password ?</Text> 
                        </Form>
                    </Formcontent>
                </FormWrapper>

            </SignWrap>
        </Conteiner>
    );
};

export default SignIn;