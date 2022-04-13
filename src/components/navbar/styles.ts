import { Typography } from "@mui/material"
import styled from "styled-components"
import { Link } from "react-router-dom"

//navbar
export const border = "1px solid grey"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;

& div {
    box-sizing: border-box;
    
};
    & .box {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        font-size: 2em;
        cursor: pointer;
        &:hover {
            background-color: #b26500;
        };
        
    };
    @media (max-width: 700px) {
        display: block;
        & .box {
            height: 12vh;
        }
    };
`
export const FirstSection = styled.div`
    display: flex;
    border-bottom: ${border};
   
    & div {
       
    }
    @media (max-width: 700px) {
        display: block;
    };
`
export const SecondSection = styled.div`
    display: flex;

    flex-direction: row-reverse;
    @media (max-width: 1000px) {
        display: block;
    };
`
export const MenuBox = styled.div`
    flex: 15;
    height: 25vh;
    @media (max-width: 1000px) {
        border-right: ${border} !important;
    };
`

export const LogoContainer = styled.div`
    flex: 44;
    height: 25vh;
    display: flex;
    border-left: ${border};
    cursor: default !important;
    &:hover{
        background-color: black !important;
    };
    @media (max-width: 700px) {
        border-left: none !important;
        border-top: ${border};
    };

`
export const LogoBox = styled.div`
    margin-left: auto;
    width: 100%;
    padding-right: 2rem;
    display: flex;
    justify-content: end;
    @media (max-width: 700px) {
       padding-right: 0;
   
       justify-content: center;
       & img {
           width: auto;
            height: 9vh;
        };
    };
`

export const FeaturesBox = styled.div`
    flex: 15;
    
    /* height: 75vh; */
   
`
export const ImageBox = styled.div`
    flex: 44;
    height: 75vh;
    border: ${border};
    
    border-top: none !important;
    border-right: none !important;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* background-color: yellow; */
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: none;
        visibility: hidden;
    };

    & .show {
        display: block;
    }
    @media (max-width: 1000px) {
        border-left: none !important;
        border-right: none !important;
    };
    @media (max-width: 700px) {
        border-left: none !important;
        border-right: none !important;
        height: 50vh;
    };
`
export const FeaturedItem = styled.div`
    height: 25vh;
    border-bottom: ${border};
    width: 100%;
    box-sizing: border-box;
`
export const BoxText = styled(Typography)`
    font-size: 1em !important;
    
`
export const BoxLink = styled(Link)`
    text-decoration: none !important;
`