import styled from "styled-components"


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
    margin-top: 5rem;
`

export const FormContainer = styled.div`
    width: 100%;
    padding: 2rem 5rem;
    box-sizing: border-box;
    @media (max-width: 1000px) {
        padding: 2rem 1rem;
    }
`
export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 5rem;
    & * {
        text-align: left;
        
    };
    box-sizing: border-box;
   @media (max-width: 1000px) {
       padding: 1rem 1rem;
   }
    
`