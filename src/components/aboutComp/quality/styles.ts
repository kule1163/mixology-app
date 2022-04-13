import styled from "styled-components";
import { border } from "../../navbar/styles";

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
    padding: 5rem 5rem;
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 5rem 0;
    
    }
    
`
export const ContentBox = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    
    width: 70%;
    & * {
        text-align: left !important;
    }
    @media (max-width: 1000px) {
        width: 100%;
        padding-left: 1rem;
    }
`
export const SliderBox = styled.div`
    width: 40vh;
    height: 40vh;
    visibility: hidden;
   /*  padding: 1rem; */
    box-sizing: border-box;
    border-block: ${border};
    & img {
        object-fit: cover;
        /* width: 65% !important; */
        height: 70% !important;
    };
     @media (max-width: 1000px) {
        width: 100%;
    }
`