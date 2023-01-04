import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    totalAmount: localStorage.getItem('totalAmount') || 0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct(state,action){
            // Check if product is available
            const existingItem = state.items.findIndex(item => item.id === action.payload.id);
            if(existingItem > -1){
                state.items[existingItem].amount = action.payload.amount;
            
            }else{

                state.items.push(action.payload)
            }
            // Adding the item if not available and increasin total
            state.totalAmount= state.items.reduce((cur,val) => cur + (val.amount * val.price),0)
            localStorage.setItem('items', JSON.stringify(state.items))
            localStorage.setItem('totalAmount', state.totalAmount)
        },
        deleteSingleProduct(state,action) {
            const produnctIndex = state.items.find((item) => item.id === action.payload.id)
            state.items.splice(produnctIndex,1)
            state.totalAmount= state.items.reduce((cur,val) => cur + (val.amount * val.price),0)
        },
        deleteAllItem(state) {
          state.items =[];
          state.totalAmount= 0;
        }

    }
})

export const {deleteAllItem, deleteSingleProduct, addProduct} = cartSlice.actions;
export default cartSlice.reducer