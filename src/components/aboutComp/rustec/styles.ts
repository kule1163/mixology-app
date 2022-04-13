import styled from "styled-components";

export const ImageBox = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    };
    & .box {
        width: 370px;
    height: 250px;
    };
    @media (max-width: 1200px) {
        display: none;
    }
`
export const BarBox = styled.div`
    position: absolute;
    right: -20px;
    bottom: 300px;
    z-index: 10;
`
export const WineBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 30px;

`