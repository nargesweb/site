import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px ;
    white-space: nowrap;
    padding: ${({big})=>(big ?"14px 84px" : " 12px 30px")};
    background: ${({primary}) => (primary ? "#479490" : "#010606")};
    color: ${({dark}) =>(dark ? "#fff" : "#010606")};
    font-size:  ${({fontBig})=>(fontBig ? "20px" :"18px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? "#fff" : "#479490")};
        color: ${({dark}) =>(dark ? "#010606" : "#fff")};


    }
`;