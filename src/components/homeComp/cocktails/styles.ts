import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    padding: 0 7rem;
    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 0 1rem;
    };
`
export const SliderBox = styled.div`
    width: 40%;
    margin-top: -12rem;
    visibility: hidden;
    @media (max-width: 1000px) {
        width: 100%;
    };
    @media (max-width: 700px) {
        margin-top: 0;
    };
`
export const ContentContainer = styled.div`
    width: 60%;
    z-index: 10;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 1000px) {
        width: 100%;
    };
`
export const ContentBox = styled.div`
    width: 70%;
   visibility: hidden;
    @media (max-width: 1000px) {
        width: 100%;
    };
`
export const ButtonPrimary = styled.button`
    border: #b26500 1px solid;
    visibility: hidden;
    margin-top: 2.5rem;
    display: inline-block;
    cursor: pointer;
    font-size: 1.1em;
    border-inline: none !important;
    box-sizing: border-box;
    background-color: #b26500;
    color: black;
    padding: .7rem 1.2rem;
    transition: all 1s ease;
    &:hover{
        background-color: black;
        color: white;
    }
`