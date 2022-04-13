import { Typography } from "@mui/material";
import styled from "styled-components";
import { blogPageItems } from "../../../utils/blogPageItems";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const FirstSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 5rem;
    & * {
        text-align: left;
    };
    & img {
        height: 90vh;
        width: 100%;
        object-fit: cover;
    };
    @media (max-width: 1000px) {
        padding: 5rem 1rem;
    }
`
export const SecondSectionBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem 5rem;
    & img {
        height: 100vh;
        width: 40%;
        object-fit: cover;
    };
    @media (max-width: 1200px) {
        padding: 5rem 1rem;
    };
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
    };
    };
`
export const ContentBox = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & * {
        text-align: left;
    };
    @media (max-width: 1000px) {
        width: 100%;
        margin-top: 2rem;
    };
`

export const ThirdSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 20rem;
    @media (max-width: 1000px) {
        padding: 5rem 12rem;
    };
    @media (max-width: 700px) {
        padding: 0rem 2rem;
    };
`
export const ThirdSectionText = styled(Typography)`
    font-size: 2.2em !important;
    margin-bottom: 2rem !important;
    color: white !important;
    text-align: center !important;
`
export const FourthSectionBox = styled.div`
    padding: 5rem 5rem;
    & * {
        text-align: left;
    };
    & img {
        float: right;
        height: 40vw;
        width: 60%;
        margin-left: 3rem;
        margin-bottom: 2rem;
        object-fit: cover;
    };
    @media (max-width: 1000px) {
        & img {
        float: right;
        height: 60vh;
        width: 100%;
        object-fit: cover;
        
    };
    };
    @media (max-width: 1000px) {
        padding: 5rem 1rem;
    };
`
export const ForthSectionContent = styled.div`
    /* width: 50%; */
    
`
export const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
`
interface ComponentDisplayProps {
    show: boolean;
}
export const ComponentDisplay = styled.div<ComponentDisplayProps>`
    display: ${props => props.show ? "block" : "none"}; 
`
interface ButtonBoxProps {
    index: number;
    length: number
}
export const ButtonContainer = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    width: 100%;
    padding-inline: 5rem;
    box-sizing: border-box;
    color: white;
    
    & * {
        white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    };
    & .button {
        width: 100%;
        display: flex;
        align-items: center;
    };
    & .icon {
        font-size: 70px !important;
        font-weight: bolder;
        color: #b26500;
        /* padding-block: 1rem; */
    };
    @media (max-width: 1000px) {
        padding-inline: 0;
    }
`

export const ButtonBox = styled.div<ButtonBoxProps>`
    /* ${props => props.index === 0 && "margin-left: auto;"}
    ${props => props.length === blogPageItems.length  && "margin-right: auto;"} */
    display: inline-flex;
    
    border: solid 1px red;
    align-items: center;
    /* width: 50%; */
   /*  justify-content: ${props => props.index === 0 && "start"};
    justify-content: ${props => props.length === blogPageItems.length && "end"}; */
`
export const PrevBox = styled.div`
    margin-right: auto !important;
    text-align: left !important;
    justify-content: start !important;
    border-right: 1px solid #b26500;
    &:hover{
        & * {
            color: white !important;
        };
    };
`
export const NextBox = styled.div`
    margin-left: auto !important;
    text-align: right !important;
    justify-content: end !important;
    &:hover{
        & * {
            color: white !important;
        };
    };
`
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`
export const ButtonText = styled(Typography)`
    color: #b26500 !important;
    font-size: .8em !important;
    margin-bottom: .5rem !important;

`
export const HeaderText = styled(Typography)`
    color: white !important;
`