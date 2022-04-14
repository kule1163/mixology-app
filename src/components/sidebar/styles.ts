import styled from "styled-components";
import { Typography } from "@mui/material";

export const MainContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 100vh;
    background-color: rgba(178, 101, 0, .9);
    & img {
        width: 75%;
        object-fit: cover;
        height: auto;
    };
    @media (max-height: 550px) {
        overflow-y: auto;
    }
`

export const CloseBox = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;

`

export const MenuItemsContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
& .sidebarText {
    font-size: 1.7em !important;
    color: white;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 2rem !important;
    };
   
    &:hover {
        color: black
    };
}
& .sidebarBox {
       
    &:not(:last-child) {
        margin-bottom: 2rem !important;
    };
}
`

export const MenuItem = styled(Typography)`
    font-size: 1.5em !important;
    color: white;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 1.2rem;
    }
    &:hover {
        color: black
    }
`