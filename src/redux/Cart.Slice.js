import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        cart:JSON.parse(localStorage.getItem("cart") ||"[]")
    },
    reducers:{
        addProduct(state,action){

            
            const filterData = state.cart.find((cur,i)=>cur.id ===action.payload.id)
            if(filterData){
                // only increase quantity
                state.cart = state.cart.map((cur)=>{
                    if(cur.id ===action.payload.id){
                        return {
                            ...cur,
                            quantity:cur.quantity+1
                        }
                    }
                    return cur
                })
                localStorage.setItem("cart",JSON.stringify(state.cart))
                toast.success("Item Quanity Increase")
                return
            }


            state.cart.push(action.payload)
            localStorage.setItem("cart",JSON.stringify(state.cart))
            toast.success("Item Added Into Cart")
        },
        removeCart(state,action){ 
            state.cart = state.cart.filter((cur)=>cur.id !==action.payload)
            toast.success("Item Removed")
            localStorage.setItem("cart",JSON.stringify(state.cart))

        },
        incrementQty(state,action){
            // item exist hai ki nhi , hai tabhi uski quanity increase karni hain

            const existData = state.cart.find((cur)=>cur.id === action.payload)
            if(existData){
                    state.cart = state.cart.map((cur,i)=>{
                        if(cur.id === action.payload){
                            return {
                                ...cur,
                                quantity:cur.quantity+1
                            }
                        }
                        return cur
                    })
                    localStorage.setItem("cart",JSON.stringify(state.cart))
                    toast.success("Quantity Increase")
            }else{
                toast.error("Product Not Exist")
            }

        },
        decrementQty(state,action){

            // ki agar uski qty alredy 1 , request ki decrease to remove karna hain

            const existData = state.cart.find((cur,i)=>cur.id === action.payload)
            if(existData){

                if(existData.quantity <=1){
                    state.cart = state.cart.filter((cur)=>cur.id !==action.payload)
                    toast.success("Item Removed")

                }
                else{
                    state.cart = state.cart.map((cur)=>{
                        if(cur.id === action.payload){
                            return {
                                ...cur,
                                quantity:cur.quantity-1
                            }
                        }
                        return cur
                    })
    
                        toast.success("Quantity Decrease")
                }
                localStorage.setItem("cart",JSON.stringify(state.cart))

               
            }else{
                toast.error("Product Not Exist")
            }

        }
    }
})

export const {addProduct, removeCart, incrementQty, decrementQty} = CartSlice.actions;

export const CartSlicePath = (store)=>store.cartSlice.cart