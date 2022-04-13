import styled from "styled-components"
import { border } from "../../components/navbar/styles"

export const MainContainer = styled.div`
    position: relative;
`
export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`
interface SideBarBox {
    show: boolean
}
export const SideBarBox = styled.div<SideBarBox>`
    position: fixed;
    transition: left 1.5s ease;
    top: 0;
    z-index: 1000;
    left: ${props => props.show ? "0" : "-100%"};
  /*   display: inline-flex; */
`
export const ComemntSliderBox = styled.div`
    padding: 5rem;
    position: relative;
    @media (max-width: 1000px) {
        padding: 0;
        margin-block: 5rem;
    };
`
export const LeftQuotes = styled.div`
    position: absolute;
    z-index: 100;
    top: 3.5rem;
    left: 6rem;
    font-size: 40px;
`
export const RightQuotes = styled.div`
    position: absolute;
    z-index: 1000;
    right: 6rem;
    bottom: 3.5rem;
    font-size: 40px;
    transform: rotateZ(180) /* rotateY(180deg) */;
    -webkit-transform: rotateZ(180) /* rotateY(180deg) */;
`
export const FeaturesBox = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 5rem;
    };
`
export const LeftBox = styled.div`
    flex: 1;
    border: ${border};
    visibility: hidden;
    border-left: none !important;
    @media (max-width: 1000px) {
        border: none;
        border-top: ${border} !important;
    };
`

export const RightBox = styled.div`
    flex: 1;
    visibility: hidden;
    border-block: ${border};
    @media (max-width: 1000px) {
        border-block: none;
        border-bottom: ${border} !important;
    };
`


