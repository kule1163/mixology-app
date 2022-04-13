import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 5rem 5rem; 
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 5rem 0;
    }
`
export const ContentBox = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding-right: 3rem;
    & * {
        text-align: left;
    };
    @media (max-width: 1000px) {
    padding-right: 1rem;
    width: 100%;
    padding-left: 1rem;
    margin-bottom: 3rem;
    }
`
export const SliderBox = styled.div`
    width: 50%;
    & img {
        width: 100% !important;
        height: 80vh !important;
        object-fit: cover !important;
    };
    @media (max-width: 1000px) {
    width: 70%;
    }
    @media (max-width: 700px) {
    width: 90%;
    }
`