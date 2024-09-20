import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:{value:[]},
    reducers:{
        addcart:(state,action)=>{
            state.value.push(action.payload)
        },
        removecart:(state,action)=>{
            state.value=state.value.filter((item)=>item.id!==action.payload)
        }
    }
})
export const{addcart,removecart}=cartSlice.actions
export default cartSlice.reducer