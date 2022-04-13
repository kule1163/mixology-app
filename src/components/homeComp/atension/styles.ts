import styled from "styled-components";

export const MainCointer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 5rem;
    @media (max-width: 1000px) {
    flex-direction: column;
    padding: 5rem 1rem;
    padding-bottom: 0 !important;
    padding-inline: 1rem !important;
}
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 65% !important; */
   /*  border: 5px solid red; */
    & * {

        text-align: left !important;
    };


`
export const ContentBox = styled.div`
width: 85%;
visibility: hidden;
@media (max-width: 1000px) {
    width: 100%;
}
`
interface ImageBoxProps {
    background?: string;
}
export const ImageBox = styled.div<ImageBoxProps>`
   /*  width: 35%; */
   visibility: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
    
    & img {
        width: auto;
        height: 100vh;
    };
    @media (max-width: 1000px) {
    width: 100%;
    margin-block: 3rem;
    
}
`
export const TextBox = styled.div`
    display: flex;

    align-items: center; 
    &:not(:last-child) {
        margin-bottom: .5rem;
    };
    & .dot {
        /* width: 500px; */
        flex-grow: 0 !important;
        flex-shrink: 0;
        margin-right: 1rem;
        font-size: 25px;
    };
`
export const HeaderBox = styled.div`
    width: 65%;
    @media (max-width: 1000px) {
    width: 100%;
}
`

interface BoxProps {
    top: number;
    left: number;
}

export const Box = styled.div<BoxProps>`
    background-color: red;
    z-index: 1000;
    position: absolute;
    top: ${props => `${0 + props.top}px`};
    left: ${props => `${0 + props.left}px`};
    width: 100px;
    height: 100vh;
    border: solid red 1px;
`