import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [
         {name:"Apple", price:10},
         {name:"orange", price:15},
         {name:"Grapes", price:20}
    ],
    cart:[],
    total:0
}

const cartSlice = createSlice(
    {
        name:"cart",
        initialState,
        reducers:{
            addToCart: (state, action) => {
                state.cart = [...state.cart,{name:action.payload.name,price:action.payload.price}];
                state.total = state.total + action.payload.price
            }
        }
    }
)

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer