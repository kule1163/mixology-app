import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    overflow: hidden;
    box-sizing: border-box;
    @media (max-width:1200px) {
        padding: 5rem 1rem;
    };
    @media (max-width:1000px) {
        flex-direction: column;
    };
`
export const InfoContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    & img {
        height: 70vh;
        width: 100%;
        flex-grow: 0;
    };
    @media (max-width:1000px) {
        & img {
            width: auto;
            height: 70vh;
        };
        align-items: center;
    };
    @media (max-device-height: 500px) {
        & img {
            width: auto;
            height: 100vh;
        };
    }
    
`

export const InfoBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    background-color: #b26500;
    padding: 2rem 0rem 2rem 2rem;
    box-sizing: border-box;
    & * {
        text-align: left;
    };
    @media (max-width:1000px) {
        width: 100vw;
    };
    @media (max-width:500px) {
        padding: 1rem 0 1rem 0;
        align-items: center;
    };
;
`

export const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 55vw;
    padding: 2rem;
    height: 100%;
   
    @media (max-width:1000px) {
        width: 100vw;
    };

`
export const FormBox = styled.div`
    display: flex;
    align-items: start;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    flex-direction: column;
    /* &:not(:first-child) { */
        margin-top: 1rem;
    /* } */
`

export const FormMiddleBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    @media (max-width:700px) {
        grid-template-columns: 1fr;
    };

`
export const Input = styled.input`
    border: none;
    outline: none;
    box-sizing: border-box;
    background-color: transparent;
    color: white;
    width: 100%;
    border-bottom: #b26500 1px solid !important;
    /* margin-top: .5rem; */
    font-size: 1.5em;
    padding: .5rem 1rem;
    &:active {
        border: none;
        outline: none;
    };
    & * {
        color: white
    };
     &::-webkit-calendar-picker-indicator {
        filter: invert(1);
    };
`
export const TextArea = styled.textarea `
box-sizing: border-box;
    background-color: transparent;
    color: white;
    width: 100%;
    border-bottom: #b26500 1px solid !important;
    border: none;
    outline: none;
    font-size: 1.5em;
`
