import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./Products.slice";
import { CartSlice } from "./Cart.Slice";

export const store = configureStore({
    reducer:{
        [ProductSlice.name]:ProductSlice.reducer,
        [CartSlice.name]:CartSlice.reducer
    }
})