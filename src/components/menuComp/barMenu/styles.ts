import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    padding: 5rem 5rem;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.2rem;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding: 5rem 1rem;
        row-gap: 2rem;
    }
`
interface ItemBoxProps {
    background: string
}
export const ItemBox = styled.div<ItemBoxProps>`
    position: relative;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.background});
    background-position: center center;
    transition: all ease 2s;
    background-size: 120% 120%;
    &:after {
        content: "''";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.7);
    };
    &:hover {
        &:after {
        content: "''";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.1);
        };
        background-size: 100% 100%;
    };
    @media (max-device-height: 500px) {
        height: 100vh;
    }
`