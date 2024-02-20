import { createSlice, current } from "@reduxjs/toolkit";



const createCart= createSlice({
    name:"cart",
    initialState:{
        data:[]
    },

    reducers:{

        addObj(state,action){
            console.log(current(state))
            state.data.push(action.payload)
        },
        removeObj(state,action){

        },
        clearCart(state,action){

        }
    }
})


export const {addObj,removeObj,clearCart}=createCart.actions
export default createCart.reducer