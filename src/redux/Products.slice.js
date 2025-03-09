import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name:'ProductSlice',
    initialState:{
        products:[]
    },
    reducers:{
        addProducts(state,action){
            state.products = action.payload
        }
    }
})

export const{addProducts} = ProductSlice.actions