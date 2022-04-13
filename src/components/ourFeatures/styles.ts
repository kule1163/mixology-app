import styled from "styled-components";


interface MainContainerProps {
    background: string
}
export const MainContainer = styled.div<MainContainerProps>`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    height: 60vh;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: 125% 125%;
    background-repeat: no-repeat;
    @media (max-width: 700px) {
        height: 40vh;
        
    };
    @media (max-device-height: 500px) {
        height: 100vh !important;
    };
    & * {
        z-index: 10;
    };
    &:after{
        content: "''";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0, .8);
    }
`
