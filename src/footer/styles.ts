import { Typography } from "@mui/material"
import styled from "styled-components"
import { border } from "../components/navbar/styles"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    align-items: center;
    justify-content: center;
    padding-block: 3rem;
`
export const FirstSection = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 10rem;
    margin-bottom: 2rem;
    @media (max-width: 1000px) {
        grid-template-columns: auto;
        row-gap: 2rem;
    }
`
export const SingleBox = styled.div`
    display: flex;
    /* border: 2px solid blue; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const MenuContainer = styled.div`
   /*  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    /* align-items: center;
    justify-content: space-evenly; */
    /* padding: 1.5rem, 3rem; */
    padding-block: 1.1rem;
/*     padding-inline: ;
 */    border-block: ${border};
   & .customText {
    color: white;
    cursor: pointer;
    font-size: 1.5em !important;
    &:hover{
        color: #b26500
    }
   }
`
export const Header = styled(Typography)`
    color: white;
    margin-bottom: 1rem !important;
    font-size: 1.5em !important;
`
export const Text = styled(Typography)`
    color: white;
    font-size: 1.3em !important;
`
export const MenuText = styled(Typography)`
    color: white;
    cursor: pointer;
    font-size: 1.5em !important;
    &:hover{
        color: #b26500
    }
`
export const BottomContainer = styled.div`
    height: 20vh;
`
export const UpBox = styled.div`
    
`
