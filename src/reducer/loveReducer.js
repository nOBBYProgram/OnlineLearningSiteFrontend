import { createSlice } from "@reduxjs/toolkit";


const loveReducer = createSlice({
    name:'love',
    initialState:{
        loveItems:[],
        totalLoveItems:0
    },
    reducers:{
        addToLoveList:(state,action)=>{
            const newloveList = action.payload
const existingItem = state.loveItems.some((item)=>item.id === newloveList.id)

if(!existingItem){
    state.loveItems.push(newloveList)
}
state.totalLoveItems = state.loveItems.length
        },
        removeLoveItem :(state,action)=>{
            const idToRemove = action.payload

            state.loveItems= state.loveItems.filter((item)=>item.id !==idToRemove)

            state.totalLoveItems = state.loveItems.length
        }
    }
})

export const{addToLoveList,removeLoveItem} = loveReducer.actions
export default loveReducer.reducer