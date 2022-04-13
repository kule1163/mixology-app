import {createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    show: boolean;
    post: string;
}

const initialState = {
    show: false,
    post: ""
}

export const cocktailSlice = createSlice({
    name: "cocktail",
    initialState,
    reducers: {
        setShow: (state, action:PayloadAction<boolean>) => {
            state.show = action.payload
        },
        setPost: (state, action:PayloadAction<string>) => {
            state.post = action.payload
        }

    }
})

export const {setShow, setPost} = cocktailSlice.actions

export default cocktailSlice.reducer