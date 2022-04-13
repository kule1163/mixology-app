import styled from "styled-components"

export const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    } 
`