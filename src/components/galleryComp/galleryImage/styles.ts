import styled from "styled-components"

export const MainContainer = styled.div`
    padding: 5rem 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1rem;
    & .parallax {
        position: absolute;
        bottom: -5rem;
    };
    @media (max-width: 1000px) {
        padding: 5rem 1rem;
    };
    @media (max-width: 700px) {
        padding: 5rem 1rem;
        grid-template-columns: 1fr;
        row-gap: 2rem;
        column-gap: 0;
        & .parallax {
        position: relative;
        bottom: 0;
    };   
    }

`

export const ItemBox = styled.div`
    height: 30vw;
    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    };
    @media (max-width: 700px) {
        height: 60vh;
       
    }
`