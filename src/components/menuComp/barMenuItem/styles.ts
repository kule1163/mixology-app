import styled from "styled-components"

interface MainContainerProps {
    background: string
}

export const MainContainer = styled.div<MainContainerProps>`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 5rem;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    &:after {
        position: absolute;
        content: "''";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,.7);
    };
    @media (max-width: 1000px) {
       padding: 5rem 0rem;
    }
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    column-gap: 4rem;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
        column-gap: 0;
    }
`
export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
  /*   align-items: center;
    justify-content: center; */
    & * {
        text-align: left;
    }
    @media (max-width: 1000px) {
        width: 90vw;
    }
   
`
/* export const ContentBox=styled.div */

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;
`
export const Line = styled.div`
    margin-inline: 20px;
    width: 100%;
    height: 1px;
    background-color: white;
    @media (max-width: 1000px) {
        width: 100%;
    }
`
export const BarItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
