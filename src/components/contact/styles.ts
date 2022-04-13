import styled from "styled-components"

export const MainContainer = styled.div`
    padding-block: 3rem;
    visibility: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgContainer = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
    & img {
        object-fit: cover;
        object-position: 10% 10%;
        width: 100%;
        height: 100%;
        visibility: hidden;
    };
    &:after{
        content: "''";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0,.7);
    };
`