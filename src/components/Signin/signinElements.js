import styled from "styled-components";
import { Link } from "react-router-dom";

export const  Conteiner = styled.div`
    min-height : 692px;
    position : fixed;
    top:0;
    left : 0;
    right :0;
    bottom :0;
    background : #2c5252;
    display: flex;
    justify-content : center;
    align-items : center;
`;
export const  SignWrap = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto ,1fr);

    grid-template-areas: 'col2  col1';
    justify-content: space-between;
    min-height: 100%;
    width: 100%;

    /* max-width : 1200px; */
    @media screen and (max-width : 860px){
        grid-template-areas: 'col1'  'col2';


    }
    @media screen and (max-width : 400px){
        min-height: 80%;
    }

`;
export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column ;
    @media screen and (max-width : 480px){
        margin: 30px 30px;
    }
    grid-area: col1;

`;
export const  ImgBg = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: col2;

`;
export const  Image = styled.img`
    width:100%;
`;
export const  Icon = styled(Link)`
    position: fixed;
    top:30px;
    right: 30px;
    font-size : 28px;
    font-weight: 700;
    color :#fff;
    text-decoration: none;
`;
export const  Formcontent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column ;
    color: #fff;
`;
export const  Form = styled.form`
    display: grid;
    /* grid-template-rows: repeat(9,1fr); */
`;
export const  FormH1 = styled.h1`
    margin : 60px 10px ;
    @media screen and (max-width : 480px){
        font-size: 30px;
    }
`;
export const  FormLabale = styled.label`
    color : #dfe3e8;
    margin-bottom: 8px ;
    font-size : 14px;
`;
export const  FormInput = styled.input`
    background: transparent;
    border-bottom: 1px solid #dfe3e8 ;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    height: 40px;
    padding: 10px ;
    margin-bottom: 20px ;
    color: #fff;

    &::placeholder{
        color : #dfe3e8;

    }
    :nth-child(7){
        border: 1px solid #fff;
        background: #fff;
        margin: 30px 0;
        border-radius: 5px;

    }

`;
export const  Text  = styled.a`
    margin: 30px 10px;
    font-size:14px;
    cursor: pointer;
    color :#fff;
    text-decoration: none;
`;