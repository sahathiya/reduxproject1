import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const productSlice=createSlice({
    name:'product',
    initialState:{value:[],status:'idle'},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,state=>{
            state.status='pending'
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.value=action.payload
        })
        builder.addCase(getProducts.rejected,state=>{
            state.status="failed"
        })
    }
})

export const {fetchdata}=productSlice.actions
export default productSlice.reducer

export const getProducts=createAsyncThunk('products/get',async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const result = await res.json(); 
    return result
})

