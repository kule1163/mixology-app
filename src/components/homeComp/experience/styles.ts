import styled from "styled-components";
import {Typography} from "@mui/material"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    & img {
        height: 70vh;
        width: 100%;
        object-fit: cover;
    }
`
export const ContentBox = styled.div`
    margin-top: 5rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        width: 70%;
    };
    @media (max-width: 700px) {
        width: 90%;
    }
`
export const ExperienceBox = styled.div`
    margin-block: 5rem;
    visibility: hidden;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        width: 70%;
    };
    @media (max-width: 700px) {
        width: 90%;
    }
`

export const Mixology = styled(Typography)`
    font-size: 1.2em !important;
    color: #B26500;
    font-weight: bolder;
    cursor: default;
`
export const Header = styled(Typography)`
    color: white;
    cursor: default;
    text-align: center;
    margin-top: 1rem !important;
    margin-bottom: 2.5rem !important;
    `

export const Text = styled(Typography)`
    color: white;
    text-align: center;
    font-size: 1.3em !important;
    cursor: default;
`
