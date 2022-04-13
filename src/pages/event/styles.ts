import styled from "styled-components"


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
`
export const ImageContainer = styled.div`
    height: 70vh;
    padding: 5rem 5rem;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
    @media (max-width: 700px) {
        padding: 5rem 1rem;
    }
`
export const SliderContainer = styled.div`
    height: 45vh;
    margin-top: -12rem;
    display: block;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
    @media (max-width: 800px) {
        display: none;
    }
`