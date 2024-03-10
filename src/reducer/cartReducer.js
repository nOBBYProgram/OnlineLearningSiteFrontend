import { createSlice } from "@reduxjs/toolkit";


const cartReducer = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalItems:0,
        totalAmount:0,

    },
    reducers:{
        addItem:(state,action)=>{
           const newItem = action.payload;

           const existingItem = state.cartItems.some((item)=>item.id === newItem.id)
           if(!existingItem){
            state.cartItems.push(newItem)
           }
           state.totalItems = state.cartItems.length;
           state.totalAmount =state.cartItems.reduce((total,item)=> item.price === 'free'?total + 0 : total + parseInt(item.price),0)
        },
       
        removeItem:(state,action)=>{
            const idToRemove = action.payload
            state.cartItems =state.cartItems.filter((item)=>item.id !== idToRemove)
            state.totalItems = state.cartItems.length;
            state.totalAmount =state.cartItems.reduce((total,item)=> item.price === 'free'?total + 0 : total + parseInt(item.price),0)
        },
        clearCart:(state,action)=>{
            state.cartItems = [];
            state.totalItems = 0;
            state.totalAmount =0
        }

    }
})

export const {addItem,removeItem,clearCart} = cartReducer.actions;
export default cartReducer.reducer;