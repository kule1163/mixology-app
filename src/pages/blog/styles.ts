import { Typography } from "@mui/material"
import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
    
`
export const Container = styled.div`
padding: 5rem 5rem;
@media (max-width: 1000px) {
    padding: 5rem 1rem;
};

`
export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    row-gap: 2rem;
    @media (max-width: 1000px) {
    column-gap: 2rem;
};    
@media (max-width: 700px) {
    grid-template-columns: 1fr;
};

`
export const SingleItemBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    & * {
        text-align: left;
    };
    & img {
        width: 100%;
        height: 30vw;
        object-fit: cover;
    };
    @media (max-width: 700px) {
        & img {
        height: 50vh;
    };
};
`
export const ReadMore = styled(Typography)`
    color: #b26500;
    cursor: pointer;
    font-size: 1.5em !important;
    margin-right: 1rem !important;
`
export const Label = styled.div`
    color: white;
    background-color: #b26500;
    position: absolute;
    display: inline-flex;
    padding: .6rem;
    border-radius: 20px;
    top: .5rem;
    left: .5rem;

`

