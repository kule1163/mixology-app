import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    @media (max-width: 1100px) {
        padding: 5rem 1rem;
    }
    @media (max-width: 1000px) {
        padding: 5rem 1rem;
        flex-direction: column;
    }
`
export const ImageContainer = styled.div`
height: 70vh;
width: 60%;
& img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
    @media (max-width: 1000px) {
        width: 80%;
        margin-inline: auto;
    };
    @media (max-width: 700px) {
        width: 100%;
        margin-inline: auto;
    };
`
export const BUttonContainer = styled.div`
    height: 60vh;
    width: 30%;
    padding-inline: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b26500;
    @media (max-width: 1000px) {
        width: 100%;
        height: 40vh;
        margin-top: 1rem;
    };
    @media (max-device-height: 500px) {
        height: 60vh;
    }

`
