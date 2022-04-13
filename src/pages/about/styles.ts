import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
   
    
`
interface BookaTableBoxProps {
    background: string
}

export const BookaTableBox = styled.div<BookaTableBoxProps>`
  /*   position: relative; */

  box-sizing: border-box;
    display: flex;
    justify-content: end;
    height: 70vh;
    width: 100%;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    margin-top: 2rem; 
    @media (max-width: 1000px) {
        justify-content: center;
        
    }

`

export const ButtonBox = styled.div`
    display: flex;
    visibility: hidden;
    width: 420px;
    height: 40vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b26500;
    margin-top: -3rem;
    margin-right: 8%;
    @media (max-width: 1000px) {
     margin-right: 0;
        width: 90vw;
    };
    @media (max-device-height: 500px) {
     height: 60vh;
    }
`


export const ButtonSecondry = styled.div`
    border: black 1px solid;
    margin-top: 2.5rem;
    display: inline-block;
    cursor: pointer;
    font-size: 1.1em;
    border-inline: none !important;
    box-sizing: border-box;
    background-color: black;
    color: white;
    padding: .7rem 1.2rem;
    transition: all 1s ease;
    &:hover{
        background-color: #b26500;
        color: black;
    }
`