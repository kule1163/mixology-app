import styled from "styled-components"
import { Typography } from "@mui/material"

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    @media (max-width: 1200px) {
        padding: 5rem 1rem;
        padding-bottom: 0 !important;
    };
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
export const ContentContainer = styled.div`
    width: 35%;
    display: flex;
   
    flex-direction: column;
    & * {
        text-align: left;
    };
    @media (max-width: 1000px) {
        width: 100%;
        padding: 1rem;
    }
`

export const SectionContainer = styled.div`
display: flex;

width: 55%;
flex-direction: column;
@media (max-width: 1000px) {
        width: 100%;
        padding: 1rem;
    }
`
export const FaqContainer = styled.div`
    width: 100%;
`
export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const QuestionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    background-color: white;
    padding-block: 1rem;
    cursor: pointer;
    &:not(:last-child) {
        border-bottom: 1px solid black;
    };
    &:hover {
        background-color: #b26500;
        color: white;
    }
`
export const QuestionText = styled(Typography)`
    color: black;

`


export const TextBox = styled.div`
    max-height: 0px;
    align-items: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    transition: all ease .5s;
    & * {
        text-align: left;
    };
    &.show {
        max-height: 300px;
    };
    &.hide {
        max-height: 0 !important;
    }

`
